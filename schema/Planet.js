const { gql } = require('apollo-server-koa')

const typeDefs = gql`
  type Planet {
    id: Int!
    name: String
    code: String
    spaceCenters: [SpaceCenter]
  }
`

module.exports = { typeDefs }
