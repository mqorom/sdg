const Author = require("../models/author");
const EntityNotFound = require('../exceptions/EntityNotFound')
const BadRequest = require('../exceptions/BadRequest')
const Utils = require('../common/Utils')

// Display list of all Authors.
exports.author_list = async function (req, res) {
    const authors = await Author.find({});
    res.send(authors);
};

// Display detail page for a specific Author.
exports.author_detail = async function (req, res) {

    if (!Utils.isValidId(req.params.id)) {
        res.send(new BadRequest("Author is not exist"));
    }
    const author = await Author.findById(req.params.id)
    if (Utils.isEmpty(author)) {
        res.send(new EntityNotFound("Author is not exist"));
        //throw new EntityNotFound("sss");
    }
    res.send(author);
};

// Handle Author create on POST.
exports.author_create_post = async function (req, res) {
    const {firstName, lastName} = req.body;
    if (Utils.isEmpty(firstName) || Utils.isEmpty(lastName)) {
        res.send(new BadRequest("Author is not exist"));
    }
    Author.create({
        firstName,
        lastName,
    }).then(author => res.json(author));
};

// Handle Author update on PUT.
exports.author_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Author update PUT');
};
