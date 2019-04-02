var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecommerce', (err, res) => {

  //Si tengo un error, lo lanzo y termina el programa
  if (err) {
    throw err;
  }

  console.log('Base de datos ecommerce: Online');

});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require('./routes/productos');
var productoRouter = require('./routes/producto');
var loginRouter = require('./routes/login');
var registroRouter = require('./routes/registro');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/productos', productosRouter);
app.use('/users', usersRouter);
app.use('/producto', productoRouter);
app.use('/login', loginRouter);
app.use('/registro', registroRouter);

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

function loguear(req, res, next){
  console.log('pase por el middleware');
  next = true;

}

module.exports = app;
