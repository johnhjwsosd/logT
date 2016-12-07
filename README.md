为了自己使用mongo记录日志，基于log4js。
===

<pre><code>
npm install logsys
</code></pre>
<br>

<pre><code>
var logger = require('logsys')
/**
 * level ---trace,debug,info,error,fatal
 * infotitle  show tile
 * logcontent 为了方便查询 日志内容改为JSON
 * collectionname mongodb collection name 
 */
var logger = require("./index.js");
var log = new logger("mongodb://127.0.0.1:27017/test");
log.log("warn", "test", { name: "test", age: 18 }, "test")
</code></pre>