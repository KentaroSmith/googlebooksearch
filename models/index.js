const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewBook = new Schema(
    {
        title: String,
        authors: Array,
        description: String,
        image: String
    }
);

const Book = mongoose.model("Book", NewBook);

module.exports = Book