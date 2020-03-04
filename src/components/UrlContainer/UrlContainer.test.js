import { UrlContainer, mapStateToProps, mapDispatchToProps } from './UrlContainer';
import { shallow } from 'enzyme';
import React from 'react';

describe('UrlContainer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<UrlContainer urls={
      [{id: 1,
      long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      short_url: "http://localhost:3001/useshorturl/1",
      title: "Awesome photo"}]
    }/> )
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should get the expected state', () => {
    const mockState = {
      urls: [{
        id: 1,
        long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        short_url: "http://localhost:3001/useshorturl/1",
        title: "Awesome photo"
      }]
    }
    const expected = {
      urls: [{
        id: 1,
        long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        short_url: "http://localhost:3001/useshorturl/1",
        title: "Awesome photo"
      }]
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('should call on setUrls when using dispatch', () => {
    const mockResponse = {
      id: 1,
      long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      short_url: "http://localhost:3001/useshorturl/1",
      title: "Awesome photo"
    }
    const mockDispatch = jest.fn();
    const mockActionToDispatch = {
      type: 'SET_URLS',
      urls : mockResponse
    }
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setUrls(mockResponse);
    expect(mockDispatch).toHaveBeenCalledWith(mockActionToDispatch)
  });
});