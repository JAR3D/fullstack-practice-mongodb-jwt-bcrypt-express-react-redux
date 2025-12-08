import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.js';
import { JWT_SECRET } from '../utils/config.js';

const usersRouter = express.Router();

usersRouter.get('/', async (req, res) => {
    const users = await User.find({}).populate('notes', {
        content: 1,
        important: 1,
    });

    res.json(users);
});

usersRouter.post('/', async (req, res) => {
    const { username, name, password } = req.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
        username,
        name,
        passwordHash,
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);
});

usersRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    const isPasswordValid = !user
        ? false
        : await bcrypt.compare(password, user.passwordHash);

    if (!(user && isPasswordValid)) {
        return res.status(401).json({ error: 'invalid username or password' });
    }

    const userForToken = { username, id: user.id };

    const token = jwt.sign(userForToken, JWT_SECRET, { expiresIn: 60 * 60 });

    res.status(200).json({ token, username, name: user.name });
});

export default usersRouter;
