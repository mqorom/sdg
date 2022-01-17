const express = require('express');
const app = express();
const db = require('./db');
const library = require('./routes/library');

app.use(express.json());
app.use('/library', library);

const port = 8080;
app.listen(port, function () {
    console.log('Example app listening on port 8080!')
});
