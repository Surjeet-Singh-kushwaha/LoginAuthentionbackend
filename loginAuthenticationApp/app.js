const express = require('express')
const bodyparser = require('body-parser')
const cookie = require('cookie-parser');
const session = require('express-session')

const db = require('./routes/mysqlcon')
const router = require('./routes/pages')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookie());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // Session expiration time (1 day)
    }

}))


app.use(express.static('public'))
app.set('public', __dirname + '/public')
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('/', router);
app.use('/api', require('./routes/login'))
db.connect((err) => {
    if (err) throw err;
    console.log('database connect successfully');
})

app.listen(3000, (err) => {
    if (err) throw err;
    console.log('App is running at localhost:3000')
})