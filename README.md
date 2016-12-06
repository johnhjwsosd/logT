为了自己使用mongo记录日志，基于log4js。
===

例:
--
添加环境变量存储环境mongodb的配置<br>
MONGO_DB_CONFIG=mongodb://127.0.0.1:27017/test
<br>

<pre><code>
var logger = require('logsys')
/**
 * level ---trace,debug,info,error,fatal
 * infotitle  show tile
 * logcontent 为了方便查询 日志内容改为JSON
 * collectionname mongodb collection name 
 */
logger("error","mytt",{"name":"john","age":18},"t1")
</code></pre>