const Koa = require('koa')
const { configureServer } = require('./src/AppServer')
const { configureServices } = require('./src/services')

const app = new Koa()

const dbMock = require('./src/db/mock')
const services = configureServices({ db: dbMock })
configureServer({ app, db: dbMock, services })

app.use(ctx => {
  ctx.body = `
  <div>
  <a href="/graphql">/graphql</a>
  </div>`
})

app.listen(3000)
