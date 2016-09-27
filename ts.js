const logger = require('./content/loghelp.js');
const http =  require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); 
    logger.logwrite('error','test','the logsys borken','syslog');
    res.end(`Hello World${new Date()}  `)
}).listen(1337, "127.0.0.1"); 
console.log('Server running at http://127.0.0.1:1337/');
//logger.logwrite('error','test','the logsys borken','syslog');
