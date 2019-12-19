const planetsList = require('./planets.json') || []
const spaceCentersList = require('./space-centers.json') || []

const planets = planetsList.reduce((map, planet) => {
  if (planet) map[planet.code] = planet
  return map
}, {})

const spaceCenters = spaceCentersList.reduce((map, spaceCenter) => {
  if (spaceCenter) map[spaceCenter.uid] = spaceCenter
  return map
}, {})

const spaceCenterIdsByPlanetCode = spaceCentersList.reduce((map, spaceCenter) => {
  if (spaceCenter) {
    if (!map[spaceCenter.planet_code]) map[spaceCenter.planet_code] = []
    map[spaceCenter.planet_code].push(spaceCenter.uid)
  }
  return map
}, {})

/**
 * Database mock
 * Does not store any data
 */
const DBMock = {
  planets: {
    findOneByCode: function(code) {
      return planets[code]
    }
  },
  spaceCenters: {
    findOne: function(uid) {
      return spaceCenters[uid]
    },
    findAllByPlanetCode: function(planetCode) {
      const spaceCentersForPlanetCode = spaceCenterIdsByPlanetCode[planetCode]
      return spaceCentersForPlanetCode.reduce((list, id) => {
        if (id && spaceCenters[id]) list.push(spaceCenters[id])
        return list
      }, [])
    }
  }
}

module.exports = DBMock
