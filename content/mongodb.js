const mongoose = require('mongoose');
const config = require("./connectconfig.js");
const db = mongoose.connect(config.mongodb);
const moment = require('moment');

require('../dbmodels/syslog.js');


//console.log(db.model('syslog'));

function insertData(level, title , content,collectionname) {
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

function selectData(strWhere, collectionname) {
    var model = db.model(collectionname);
    model.find(strWhere, '', '', function (error, result) {
        if (error) {
            console.log(error);
        } else {
            console.log(result);
        }
    });
}

module.exports = {
    insertData: insertData,
    selectData: selectData
}