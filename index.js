const mongoose = require('mongoose')
const queries = require('./src/queries')
const typeDefs = require('./src/typeDefs')
const mutations = require('./src/mutations')
const { ApolloServer } = require('apollo-server')
const { makeExecutableSchema } = require('graphql-tools')

mongoose.connect('mongodb://localhost/graph', { useNewUrlParser: true });

const resolvers = {
  ...queries,
  ...mutations
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const server = new ApolloServer({
  schema
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url} 🚀`)
})