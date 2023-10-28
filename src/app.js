require('dotenv').config();
const app = require('./server');
const mongoose = require('./database/index');

const AuthController = require('./controllers/AuthController');
const AdminController = require('./controllers/AdminController');

const authenticateMiddleware = require('./middlewares/authenticate');

app.use("/auth", AuthController);
app.use("/admin", authenticateMiddleware, AdminController);