var https = require('https');

module.exports = function getHTML (options, callback){

  https.get(options, function (response) {

  response.setEncoding('utf8');

  var bufferedData = '';

  response.on('data', function (data) {
      bufferedData += data;
  });

  response.on('end', function() {
    callback(bufferedData);
      });
    });
  };
