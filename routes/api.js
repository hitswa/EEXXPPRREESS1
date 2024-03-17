'use strict'

const authMiddleware = require('../middleware/auth.middleware');
const monitorMiddleware = require('../middleware/monitor.middleware');

const helloController = require('../controller/hello.controller');
const usersController = require('../controller/users.controller');
const booksController = require('../controller/books.controller');

const commonMiddlewares = [monitorMiddleware.track, authMiddleware.validate];

module.exports = function (app, opts) {
  console.log("in api.js")
  // Setup routes, middleware, and handlers
  app.get('/api', commonMiddlewares ,helloController.hello); // secured
  app.get('/api/users', commonMiddlewares, usersController.getAllUsers); // secured
  app.get('/api/2', monitorMiddleware.track ,helloController.hello); // unsecured

  // Books APIs
  app.get('/api/books', booksController.getAllBooks); // unsecured
  app.get('/api/book/:bookId', booksController.getBookById); // unsecured
  app.post('/api/book', booksController.createBook); // unsecured
  app.get('/api/book/:bookId/delete', booksController.deleteBookById); // unsecured
  app.patch('/api/book/:bookId', booksController.updateBookById); // unsecured
}
