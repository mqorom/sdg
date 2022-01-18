const Book = require("../models/book");
const authorController = require("../controllers/authorController");
const EntityNotFound = require('../exceptions/entityNotFound')
const BadRequest = require('../exceptions/badRequest')
const Utils = require('../common/Utils')

// Display list of all books.
exports.book_list = async function (req, res) {
    const books = await Book.find({});
    res.send(books);
};

// Display detail page for a specific book.
exports.book_detail = async function (req, res, next) {
    try {
        const book = await getBook(req.params.id)
        const author = await authorController.getAuthor(book.authorId.valueOf());
        book.author = author;
        res.send(book);
    } catch (error) {
        next(error)
    }
};

// Handle book create on POST.
exports.book_create_post = async function (req, res, next) {
    try {
        const {name, isbn, authorId} = req.body;
        if (Utils.isEmpty(name) || Utils.isEmpty(isbn) || Utils.isEmpty(authorId)) {
            throw new BadRequest(`name or isbn or authorId should not be empty`);
        }
        await authorController.getAuthor(authorId);
        Book.create({
            name,
            isbn,
            authorId
        }).then(book => res.json(book));
    } catch (error) {
        next(error)
    }
};

// Handle book update on POST.
exports.book_update_put = async function (req, res, next) {
    try {
        const book = await getBook(req.params.id)
        const {name, isbn, authorId} = req.body;

        if (!Utils.isEmpty(name)) {
            book.name = name;
        }

        if (!Utils.isEmpty(isbn)) {
            book.isbn = isbn;
        }

        if (!Utils.isEmpty(authorId)) {
            await authorController.getAuthor(authorId);
            book.authorId = authorId;
        }
        book.save();
        res.send(book);
    } catch (error) {
        next(error)
    }
};

async function getBook(id) {
    if (!Utils.isValidId(id)) {
        throw new BadRequest(`Invalid Book id: ${id}`);
    }
    const book = await Book.findById(id)
    if (Utils.isEmpty(book)) {
        throw new EntityNotFound(`Book with id: ${id} not found.`)
    }
    return book;
};