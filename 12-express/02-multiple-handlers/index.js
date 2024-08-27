const express = require('express');

const app = express();

const firstHendler = (req, res, next) => {
    console.log('First hendler!');
    next();
};
const secondHendler = (req, res) => {
    console.log('Second hendler!');
    res.send('Response from Express!');
};

app.get('/', firstHendler, secondHendler);

app.listen(3000, () => console.log('Server was started on port 3000'));
