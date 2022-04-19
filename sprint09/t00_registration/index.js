const express = require("express");
const path = require("path");
const { User } = require("./models/user");
const bcrypt = require("bcryptjs");

const _dirname = path.resolve();
const PORT = process.env.PORT || 3000;
const app = express();
const urlencodedParser = express.urlencoded({extended: false});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(_dirname + '/public')); // For CSS!!!!!

let user = new User();
let salt = bcrypt.genSaltSync(10);
app.get('/' , (req, res) => {
    res.sendFile(path.join(_dirname + '/public/index.html'));
});

app.post('/', urlencodedParser, (req, res) => {
    if (!req.body) {
        return res.sendStatus(400);
    }
    console.log(req.body);
    let password = bcrypt.hashSync(req.body.password, salt);
    user.register(req.body.login, 'user', req.body.password, req.body.name, req.body.email).then((result) => {
        console.log(result);
        res.end(result);
    }).catch((result) => {
        console.log(result);
    })
});


app.listen(PORT, () => {
    console.log(`App Started on PORT ${PORT} \n Click Ctrl + C for stop server`)
});