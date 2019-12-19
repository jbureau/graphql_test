const { gql } = require('apollo-server-koa')

const typeDefs = gql`
  type SpaceCenter {
    id: Int!
    uid: String!
    name: String
    description: String
    latitude: Float
    longitude: Float
  }
`

module.exports = { typeDefs }
