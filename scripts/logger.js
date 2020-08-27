const winston = require('winston');
const path = require('path');

const maxsize = process.env.MAXSIZE || 1024 * 1024;

const logger = winston.createLogger({
  format    : winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple(),
    winston.format.align(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.simple(),
        winston.format.printf(info => `${info.level}:${info.message}`),
      )
    }),
    new winston.transports.File({
      filename: path.resolve(__dirname, '../bot.log'),
      maxsize,
    })
  ]
});

module.exports = logger;
