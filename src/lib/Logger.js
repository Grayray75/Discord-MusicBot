const winston = require('winston');
const colors = require('colors');

class Logger {
    constructor(file) {
        this.logger = winston.createLogger({
            transports: [new winston.transports.File({ filename: file })]
        });
    }

    log(text) {
        let date = new Date();
        this.logger.log({
            level: 'info',
            message: 'info: ' + text
        });
        console.log(colors.gray(getDateString(date)) + colors.green(' | ' + text));
    }

    warn(text) {
        let date = new Date();
        this.logger.log({
            level: 'warn',
            message: 'warn: ' + text
        });
        console.log(colors.gray(getDateString(date)) + colors.yellow(' | ' + text));
    }

    error(text) {
        let date = new Date();
        this.logger.log({
            level: 'error',
            message: 'error: ' + text
        });
        console.log(colors.gray(getDateString(date)) + colors.red(' | ' + text));
    }
}

function getDateString(date) {
    function pad(n) {
        return n < 10 ? '0' + n : n;
    }
    return `[${date.getFullYear()}-${pad(date.getMonth())}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}]`;
}

module.exports = Logger;
