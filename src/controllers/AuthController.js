const express = require('express');
const bcrypt = require("bcryptjs");
const UserModel = require('../models/User');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

const router = express.Router();

const generateToken = (user = {}) => {
    return jwt.sign({
        id: user.id,
        name: user.name
    }, authConfig.secret, {
        expiresIn: 86400
    })
}

router.post("/register", async (req, res) => {
   
    const { email } = req.body;

    if(await UserModel.findOne({email})){
        return res.status(400).json({
            error: true,
            msg: "User already exists"
        });
    }

    const user = await UserModel.create(req.body);

    user.password = undefined;

    return res.json({
        user,
        token: generateToken(user)
    })
});

router.post("/authenticate", async (req, res) => {
    
    const {email, password} = req.body;

    const user = await UserModel.findOne({email}).select("+password");

    if(!user){
        return res.status(404).json({
            error: true,
            msg: "User not found"
        });
    }

    if(!await bcrypt.compare(password, user.password)){
        return res.status(400).send({
            error: true,
            msg: "Invalid Password"
        })
    }

    user.password = undefined;

    return res.json({
            user,
            token: generateToken(user) 
    })
});

module.exports = router;
