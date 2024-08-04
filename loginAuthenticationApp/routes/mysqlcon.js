const sql = require('mysql');
require('dotenv').config();
const {DB_HOST,DB_USERNAME,DB_PASSWORD,DATABASE} = process.env;
const db = sql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password:DB_PASSWORD,
    database:DATABASE
});

module.exports =db;