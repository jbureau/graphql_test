const Service = require('./Service')

class PlanetService extends Service {
  constructor(options) {
    super(options)
  }

  getPlanetsWithSpaceCenters(limit) {
    return this.dbInstance.planets.findAll({ limit, spaceCenters: true })
  }
}

module.exports = PlanetService
