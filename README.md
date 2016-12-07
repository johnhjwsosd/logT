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
 * logcontent 为了方便查询 日志内容改为JSON,若有content则只输出content的内容
 * collectionname mongodb collection name 
 */
var log = new logger("mongodb://127.0.0.1:27017/test");
log.log("warn", "test", { name: "test2", age: "23", content: "test1" }, "test1")


/*
*add readlog methods
*/
log.read("test1");

console.log('---------------------');

log.read("test1", "content.name","test1")
</code></pre>