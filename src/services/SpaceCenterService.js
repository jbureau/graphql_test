const Service = require('./Service')

class SpaceCenterService extends Service {
  constructor(options) {
    super(options)
  }

  getSpaceCentersForPlanetCode(planetCode, limitSpaceCenters) {
    return this.dbInstance.spaceCenters.findAllByPlanetCode(planetCode, {
      limit: limitSpaceCenters
    })
  }
}

module.exports = SpaceCenterService
