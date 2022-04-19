const express = require("express");
const path = require("path");
const bcrypt = require("bcryptjs");
const { User } = require("./models/user");

const _dirname = path.resolve();
const PORT = process.env.PORT || 3000;
const app = express();
const urlencodedParser = express.urlencoded({extended: false});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(_dirname + '/public')); // For CSS!!!!!


let user = new User();
let salt = bcrypt.genSaltSync(10);
app.get('/login' , (req, res) => {
    res.sendFile(path.join(_dirname + '/public/index.html'));
});

app.post('/login', urlencodedParser, (req, res) => {
    if (!req.body) {
        return res.sendStatus(400);
    }
    let password = bcrypt.hashSync(req.body.password, salt);
    user.login(req.body.login).then(user_info => {
        console.log(user_info.status);
        if(req.body.password === user_info.password) {
            res.send(`<div>Status: ${user_info.status} </div><button onclick="onclick()">Log Out</button>`);
        }
        else {
            return res.send("message: error");
        }
    });
    
    
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(_dirname + '/public/home.html'));
    console.log(req.body);
    //let status = user.get_status(req.body.login);
    //res.send(`<div>Status: ${status} </div>`);
});

app.post('/home', (req, res) => {
    res.redirect('login');
});

app.listen(PORT, () => {
    console.log(`App Started on PORT ${PORT} \n Click Ctrl + C for stop server`)
});