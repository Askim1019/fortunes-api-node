const express = require('express');
const fortunes = require('./data/fortunes');

const port = 3000;

const app = express();

app.get('/fortunes', (req, res) => {
    res.send(fortunes);
});

app.listen(port, () => console.log(`Listening on port ${port}`));