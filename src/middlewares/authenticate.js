const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
const path = require('path');


module.exports = (req, res, next) => {
    const redirectToLogin = () => {
        const filePath = path.join(__dirname, '../views', 'login.html');
        return res.sendFile(filePath);
    }

    const authHeader = req.cookies.authorization;
    console.log(req.cookies)
    if(!authHeader){
       return redirectToLogin();
    }

    const parts = authHeader.split(" ");

    if(parts.length !== 2) {
        return redirectToLogin();
    }

    const [scheme, token] = parts;

    if(scheme.indexOf("Bearer") !== 0) {
        return redirectToLogin();
    }

    return jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) {
            return redirectToLogin();
        }

        req.userLogged = decoded;

        return next();
    });
}