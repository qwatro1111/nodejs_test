const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Response from Express!');
});

app.listen(3000, () => console.log('Server was started on port 3000'));
