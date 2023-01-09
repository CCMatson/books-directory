import { books } from '../data/books-data.js'
import { Book } from '../models/book.js'

function index(req, res){
  Book.find({})
  .then(books => {
  res.render('books/index', {
    books: books
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}

function newBook(req, res){
  res.render('books/new')
}

function create(req, res){
  req.body.done = false
  Book.create(req.body)
  .then(book => {
    res.redirect('/books')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/books')
  })
}

function show(req, res) {
  Book.findById(req.params.id)
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
  Book.findByIdAndDelete(req.params.id)
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