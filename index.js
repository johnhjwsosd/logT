
//process.env.TZ = ''

var logObj;

function Logger(host) {
    global.MONGO_DB_CONFIG = host;
    logObj = require('./lib/loghelp.js');
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


/**
 * collectionname 集合表名
 * field 过滤字段 values 过滤值
 */
Logger.prototype.read = function (collectionname, field, values) {
    logObj.logRead(collectionname, field, values);
}



var logger = module.exports = Logger;