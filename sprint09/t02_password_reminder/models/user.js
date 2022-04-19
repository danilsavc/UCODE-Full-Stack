const { pool } = require("../db");
const Model = require("../model");
const nodemailer = require('nodemailer');
//let testEmailAccount = await nodemailer.createTestAccount();





class User extends Model {
    constructor() {super();}
    
    async login(login) {
        const [result] = await pool.promise().execute(`SELECT * FROM users WHERE login = ?;`, [login]);
        if (result[0]) {
            console.log(result[0]);
            return result[0];
        } else return false;
    }
}

module.exports.User = User;