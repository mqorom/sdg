var express = require('express');
var router = express.Router();

// Require controller modules.
var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');

/// BOOK ROUTES

// GET request for list of all Book items.
router.get('/books', book_controller.book_list);

// GET request for one Book.
router.get('/book/:id', book_controller.book_detail);

// POST request for creating Book.
router.post('/book', book_controller.book_create_post);

// PUT request to update Book.
router.put('/book/:id', book_controller.book_update_put);


/// AUTHOR ROUTES

// GET request for list of all Authors.
router.get('/authors', author_controller.author_list);

// GET request for one Author.
router.get('/author/:id', author_controller.author_detail);

// POST request for creating Author.
router.post('/author', author_controller.author_create_post);

// PUT request to update Author.
router.put('/author/:id', author_controller.author_update_put);


module.exports = router;