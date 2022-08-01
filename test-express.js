// var express = require("express");

// var app = express();

// app.use(express.static('public'));

// //make way for some custom css, js and images
// app.use('/css', express.static(__dirname + '/public/css'));
// app.use('/js', express.static(__dirname + '/public/js'));

// var server = app.listen(8080, function(){
//     var port = server.address().port;
//     console.log("Server running at http://localhost:%s", port);
// });

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var flash = require('express-flash');
var session = require('express-session');
var db=require('./database');
 
var app = express();
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 
app.use(session({ 
    secret: '123456catr',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
 
app.use(flash());
 
/* GET home page. */
// app.get('/', function(req, res, next) {
//   res.send('get works');
// });
 
app.post('/', function(req, res, next) {
  var uname = req.body.uname;
  var pass = req.body.pass;
 
  var sql = `INSERT INTO user (name, pwd)VALUES ("${uname}", "${pass}")`;
  db.query(sql, function(err, result) {
    if (err) throw err;
    console.log('record inserted');
    req.flash('success', 'Data added successfully!');
    res.redirect('/');
  });
});
 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
 
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
 
// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
const PORT = proces.env.PORT || 3000
app.listen(PORT, function () {
    console.log('Node app is running on port ${PORT}');
});
 
module.exports = app;

// /* GET home page. */
// app.get('/', function(req, res, next) {
//     res.render('contact-us', { title: 'Contact-Us' });
//   });
   
//   app.post('/contact-us', function(req, res, next) {
//     var f_name = req.body.f_name;
//     var l_name = req.body.l_name;
//     var email = req.body.email;
//     var message = req.body.message;
   
//     var sql = `INSERT INTO contacts (f_name, l_name, email, message, created_at) VALUES ("${f_name}", "${l_name}", "${email}", "${message}", NOW())`;
//     db.query(sql, function(err, result) {
//       if (err) throw err;
//       console.log('record inserted');
//       req.flash('success', 'Data added successfully!');
//       res.redirect('/');
//     });
//   });

