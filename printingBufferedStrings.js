var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  var bufferedData = '';

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
      bufferedData += data;
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log(bufferedData);
    console.log('Response stream complete.');
  });

});


}

getAndPrintHTML();
