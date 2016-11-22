const logger = require('./content/loghelp.js');


/**
 * level ---trace,debug,info,error,fatal
 * infotitle  show tile
 * logcontent 
 * collectionname mongodb collection name 
 */
module.exports=function(level,infotitle, logcontent,collectionname){
    logger.logwrite(level,infotitle, logcontent,collectionname);
}
