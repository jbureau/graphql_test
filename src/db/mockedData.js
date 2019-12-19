const planetsList = require('./planets.json') || []
const spaceCentersList = require('./space-centers.json') || []

const planetsMap = planetsList.reduce((map, planet) => {
  if (planet) map[planet.code] = planet
  return map
}, {})

const spaceCentersMap = spaceCentersList.reduce((map, spaceCenter) => {
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

module.exports = {
  planets: { list: planetsList, map: planetsMap },
  spaceCenters: {
    list: spaceCentersList,
    map: spaceCentersMap,
    byPlanetCode: spaceCenterIdsByPlanetCode
  }
}
