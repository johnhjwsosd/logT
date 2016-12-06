const log4js = require('log4js');
const mongo = require('./mongodb.js');
//var path = __dirname + '/../appenders/mongodb'    ---- mongodb附加文件地点

log4js.configure({
    appenders: [
        { type: 'console' }, //控制台输出
    ]
});

var logwrite = function (level, infotitle, logcontent, collectionname) {
    var logger = log4js.getLogger(infotitle);
    //logger.setLevel("info");
    writeConsole(logcontent, logger, level);

    if (level === 'error' || level === 'fatal') {
        writeMongodb(level, infotitle, logcontent, collectionname);
    }
}

var writeConsole = function (logcontent, logger, level) {
    switch (level) {
        case "info":
            logger.info(logcontent);
            break;
        case "trace":
            logger.trace(logcontent);
            break;
        case "debug":
            logger.debug(logcontent);
            break;
        case "warn":
            logger.warn(logcontent);
            break;
        case "error":
            logger.error(logcontent);
            break;
        case "fatal":
            logger.fatal(logcontent);
            break;
        default:
            logger.info(logcontent);
            break;
    }
}


var writeMongodb = function (level, infotitle, logcontent, collectionname) {
    mongo.insertData(level, infotitle, logcontent, collectionname);
}


module.exports = {
    logwrite: logwrite
}