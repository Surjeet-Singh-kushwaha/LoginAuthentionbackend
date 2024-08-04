const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
const db = require('./mysqlcon')
router.post('/login', (req, res) => {
    // const email = req.body.email
    // const password =req.body.password
    const { email, password } = req.body;
    console.log(email, password)
    if (!email || !password) res.send("Please provide email and password");
    else {
        db.query('select * from users where email =?', [email], async (err, result) => {
            if (err) throw err;
            if (!result[0] || ! await bcrypt.compare(password, result[0].password)) {
                return res.json({ status: 'error', error: "Incorrect Email and Password" })
            } else {
                //create a json web token for authentication
               console.log(result[0])
               req.session.user = result[0];
                return res.redirect('/profile')

            }
        })
    }
})

module.exports = router;