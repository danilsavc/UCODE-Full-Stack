const { pool } = require("../db");
const Model = require("../model");

class User extends Model {
    constructor() {super();}
    
    async register(login, status, password, full_name, email) {
        let i = 0;
        const [result] = await pool.promise().execute(`SELECT COUNT(id) AS COUNT FROM users WHERE login = ?;`, [login]);
        if (i == 0) {
            const [res] = await pool.promise().execute(`INSERT INTO users(login, status, password, full_name, email) VALUES (?,?,?,?,?);`, [login, status, password, full_name, email]);
            return 'Success';
        } else return 'User is already exist.';
    }
}

module.exports.User = User;