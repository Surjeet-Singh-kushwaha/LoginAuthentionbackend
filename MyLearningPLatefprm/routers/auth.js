const express = require('express')
const router = express.Router();

router.get('/studentlogin', (req, res) => {
    res.sendFile('Studentlogin.html',{root:'public'})
})
router.get('/register', (req, res) => {
    res.sendFile('Studentregister.html',{root:'public'})
})

module.exports = router;

