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

    //根据级别写shuju
    // if (level === 'error' || level === 'fatal') {
    //     writeMongodb(level, infotitle, logcontent, collectionname);
    // }

    writeMongodb(level, infotitle, logcontent, collectionname);

}

var writeConsole = function (logcontent, logger, level) {
    switch (level) {
        case "info":
            logger.info(logcontent.content||JSON.stringify(logcontent));
            break;
        case "trace":
            logger.trace(logcontent.content||JSON.stringify(logcontent));
            break;
        case "debug":
            logger.debug(logcontent.content||JSON.stringify(logcontent));
            break;
        case "warn":
            logger.warn(logcontent.content||JSON.stringify(logcontent));
            break;
        case "error":
            logger.error(logcontent.content||JSON.stringify(logcontent));
            break;
        case "fatal":
            logger.fatal(logcontent.content||JSON.stringify(logcontent));
            break;
        default:
            logger.info(logcontent.content||JSON.stringify(logcontent));
            break;
    }
}


var writeMongodb = function (level, infotitle, logcontent, collectionname) {
    mongo.insertData(level, infotitle, logcontent, collectionname);
}


module.exports = {
    logwrite: logwrite
}