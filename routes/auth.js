const router = require("express").Router();
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const user = require("../models/User");

// Register
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });
    try {
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err);
    }
})


router.post()