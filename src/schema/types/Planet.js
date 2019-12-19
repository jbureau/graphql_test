const { gql } = require('apollo-server-koa')

const LIMIT = 5

// TODO Default value not working
const typeDefs = gql`
  type Planet {
    id: Int!
    name: String
    code: String
    spaceCenters(limit: Int = LIMIT): [SpaceCenter]
  }
`

module.exports = { typeDefs }
