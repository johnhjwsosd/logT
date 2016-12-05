const logger = require('./content/loghelp.js');


/**
 * level ---trace,debug,info,error,fatal
 * infotitle  show tile
 * logcontent 
 * collectionname mongodb collection name 
 */
module.exports = function (level, infotitle, logcontent, collectionname) {
    logger.logwrite(level, infotitle, logcontent, collectionname);
}

/**
 * test
 */
//env MONGO_DB_CONFIG   mongodb://127.0.0.1:27017/log

 //logger.logwrite("info","test", "this is a test","test");
 //logger.logwrite("error","test", "this is a test","test");