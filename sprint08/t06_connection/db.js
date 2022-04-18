const mysql = require("mysql2");
const config = require("./config.json")
const sql = `SELECT * FROM heroes`;

const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password
});

connection.connect(err => {
    if (err) {
        return console.error("Error: " + err.message);
    }
    else {
        console.log("Connection to MySQL server successfully established")
    }
});

connection.query(sql, (err, result) => {
    if (err) {
        console.error("Error: " + err.message);
    }
    console.log(result);
});

connection.end(err => {
    if (err) {
        return console.error("Error: " + err.message);
    }
    else {
        console.log("Connection closed")
    }
});