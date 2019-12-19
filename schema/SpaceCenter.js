const { gql } = require('apollo-server-koa')

const typeDefs = gql`
  type SpaceCenter {
    id: Int!
    uid: ID!
    name: String
    description: String
    lagitude: Float
    longitude: Float
  }
`

module.exports = { typeDefs }
