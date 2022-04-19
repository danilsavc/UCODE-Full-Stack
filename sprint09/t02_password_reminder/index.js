const express = require("express");
const path = require("path");
const { User } = require("./models/user");
const nodemailer = require("nodemailer");

const _dirname = path.resolve();
const PORT = process.env.PORT || 3000;
const app = express();
const urlencodedParser = express.urlencoded({extended: false});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(_dirname + '/public')); // For CSS!!!!!

let user = new User();

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'ucode.dzhyhun@gmail.com',
        pass: 'ucode222'
    },
})

app.get('/' , (req, res) => {
    res.sendFile(path.join(_dirname + '/views/index.html'));
});

app.post('/', urlencodedParser, (req, res) => {
    if (!req.body) {
        return res.sendStatus(400);
    }

   

    user.login(req.body.login).then(user_info => {
        if(req.body.login === user_info.login) {
            transporter.sendMail({
                from: '"Node js" <nodejs@example.com>',
                to: `${user_info.email}`,
                subject: 'Reminder Password',
                text: "Your password is: <b>" + user_info.password + "</b>", // plain text body
                html: "Your password is: <b>" + user_info.password + "</b>",
            })


            res.send(`<div>Email: ${user_info.email}</div>`);
        }
        else {
            return res.send("message: error");
        }
    });
});


app.listen(PORT, () => {
    console.log(`App Started on PORT ${PORT} \n Click Ctrl + C for stop server`)
});