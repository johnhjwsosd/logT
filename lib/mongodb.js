const mongoose = require('mongoose');
const mongoMocha = require('../dbmodels/syslog.js');
const moment = require('moment');
mongoose.Promise = require('bluebird');
let dbconfig = global.MONGO_DB_CONFIG;
function insertData(level, title, content, collectionname) {
    db = mongoose.createConnection(dbconfig);
    mongoMocha(collectionname, collectionname);
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
            //console.log('saved OK!');
        }
    });
    db.on('error', function (err) {
        process.emit("uncaughtException", err)
    });
}

function selectData(collectionname, field, values) {
    db = mongoose.createConnection(dbconfig);
    mongoMocha(collectionname, collectionname)
    var model = db.model(collectionname);

    if (field) {
        var where = JSON.parse(`{ "${field}": "${values}" }`);
        model.find(where, { "_id": 0 }, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        })
    } else {
        model.find(function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    }
    db.on('error', function (err) {
        process.emit("uncaughtException", err)
    });
}


module.exports = {
    insertData: insertData,
    selectData: selectData,
}
