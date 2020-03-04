import * as actions from './index'

describe('setUrls', () => {
  it('should have a type of SET_URLS', () => {
    const url = 'https://github.com/turingschool-examples/url-shortener-ui'
    const expectedAction = {
      type: 'SET_URLS',
      urls: url
    }
    const result = actions.setUrls(url)
    expect(result).toEqual(expectedAction)
  })
})