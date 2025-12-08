import { PORT } from './utils/config.js';
import app from './app.js';
import logger from './utils/logger.js';

app.listen(PORT, () => {
    logger.log(`server running on port: ${PORT}`);
});
