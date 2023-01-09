import { books } from '../data/books-data.js'

function index(req, res){
  res.render('books/index', {
    books: books
  })
}

function newBook(req, res){
  res.render('books/new')
}

function create(req, res){
  req.body.done = false
  books.create(req.body)
  .then(book => {
    res.redirect('/books')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/books')
  })
}

function show(req, res) {
  books.findById(req.params.id)
  .then(book => {
    res.render('books/show', {
      book: book
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/books')
  })
}

function deleteBook(req, res){
  books.findByIdAndDelete(req.params.id)
  .then(book => {
    res.redirect('/books')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/books')
  })
}

export {
  index,
  newBook as new,
  create,
  show,
  deleteBook as delete
}