const PlanetService = require('./PlanetService')
const SpaceCenterService = require('./SpaceCenterService')

const configureServices = function(options) {
  return {
    planet: new PlanetService(options),
    spaceCenter: new SpaceCenterService(options)
  }
}

module.exports = { configureServices }
