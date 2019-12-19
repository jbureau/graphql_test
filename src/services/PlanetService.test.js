const PlanetService = require('./PlanetService')

describe('+++ PlanetService test', () => {
  it('+++ should return an array of planets', () => {
    const planets = [{ name: 'mars' }]
    const findAll = jest.fn().mockReturnValue(planets)
    const dbMock = { planets: { findAll } }
    const service = new PlanetService({ db: dbMock })
    const res = service.getPlanets()
    expect(res).toEqual(planets)
    expect(findAll).toHaveBeenCalled()
  })

  it('+++ should return one planet', () => {
    const planet = { name: 'mars' }
    const findOneByCode = jest.fn().mockReturnValue(planet)
    const dbMock = { planets: { findOneByCode } }
    const service = new PlanetService({ db: dbMock })
    const res = service.getPlanet('MAR')
    expect(res).toEqual(planet)
    expect(findOneByCode).toHaveBeenCalledWith('MAR')
  })
})
