const Router = require('koa-router')
const { makeExecutableSchema } = require('graphql-tools')
const { ApolloServer } = require('apollo-server-koa')

const router = new Router()

const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`

const resolvers = {
  Query: {
    books: () => {}
  }
}

module.exports = makeExecutableSchema({ typeDefs, resolvers })
