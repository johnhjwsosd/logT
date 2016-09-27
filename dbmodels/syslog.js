
var mongoose=require("mongoose");
var syslogSchema=new mongoose.Schema({
    title : String,
    content :String,
    level : String,
    createdate : Date  
});
mongoose.model("syslog",syslogSchema,"syslog");