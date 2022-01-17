const express = require('express');
const app = express();
const db = require('./db');
const library = require('./routes/library');
const { logError, returnError } = require('./exceptions/errorHandler')

app.use(express.json());
app.use('/library', library);
app.use(logError)
app.use(returnError)

const port = 8080;
app.listen(port, function () {
    console.log('Server is up and listening on port 8080!')
});
