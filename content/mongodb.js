const mongoose = require('mongoose');
const dbconfig =process.env.MONGO_DB_CONFIG;//require("./connectconfig.js");/
const db = mongoose.connect(dbconfig);
const moment = require('moment');
mongoose.Promise = require('bluebird');



//console.log(db.model('syslog'));

function insertData(level, title, content,collectionname) {
    var mongoMocha= require('../dbmodels/syslog.js');
    mongoMocha(collectionname,collectionname);
    var model = db.model(collectionname);
    var data = {
        title: title,
        content: content,
        level: level,
        createdate: moment().format('YYYY-MM-DD HH:mm:ss')
    }
    var entity = new model(data);
    entity.save(function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log('saved OK!');
        }
    });
}

module.exports = {
    insertData: insertData
}

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});
