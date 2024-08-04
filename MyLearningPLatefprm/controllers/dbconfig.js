const mysql = require('mysql');
const dotenv = require('dotenv')
dotenv.config();
const{DB_HOST,DB_USERNAME,DB_PASSWORD,DATABASE} = process.env;
const con = mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password:DB_PASSWORD,
    database:DATABASE
})

module.exports = con;