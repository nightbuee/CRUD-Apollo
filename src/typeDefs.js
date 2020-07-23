const { gql } = require('apollo-server')

module.exports = gql`
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
    _id: ID
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    book(id: ID): Book
  }

  type Mutation{
    createBook(title: String, author: String): Book
    updateBook(id: ID!, title: String, author: String): Book
    deleteBook(id: ID!): Book
    searchBook(id: ID!): Book
  }
`