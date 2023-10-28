require('dotenv').config();
const app = require('./server');
const mongoose = require('./database/index');

const AuthController = require('./controllers/AuthController');

app.use("/auth", AuthController);