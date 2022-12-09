const express = require('express');
const app = express();

const errorHandler = require('./src/middlewares/error.middleware');
const noPathHandler = require('./src/middlewares/noPath.middleware');
const indexRouter = require('./src/router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', indexRouter);

app.use(errorHandler);
app.use(noPathHandler);

module.exports = app;