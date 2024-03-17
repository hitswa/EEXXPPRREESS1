
const { model } = require('mongoose');
const Book = require('../modal/books.modal')

module.exports.getAllBooks = async (req, res, next) => {
    let books = await Book.find();
    if( books ) {
        return res.send({
            success: true,
            books: books,
            message: 'success'
        });
    }
    return res.send({
        success: false,
        books: [],
        message: 'fails to get books'
    });
}

module.exports.createBook = async (req, res, next) => {
    // console.log({body: req?.body, query: req.query, params: req.params});
    let newBook = await Book.create({
        title: req.query.title,
        author: req.query.author,
    })
    if( newBook ) {
        return res.send({
            success: true,
            books: newBook,
            message: 'created successfully'
        });
    }
    return res.send({
        success: false,
        books: [],
        message: 'fails to create book'
    });
}

module.exports.getBookView = async (req, res, next) => {
    let books = await Book.find();
    res.render('books', {books: books})
    // res.send(<view name>, data)
}


module.exports.getBookById = async (req, res, next) => {}
module.exports.deleteBookById = async (req, res, next) => {}
module.exports.updateBookById = async (req, res, next) => {}