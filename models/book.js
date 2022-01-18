const Author = require("../models/author").schema;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: String,
    isbn: String,
    authorId: {type: Schema.Types.ObjectId, ref: 'author', required: true},
    author:  {type: Author, required: false}
});

const Book = mongoose.model('book', BookSchema);
module.exports = Book;