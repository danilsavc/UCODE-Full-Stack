const express = require('express');
const fetch = require('node-fetch');
const crypto = require('crypto');

const app = express();

const host = 'localhost';
const port = 8080;

const pubKey = '3fd1be25067b4950a42326113c554c4a';
const privKey = '91f24b0dd13acd410feb99b0c6e8d4a9c9ccba91';

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/js', express.static(__dirname + '/'));

app.get('/', async function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/show', async function(req, res) {
    let temp = Date.now();
    let cc = crypto.createHash('md5').update(temp + privKey + pubKey).digest('hex');
    res.json(await fetch(`http://gateway.marvel.com/v1/public/comics?apikey=${pubKey}&hash=${cc}&ts=` + temp)
    .then(res => res.json()));
});


app.listen(port, host, () => {
    console.log(
      `App Started on PORT ${port} \n http://${host}:${port} \n Click Ctrl + C for stop server`
    );
  });