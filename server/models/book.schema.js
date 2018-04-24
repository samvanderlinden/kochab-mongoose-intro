const mongoose = require('mongoose') // allows us to define schemas
const Schema = mongoose.Schema; //Schema is a class/constructor

const bookSchema = new Schema({ //just defining the properties of each book
    title: {type: String, required: true, unique: true},
    author: {type: String, required: true }
});

//mongoose, please use the 'book' collection
//mongoose says, I automatically pluralize, you're now in books
//... you're welcome
module.exports = mongoose.model('book', bookSchema);