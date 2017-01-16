var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  var upper = html.toUpperCase();
  console.log(upper);
}

getHTML(requestOptions, printUpperCase);
