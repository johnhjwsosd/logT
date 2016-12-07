/**
 * test
 */



var logger = require("./index.js");
var log = new logger("mongodb://127.0.0.1:27017/test");
log.log("warnXXX", "test", { name: "test", age: 80, content: "just test" }, "test")
