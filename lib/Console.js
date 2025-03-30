const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const logFilePath = path.join(__dirname, '../logs/app.log');

const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });
const logStreamError = fs.createWriteStream(logFilePath, { flags: 'a' });
const logStreamWarn = fs.createWriteStream(logFilePath, { flags: 'a' });
const logStreamSuccess = fs.createWriteStream(logFilePath, { flags: 'a' }); 

const logStreamInfo = fs.createWriteStream(logFilePath, { flags: 'a' });
const logStreamDebug = fs.createWriteStream(logFilePath, { flags: 'a' });
const logStreamTrace = fs.createWriteStream(logFilePath, { flags: 'a' });
const logStreamFatal = fs.createWriteStream(logFilePath, { flags: 'a' });

const now = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

const log = (message) => {
    console.log(chalk.blue(`[LOG]: ${message}`));
    logStream.write(`[LOG][${now}]: ${message}\n`);
};

const error = (message) => {
    console.log(chalk.red(`[ERROR]: ${message}`));
    logStreamError.write(`[ERROR]: ${message}\n`);
};

const warn = (message) => {
    console.log(chalk.yellow(`[WARN]: ${message}`));
    logStreamWarn.write(`[WARN]: ${message}\n`);
};

const success = (message) => {
    console.log(chalk.green(`[SUCCESS]: ${message}`));
    logStreamSuccess.write(`[SUCCESS]: ${message}\n`);
};

const info = (message) => {
    console.log(chalk.cyan(`[INFO]: ${message}`));
    logStreamInfo.write(`[INFO]: ${message}\n`);
};

const debug = (message) => {
    console.log(chalk.magenta(`[DEBUG]: ${message}`));
    logStreamDebug.write(`[DEBUG]: ${message}\n`);
};

const trace = (message) => {
    console.log(chalk.gray(`[TRACE]: ${message}`));
    logStreamTrace.write(`[TRACE]: ${message}\n`);
};

const fatal = (message) => {
    console.log(chalk.bgRed.white(`[FATAL]: ${message}`));
    logStreamFatal.write(`[FATAL]: ${message}\n`);
};

class Console{
    constructor(moduleName) {
        this.moduleName = moduleName;
        this.now = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    }

    success(message) {
        console.log(chalk.green(`[${this.moduleName}] [SUCCESS][${this.now}]: ${message}`));
        logStreamSuccess.write(`[${this.moduleName}] [SUCCESS][${this.now}]: ${message}\n`);
    }

    warning(message) {
        console.log(chalk.yellow(`[${this.moduleName}] [WARNING][${this.now}]: ${message}`));
        logStreamWarn.write(`[${this.moduleName}] [WARNING][${this.now}]: ${message}\n`);
    }

    log(message) {
        console.log(chalk.blue(`[${this.moduleName}] [LOG][${this.now}]: ${message}`));
        logStream.write(`[${this.moduleName}] [LOG][${this.now}]: ${message}\n`);
    }

    error(message) {
        console.log(chalk.red(`[${this.moduleName}] [ERROR][${this.now}]: ${message}`));
        logStreamError.write(`[${this.moduleName}] [ERROR][${this.now}]: ${message}\n`);
    }
}

module.exports = {
    Console,
    log,
    error,
    warn,
    success,
    info,
    debug,
    trace,
    fatal
};
