import logger from '../utils/logger.js';

const errorHandler = (error, req, res, next) => {
    logger.error(error.message);

    switch (error.name) {
        case 'MongoServerError':
            if (error.message.includes('E11000 duplicate')) {
                return res
                    .status(400)
                    .json({ error: 'username already taken' });
            }
            break;
        default:
            next(error);
            break;
    }
};

export default { errorHandler };
