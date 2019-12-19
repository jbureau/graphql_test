const SpaceCenterService = require('./SpaceCenterService')

describe('+++ SpaceCenterService test', () => {
  it('+++ should return an array of space centers for a planet', () => {
    const spaceCenters = [{ name: 'mars space center' }]
    const findAllByPlanetCode = jest.fn().mockReturnValue(spaceCenters)
    const dbMock = { spaceCenters: { findAllByPlanetCode } }
    const service = new SpaceCenterService({ db: dbMock })
    const res = service.getSpaceCentersForPlanetCode('MAR', 2)
    expect(res).toEqual(spaceCenters)
    expect(findAllByPlanetCode).toHaveBeenCalledWith('MAR', { limit: 2 })
  })
})
