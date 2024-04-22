// routes/books.js

const express = require("express");
const router = express.Router();

// Book model
const Book = require("../models/Book");

// @route   GET api/books
// @desc    Get all books
// @access  Public
router.get("/", (req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => console.error(err));
});

module.exports = router;
