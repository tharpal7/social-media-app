const express = require("express");

const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const USER = mongoose.model('USER')

router.get("/", (req, res) => {
    res.send("hello")
})

router.post("/signup", (req, res) => {
    const { name, email, username, password } = req.body;
    if (!name || !email || !username || !password) {
      return res.status(422).json({ error: "Please add all the fields "})
    }

    USER.findOne({ $or: [{ email: email }, { username: username }] }).then((saveduser) => {
        if (saveduser) {
            return res.status(422).json({ error: "user  already exsist with that email or username" })
        }

        bcrypt.hash(password, 12).then((hashePassword) => {
            const user = new USER({
                name,
                email,
                username,                
                password: hashePassword
            })
            user.save()
                .then((user) => {
                    { res.json({ message: "Registerd successfully" }) }
                })
                .catch(error => {
                    console.log(error)
                })
        })


    })



})

module.exports = router;