const data = require('./mockedData')

/**
 * Find all space centers for a planet
 * @param {String} planetCode planet code
 * @param {number} limit limit of results
 * @returns {Array.<Object>}
 */
const findAllSpaceCentersByPlanetCode = (planetCode, options) => {
  console.log(planetCode)
  let results = data.spaceCenters.byPlanetCode[planetCode]
  if (!results) return null

  if (!isNaN(options.limit)) results = results.slice(0, options.limit)

  const spaceCenters = data.spaceCenters.map
  return results.reduce((list, id) => {
    if (id && spaceCenters[id]) list.push(spaceCenters[id])
    return list
  }, [])
}

/**
 * Database mock
 * Does not store any data
 */
const DBMock = {
  planets: {
    findOneByCode: code => data.planets.map[code],
    findAll: () => data.planets.list
  },
  spaceCenters: {
    findOne: uid => data.spaceCenters.map[uid],
    findAllByPlanetCode: findAllSpaceCentersByPlanetCode
  }
}

module.exports = DBMock
