const mysql = require('mysql2');
var config = require('./config.json');

const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    password : config.password,
    database: config.data_base,
});

module.exports.pool = pool;