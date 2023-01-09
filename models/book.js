import mongoose from "mongoose";

const Schema = mongoose.Schema

const bookSchema = new Schema ({
  title: String,
  author: String,
  yearPublished: String,
  completed: Boolean
})

const Book = mongoose.model('Book', bookSchema)

export {
  Book
}