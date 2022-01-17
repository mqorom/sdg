const Author = require("../models/author");
const EntityNotFound = require('../exceptions/entityNotFound')
const BadRequest = require('../exceptions/badRequest')
const Utils = require('../common/Utils')

// Display list of all Authors.
exports.author_list = async function (req, res) {
    const authors = await Author.find({});
    res.send(authors);
};

// Display detail page for a specific Author.
exports.author_detail = async function (req, res, next) {
    try {
        const author = await getAuthor(req.params.id)
        res.send(author);
    } catch (error) {
        next(error)
    }
};

// Handle Author create on POST.
exports.author_create_post = async function (req, res, next) {
    try {
        const {firstName, lastName} = req.body;
        if (Utils.isEmpty(firstName) || Utils.isEmpty(lastName)) {
            throw new BadRequest(`firstName or lastName should not be empty`);
        }
        Author.create({
            firstName,
            lastName,
        }).then(author => res.json(author));
    } catch (error) {
        next(error)
    }
};

// Handle Author update on PUT.
exports.author_update_put = async function (req, res, next) {
    try {
        const author = await getAuthor(req.params.id)
        const {firstName, lastName} = req.body;

        if (!Utils.isEmpty(firstName)) {
            author.firstName = firstName;
        }

        if (!Utils.isEmpty(lastName)) {
            author.lastName = lastName;
        }
        author.save();
        res.send(author);
    } catch (error) {
        next(error)
    }
};

async function getAuthor(id) {
    if (!Utils.isValidId(id)) {
        throw new BadRequest(`Invalid Author id: ${id}`);
    }
    const author = await Author.findById(id)
    if (Utils.isEmpty(author)) {
        throw new EntityNotFound(`Author with id: ${id} not found.`)
    }
    return author;
}