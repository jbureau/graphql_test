const Service = require('./Service')

class PlanetService extends Service {
  constructor(options) {
    super(options)
  }

  getPlanet(code) {
    return this.dbInstance.planets.findOneByCode(code)
  }

  getPlanets() {
    return this.dbInstance.planets.findAll()
  }
}

module.exports = PlanetService
