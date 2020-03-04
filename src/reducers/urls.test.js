import { urls } from './urls';

describe('urls', () => {

  it('should return a state of an empty array if nothing is passed', () => {
    const expected = [];
    const result = urls(undefined, '')
    expect(result).toEqual(expected)
  });

  it('should return a array of url objects when SET_URL is the action type', () => {
    const url = {
      long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      title: "title",
      id: 4,
      short_url: "http://localhost:3001/useshorturl/4"
    }
    const mockState = [];
    const mockAction = {
      type: 'SET_URLS',
      urls: url
    }
    const expected = [{
      long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      title: "title",
      id: 4,
      short_url: "http://localhost:3001/useshorturl/4"
    }]
    const result = urls(mockState, mockAction);
    expect(result).toEqual(expected)
  })

})