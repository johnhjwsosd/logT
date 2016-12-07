
//process.env.TZ = ''

var logObj = require('./lib/loghelp.js');

function Logger(host) {
    global.MONGO_DB_CONFIGs = host;
}


/**
 * level ---trace,debug,info,warn,error,fatal
 * infotitle  show title
 * logcontent 为了方便查询 日志内容改为JSON
 * collectionname mongodb collection name 
 */
Logger.prototype.log = function (level, infotitle, logcontent, collectionname) {
    logObj.logwrite(level, infotitle, logcontent, collectionname);
}

Logger.prototype.read = function (logcontent, field, values) {
    logObj.logRead(logcontent, field, values);
}



var logger = module.exports = Logger;