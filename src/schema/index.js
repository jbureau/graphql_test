const { makeExecutableSchema } = require('graphql-tools')
const { gql } = require('apollo-server-koa')
const Planet = require('./types/Planet')
const SpaceCenter = require('./types/SpaceCenter')

const Query = gql`
  type Query {
    planet(code: String): Planet
    planets: [Planet]
  }
`

const SchemaDefinition = gql`
  schema {
    query: Query
  }
`

// TODO should not break the object reference
// TODO to move in a utility file
const get = (props, object) =>
  props.reduce((obj, prop) => (obj && obj[prop] ? obj[prop] : null), object)

const resolvers = {
  Query: {
    planet: (obj, args, context) => {
      const serviceFunc = get(['services', 'planet', 'getPlanet'], context)
      if (serviceFunc) return context.services.planet.getPlanet(args.code)
      return []
    },
    planets: (obj, args, context) => {
      const serviceFunc = get(['services', 'planet', 'getPlanets'], context)
      if (serviceFunc) return context.services.planet.getPlanets()
      return []
    }
  },
  Planet: {
    spaceCenters: (obj, args, context) => {
      const serviceFunc = get(['services', 'spaceCenter', 'getSpaceCentersForPlanetCode'], context)
      if (serviceFunc)
        return context.services.spaceCenter.getSpaceCentersForPlanetCode(obj.code, args.limit)
      return []
    }
  }
}

module.exports = makeExecutableSchema({
  typeDefs: [SchemaDefinition, Query, Planet.typeDefs, SpaceCenter.typeDefs],
  resolvers
})
