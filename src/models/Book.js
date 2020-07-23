const { Schema, model } = require('mongoose')


const bookSchema = new Schema({
  title: String,
  author: String
})

module.exports = model('Book', bookSchema)