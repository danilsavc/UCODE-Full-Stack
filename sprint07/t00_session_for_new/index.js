import express from 'express';
import session from 'express-session';
import path from 'path';

const __dirname = path.resolve();
const PORT = process.env.PORT || 2222;
const app = express();

app.use(session({secret: 'china', saveUninitialized: true, resave: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



let sess;

app.get('/' , (req, res) => {
    sess = req.session;
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/auth', (req, res) => {
    let experience = 1;
    let purpose = 1;
    sess = req.session;
    console.log(req.body);
    for (let i in req.body) {
        sess[i] = req.body[i];
        if (i.includes('power')) {
            sess.experience = experience++;
        }
        else {
            sess.experience = experience - 1;
        }
        if (i.includes('publicity')) {
            sess.purpose = purpose++;
        }
        else {
            sess.purpose = purpose - 1;
        }
    }
    res.redirect('/admin');
})

app.get('/admin', (req, res) => {
    sess = req.session;
    if (sess.name && sess.alias && sess.age && sess.text && sess.photo) {
        res.send(`
        <h1>Session for new</h1>
        <pre>
        name:${sess.name}
        alias:${sess.alias}
        age:${sess.age}
        description:${sess.text}
        photo:${sess.photo}
        experience:${sess.experience}
        level:${sess.volume}
        purpose:${sess.purpose}
        </pre>
        <button><a href="/forget">Forget</a></button>`);
    }
})

app.get('/forget', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.redirect('/');
    });

});

app.listen(PORT, () => {
    console.log(`App Started on PORT ${PORT} \n Click Ctrl + C for stop server`)
});