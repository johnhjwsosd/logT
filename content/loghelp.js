const log4js = require('log4js');
const mongo  = require('./mongodb.js');
//var path = __dirname + '/../appenders/mongodb'    ---- mongodb附加文件地点

log4js.configure({
    appenders: [
        { type: 'console' }, //控制台输出
    ]
});

var logwrite = function (level,infotitle, logcontent,collectionname) {
    var logger = log4js.getLogger(infotitle);
    logger.setLevel(level);
    writeConsole(logcontent, logger);

    if(level === 'error' || level === 'fatal'){
        writeMongodb(level,infotitle, logcontent,collectionname);
    }
}

var writeConsole = function (logcontent, logger) {
    logger.trace(logcontent);
    logger.debug(logcontent);
    logger.info(logcontent);
    logger.warn(logcontent);
    logger.error(logcontent);
    logger.fatal(logcontent);
}


var writeMongodb = function (level,infotitle, logcontent,collectionname) {
    mongo.insertData(level,infotitle,logcontent,collectionname);
    //console.log('writing db');
}


module.exports = {
    logwrite: logwrite
}