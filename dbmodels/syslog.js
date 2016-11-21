var mongoose = require("mongoose");
var doc;
var skipId;

var syslogSchema = new mongoose.Schema({
    title: String,
    content: String,
    level: String,
    createdate: Date
});
module.exports = function (doc, skipId) {
    doc = doc;
    skipId = skipId
    mongoose.model(doc, syslogSchema, skipId);
}