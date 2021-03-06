/**
 * test
 */




var logger = require("./index.js");
var log = new logger("mongodb://127.0.0.1:27017/test");


/**
 * level ---trace,debug,info,error,fatal
 * infotitle  show tile
 * logcontent 为了方便查询 日志内容改为JSON,若有content则只输出content的内容
 * collectionname mongodb collection name 
 */
log.log("warn", "test", { name: "test2", age: "23", content: "test1" }, "test1")



/**
 * collectionname 集合表名
 * field 过滤字段 values 过滤值
 */
log.read("test1");
//log.read("test1", "content.name", "test1")


/**
 * 捕获异常
 * 
 */
process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});