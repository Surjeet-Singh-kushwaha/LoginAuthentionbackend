const express = require('express');
const dotenv = require('dotenv');
const db = require('./controllers/dbconfig')
dotenv.config();
const app = express();
db.connect((err)=>{
    if(err)  throw err;
    console.log('database connected successfully')
    console.log(__dirname+'/public/CSS')
})

app.use('public',express.static(__dirname+'/public'));
app.use('/public/CSS',express.static(__dirname+'/public/CSS'))
app.use('/public/JS',express.static(__dirname+'/public/JS'))
app.use('/public/images',express.static(__dirname+'/public/images'))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// setting view engine4
app.set('view engine','ejs');
// roters

app.use('/',require('./routers/pages'))
app.use('/quizApp',require('./routers/auth'))

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log('App is running at localhost',process.env.PORT)
})