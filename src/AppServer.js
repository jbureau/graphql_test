const koaBody = require('koa-bodyparser')
const { ApolloServer } = require('apollo-server-koa')
const schema = require('./schema')

/**
 * Configure application server
 * @param {Object} options
 * @param {Object} options.app Koa instance
 */
const configureServer = (options = {}) => {
  const server = new ApolloServer({
    schema,
    context: () => ({ db: options.db, services: options.services })
  })
  server.applyMiddleware({ app: options.app, bodyParserConfig: koaBody() })
}

module.exports = { configureServer }
