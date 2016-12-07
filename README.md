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
log.log("warnXXX", "test", { name: "test", age: 80, content: "just test" }, "test")
</code></pre>