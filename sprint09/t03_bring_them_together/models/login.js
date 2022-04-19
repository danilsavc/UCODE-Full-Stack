const mysql = require('../db.js');
const Model = require('../model.js');
const bcrypt = require('bcrypt');

class userLogin extends Model {
    constructor(option) {
        super();
        this.login = option;
        this.pass = option;
    }

    selectInDb (res, ses) {
        let user = {
            login: this.login,
            pass: this.pass,
        }

        const sql = 'SELECT * FROM users WHERE login=?';

        mysql.query(sql, user.login, (err, rows) => {
            if (err) {
                return console.log(err.message);
            }

            if (rows[0] == undefined) {
                res.json({ans: 'User not found'});
            }

            if (bcrypt.compareSync(user.pass, rows[0].pass)) {
                ses.content = true;
                ses.login = rows[0].login;
                ses.fullName = rows[0].fullName;
                ses.email = rows[0].email;

                res.json({ans: 'OK'});
                return;
            }

            else {
                res.json({ans: 'Incorrect password or login'});
            }
        });
    }
}

module.exports = userLogin;