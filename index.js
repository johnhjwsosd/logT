


/**
 * level ---trace,debug,info,error,fatal
 * infotitle  show tile
 * logcontent 为了方便查询 日志内容改为JSON
 * collectionname mongodb collection name 
 */
module.exports.Create = function (host) {
    process.env.MONGO_DB_CONFIGs = host;//"mongodb://127.0.0.1:27017/log"
    const logger = require('./content/loghelp.js');
    return logger;
}
logger.prototype.log = function (level, infotitle, logcontent, collectionname) {
    logger.logwrite(level, infotitle, logcontent, collectionname);
}



