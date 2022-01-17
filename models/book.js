const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new mongoose.Schema({
    name: String,
    isbn: String
    //,
    // author: {type: Schema.Types.ObjectId, ref: 'Author', required: true}
});

const Book = mongoose.model('book', BookSchema);
module.exports = Book;