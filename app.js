var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');


app.set('view engine', 'ejs');

app.listen(port);
console.log('app running on port ' + port);
