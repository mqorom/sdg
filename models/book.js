const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: String,
    isbn: String,
    authorId: {type: Schema.Types.ObjectId, ref: 'author', required: true}
});

const Book = mongoose.model('book', BookSchema);
module.exports = Book;