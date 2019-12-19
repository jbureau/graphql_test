const PlanetService = require('./PlanetService')
const SpaceCenterService = require('./SpaceCenterService')

const configureServices = options => ({
  planet: new PlanetService(options),
  spaceCenter: new SpaceCenterService(options)
})

module.exports = { configureServices }
