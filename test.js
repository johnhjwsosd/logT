/**
 * test
 */



var logger = require("./index.js");
var log = new logger("mongodb://127.0.0.1:27017/test");
log.log("warn", "test", { name: "test", age: 18 }, "test")
