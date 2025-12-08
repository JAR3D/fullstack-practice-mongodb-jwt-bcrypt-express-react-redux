import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import logger from './utils/logger.js';
import { MONGODB_URI } from './utils/config.js';
import usersRouter from './controllers/usersRouter.js';

logger.log('connecting to', MONGODB_URI);

// mongoose.set('strictQuery', false);

mongoose
    .connect(MONGODB_URI, { family: 4 })
    .then(() => {
        logger.log('connected to mongoDb');
    })
    .catch((error) => {
        logger.error('error connecting to mongoDb:', error.message);
    });

const app = express();

app.use(cors());
// app.use(express.static('dist'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.use('/api/users', usersRouter);

export default app;
