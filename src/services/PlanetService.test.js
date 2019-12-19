const PlanetService = require('./PlanetService')

describe('+++ PlanetService test', () => {
  it('+++ should return an array of planets with spaceCenters', () => {
    const planets = [{ name: 'mars' }]
    const findAll = jest.fn().mockReturnValue(planets)
    const dbMock = { planets: { findAll } }
    const service = new PlanetService({ db: dbMock })
    const res = service.getPlanetsWithSpaceCenters()
    expect(res).toEqual(planets)
    expect(findAll).toHaveBeenCalledWith({ spaceCenters: true })
  })
})
