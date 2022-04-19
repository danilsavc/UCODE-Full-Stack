const { pool } = require("../db");
const Model = require("../model");

class User extends Model {
    constructor() {super();}
    
    async login(login) {
        const [result, err] = await pool.promise().execute(`SELECT * FROM users WHERE login = ?;`, [login]);
        if (result[0]) {
            console.log(result[0]);
            return result[0];
        } else return false;
    }
}

module.exports.User = User;