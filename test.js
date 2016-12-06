/**
 * test
 */
//env MONGO_DB_CONFIG   mongodb://127.0.0.1:27017/log

//logger.logwrite("info","test", "this is a test","test");
//logger.logwrite("error","test", "this is a test","test");

var logger = require("./index.js");
var log = logger.Create("mongodb://127.0.0.1:27017/log");
log.log("error", "test", "this is a test", "test")