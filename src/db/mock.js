const data = require('./mockData')

/**
 * Find all space centers for a planet
 * @param {String} planetCode planet code
 * @returns {Array.<Object>}
 */
const findAllSpaceCentersByPlanetCode = planetCode => {
  const spaceCentersForPlanetCode = data.spaceCenters.byPlanetCode[planetCode]
  const spaceCenters = data.spaceCenters.map
  return spaceCentersForPlanetCode.reduce((list, id) => {
    if (id && spaceCenters[id]) list.push(spaceCenters[id])
    return list
  }, [])
}

/**
 * Find all planets
 * @param {Object} options
 * @param {number} options.limit limit of results
 * @param {boolean} options.spaceCenters populate space centers
 * @returns {Array.<Object>}
 */
const findAllPlanets = (options = {}) => {
  let results = data.planets.list.filter(planet => planet)
  if (options.limit) results = results.slice(0, options.limit)
  if (options.spaceCenters)
    results = results.map(planet => {
      planet.spaceCenters = findAllSpaceCentersByPlanetCode(planet.code)
      return planet
    })
  return results
}

/**
 * Database mock
 * Does not store any data
 */
const DBMock = {
  planets: {
    findOneByCode: code => data.planets.map[code],
    findAll: findAllPlanets
  },
  spaceCenters: {
    findOne: uid => data.spaceCenters.map[uid],
    findAllByPlanetCode: findAllSpaceCentersByPlanetCode
  }
}

module.exports = DBMock
