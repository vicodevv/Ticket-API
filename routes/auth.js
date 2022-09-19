const router = require("express").Router();
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const user = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10

// Register
router.post('/register', async (req, res) => {
    const { firstname, lastname, country, email, password } = req.body
    try {
        bcrypt.hash(password, saltRounds, async (err, hash) => {
          if (err) {
            console.log(err)
            res.json('Error hashing password.')
          }
    
          const newUser = new user({
            firstname,
            lastname,
            country,
            email,
            password: hash
          })
    
          await newUser.save()
          res.status(201).json(newUser)
        })
      } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Something went wrong.' })
      }
    })
//Login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(401).json("Wrong password or username!");

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password && res.status(401).json("Wrong password or username!");
        const jwtToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.SECRET_KEY,
            { expiresIn: "1d" }
        );
        const { password, ...info } = user._doc;
        res.status(200).json({ ...info, jwtToken });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;