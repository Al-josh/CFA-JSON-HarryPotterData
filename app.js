var express = require('express');
var app = express();
var path = require('path');
var dataFile = require('./data.json');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', { dataVariable: dataFile });
});

app.get('/json', function (req, res) {
  res.json(dataFile);
});

app.listen(3000, function () {
  console.log('Harry Potter app listening on port 3000!');
});
