const Book = require('./models/Book')


module.exports = {
  Query: {
    books: async () => {
      const books = await Book.find()
      return books
    },
    book: async (_, { id }) => {
      const book = await Book.findById(id)
      return book
    },
    book: async (_, { id }) => {
      const book = await Book.deleteOne(id)
      return book
    }
  },
}