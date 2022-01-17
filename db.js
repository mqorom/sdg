const mongoose = require('mongoose');

const MONGO_USERNAME = 'admin';
const MONGO_PASSWORD = 'admin';
const MONGO_HOSTNAME = 'cluster0.iu1re.mongodb.net';
const MONGO_DB = 'library';

const url = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DB}?retryWrites=true&w=majority`;
mongoose.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, error => error);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully to mongo DB");
});