const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile('homepage.html',{root:'public'})
})
router.get('/start',(req,res)=>{
    res.sendFile('getstarted.html',{root:'public'})
})



module.exports = router;