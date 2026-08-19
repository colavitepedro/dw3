//-- arquivo: dw3frontend/app.js

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');

const indexRouter = require('./routes/rtIndex');
const loginRouter = require('./routes/rtLogin');
const homeRouter = require('./routes/rtHome');
const alunosRouter = require('./routes/rtAlunos');
const cursosRouter = require('./routes/rtCursos');
const logoutRouter = require('./routes/logout');

require('dotenv').config();

const app = express();
const viewsPath = path.join(__dirname, 'views');
const appName = process.env.APP_NAME || 'dw3frontend';
const port = process.env.PORT || 40100;

app.set('name', appName);
app.set('views', viewsPath);
app.set('view engine', 'njk');
app.set('port', port);

nunjucks.configure(viewsPath, {
  autoescape: true,
  express: app,
  noCache: app.get('env') === 'development'
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/apps', express.static(path.join(__dirname, 'apps')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/home', homeRouter);
app.use('/alunos', alunosRouter);
app.use('/cursos', cursosRouter);
app.use('/sair', logoutRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error', { title: 'Erro' });
});

module.exports = app;
