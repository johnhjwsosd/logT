"use strict";
var consoleLog = console.log.bind(console);
function writeMongodb (layout, timezoneOffset) {
  return function(loggingEvent) {
    //consoleLog(loggingEvent.data);
    //run db func
  };
}

function configure(config) {
  var layout;
  if (config.layout) {
    layout = layouts.layout(config.layout.type, config.layout);
  }
  return writeMongodb(layout, config.timezoneOffset);
}

exports.appender = consoleAppender;
exports.configure = configure;
