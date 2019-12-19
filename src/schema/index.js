const { makeExecutableSchema } = require('graphql-tools')
const { ApolloServer, gql } = require('apollo-server-koa')
const Planet = require('./types/Planet')
const SpaceCenter = require('./types/SpaceCenter')

const PLANET_LIMIT = 5

// TODO Default value not working
const Query = gql`
  type Query {
    planets(limit: Int = PLANET_LIMIT): [Planet]
  }
`

const SchemaDefinition = gql`
  schema {
    query: Query
  }
`

const get = (props, object) =>
  props.reduce((obj, prop) => (obj && obj[prop] ? obj[prop] : null), object)

const resolvers = {
  Query: {
    planets: (obj, args, context, info) => {
      const serviceFunc = get(['services', 'planet', 'getPlanetsWithSpaceCenters'], context)
      if (serviceFunc) return context.services.planet.getPlanetsWithSpaceCenters(args.limit)
      return []
    }
  }
}

module.exports = makeExecutableSchema({
  typeDefs: [SchemaDefinition, Query, Planet.typeDefs, SpaceCenter.typeDefs],
  resolvers
})
