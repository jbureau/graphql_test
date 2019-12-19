const Koa = require('koa')
const koaBody = require('koa-bodyparser')
const app = new Koa()
const { ApolloServer } = require('apollo-server-koa')

const schema = require('./schema')

const server = new ApolloServer({ schema })
server.applyMiddleware({ app, bodyParserConfig: koaBody() })

app.use(function(ctx) {
  ctx.body = `
  <div>
  <a href="/graphql">/graphql</a>
  </div>`
})

app.listen(3000)
