require('dotenv').config();
/* eslint-disable no-unused-vars */
const db = require('./db/db');
const cors = require('cors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const shopsRouter = require('./routes/shops');

const { isAuthenticated } = require('./controllers/User.controller');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(isAuthenticated); //trying to fix it
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shops', shopsRouter);

module.exports = app;

// Controller - DONE
// Service - DONE
// Model - DONE
