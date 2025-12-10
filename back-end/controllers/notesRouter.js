import express from 'express';
import jwt from 'jsonwebtoken';
import Note from '../models/note.js';
import User from '../models/user.js';
import { JWT_SECRET } from '../utils/config.js';

const notesRouter = express.Router();

notesRouter.get('/', async (req, res) => {
    const notes = await Note.find({});

    if (notes) {
        res.json(notes);
    } else {
        res.status(404).json({ error: 'notes not found' });
    }
});

notesRouter.post('/', async (req, res) => {
    const authorizationHeader = req.get('authorization');

    let token = null;

    if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
        token = authorizationHeader.replace('Bearer ', '');
    }

    const decodedToken = jwt.verify(token, JWT_SECRET);

    if (!decodedToken.id) {
        return res.status(401).json({ error: 'invalid token' });
    }

    const user = await User.findById(decodedToken.id);

    if (!user) {
        return res.status(400).json({ error: 'userId missing or not valid' });
    }

    const noteFromBody = req.body;

    const note = new Note({
        ...noteFromBody,
        user: user.id,
    });

    const savedNote = await note.save();

    user.notes = [...user.notes, savedNote._id];

    await user.save();

    res.status(201).json(savedNote);
});

export default notesRouter;
