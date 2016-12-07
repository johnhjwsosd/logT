const mongoose = require('mongoose');
const mongoMocha = require('../dbmodels/syslog.js');
const moment = require('moment');
mongoose.Promise = require('bluebird');
function insertData(level, title, content, collectionname) {
    let dbconfig = global.MONGO_DB_CONFIGs;
    let db = mongoose.createConnection(dbconfig);
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
}

function selectData(collectionname, field, values) {
    let dbconfig = global.MONGO_DB_CONFIGs;
    let db = mongoose.createConnection(dbconfig);
    mongoMocha(collectionname, collectionname)
    var model = db.model(collectionname);

    if (field) {
        var where = JSON.parse(`{ "${field}": "${values}" }`);
        console.log(where);
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
}


module.exports = {
    insertData: insertData,
    selectData: selectData,
}

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});
