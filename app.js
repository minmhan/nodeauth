var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var passport = require('passport');

var flash = require('connect-flash');
var mongoose = require('mongoose');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');

var configDb = require('./config/db.js');
mongoose.connect(configDb.url);

require('./config/passport.js')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

//require for passport
app.use(session({secret:'ilovescotchscotchyscotchscotch'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// routes
require('./app/routes.js')(app, passport);

app.listen(port);
console.log('app running on port ' + port);
