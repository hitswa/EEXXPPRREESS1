'use strict'

const bookController = require('../controller/books.controller')

module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', (req, res) => {
    res.locals.name = 'Yash'
    res.render('index')
  })

  app.get('/books', bookController.getBookView)
}
