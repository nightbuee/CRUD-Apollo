const Book = require('./models/Book')

module.exports = {
  Mutation: {
    createBook: async (parent, args) => {
      const book = await Book.create({ ...args })
      return book
    },
    updateBook: async (_, { id, ...rest }) => {
      const book = await Book.findByIdAndUpdate(id, { ...rest }, { new: true })
      return book
    },
    deleteBook: async (_, {id}) => {
      const book = await Book.findByIdAndRemove(id, {id})
      return book
    },
    searchBook: async (_,{id}) => {
      const book = await Book.findById(id)
      return book
    }
  }
}