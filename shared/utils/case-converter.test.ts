import caseCoverter from './case-coverter'

describe('caseCoverter', () => {
  it('should covert all the keys of the object to camelCase', () => {
    const test = {
      'user_id': 1,
      'userName': 'John Doe'
    }

    const result = caseCoverter(test)
    expect(result).toEqual({
      'userId': 1,
      'userName': 'John Doe'
    })
  })
})