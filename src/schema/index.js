const { makeExecutableSchema } = require('graphql-tools')
const { ApolloServer, gql } = require('apollo-server-koa')
const Planet = require('./types/Planet')
const SpaceCenter = require('./types/SpaceCenter')

const Query = gql`
  type Query {
    planets: [Planet]
  }
`

const SchemaDefinition = gql`
  schema {
    query: Query
  }
`

module.exports = makeExecutableSchema({
  typeDefs: [SchemaDefinition, Query, Planet.typeDefs, SpaceCenter.typeDefs]
})
