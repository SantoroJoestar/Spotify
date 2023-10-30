const express = require("express");
const router = express.Router();
const path = require('path');
const authenticateMiddleware = require('../middlewares/authenticate');

router.get("/", authenticateMiddleware, (req, res) => {
    const filePath = path.join(__dirname, '../views', 'app.html');
    return res.sendFile(filePath);
})

router.get("/register", (req, res) => {
    const filePath = path.join(__dirname, '../views', 'cadastro.html');
    return res.sendFile(filePath);
})

router.get("/login", (req, res) => {
    const filePath = path.join(__dirname, '../views', 'login.html');
    return res.sendFile(filePath);
})

router.get("/main", (req, res) => {
    const filePath = path.join(__dirname, '../views', 'index.html');
    return res.sendFile(filePath);
})

module.exports = router;