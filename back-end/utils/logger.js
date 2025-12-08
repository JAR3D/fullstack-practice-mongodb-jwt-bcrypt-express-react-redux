const logger = {
    log(...params) {
        console.log('*** log:', ...params);
    },

    error(...params) {
        console.error('*** error:', ...params);
    },
};

export default logger;
