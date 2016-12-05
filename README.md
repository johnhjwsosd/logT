为了自己使用mongo记录日志，基于log4js。


例:
添加环境变量
MONGO_DB_CONFIG=mongodb://127.0.0.1:27017/test

var logger = require('logsys')
logger("error","myt2","this is a error","t2")