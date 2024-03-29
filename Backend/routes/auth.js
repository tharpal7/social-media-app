const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// const e = require('express');
const USER = mongoose.model("USER")
const jwt = require ("jsonwebtoken")
const {Jwt_secret} = require ("../keys");
const requireLogin = require('../middelware/requireLogin');


router.get('', (req, res) => {
    res.send('hello')
})

// router.get("/createPost",requireLogin,(req,res)=>{
//     console.log("auth")
// })


router.post("/signup", (req, res) => {
    const { name, userName, email, password } = req.body;
    if (!name || !email || !userName || !password) {
        return res.status(422).json({ error: "Please add all fields" })
    }
    USER.findOne({ email: email }, { userName: userName })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User already existr with this email or username" })
            }
            bcrypt.hash(password, 12)
                .then((hashedPassword) => {
                    const user = new USER({
                        name,
                        userName,
                        email,
                        password: hashedPassword
                    })

                    user.save()
                        .then((user) => { res.json({ message: "Registered successfully" }) })
                        .catch(err => { console.log(err) })
                })
        })

})

router.post("/signin", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Please add email and password" })
    }
    USER.findOne({ email: email }).then((savedUser) => {
        if (!savedUser) {
            return res.status(422).json({ error: "Invalid email" })
        }
        bcrypt.compare(password, savedUser.password) 
        .then((match) => {
            if (match) {
                // return res.status(200).json({ message: "Signin" })                
                const token = jwt.sign({_id:savedUser.id},Jwt_secret)
                res.json(token)
                console.log(token)
            } else {
                return res.status(200).json({ error: "Invalid password" })
            }
        }).catch(err => console.log(err))
    })
       

})

module.exports = router;