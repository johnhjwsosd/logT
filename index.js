
var logObj = require('./content/loghelp.js');

function Logger(host) {
    global.MONGO_DB_CONFIGs = host;//"mongodb://127.0.0.1:27017/log"
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



var logger = module.exports = Logger;