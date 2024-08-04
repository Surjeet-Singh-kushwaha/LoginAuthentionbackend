const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index')
})
router.get('/login',(req,res)=>{
    res.sendFile('login.html',{root:"./public"})
})
router.get('/logout',(req,res)=>{
    req.session.destroy((err) => {
        if (err) {
          console.error(err);
        } else {
           
          res.redirect('/')
        }
      });
})
router.get('/profile',(req,res)=>{
    // console.log(req.session.user.name);
    if(req.session.user){
        res.render('profile',{name:req.session.user.name})
    }
else{
    res.redirect('/login')
}
})
module.exports = router;