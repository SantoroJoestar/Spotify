require('dotenv').config();
const path = require('path');
const app = require('./server');
const express = require('express');
const mongoose = require('./database/index');
const cors = require('cors');
const ApiController = require('./controllers/ApiController');
const AppController = require('./controllers/AppController');

const authenticateMiddleware = require('./middlewares/authenticate');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use("/public", express.static(__dirname + '/public'));
app.use(cors());

app.use("/api", ApiController);
app.use("/app", AppController);