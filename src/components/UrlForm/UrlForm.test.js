import React from 'react';
import UrlForm from './UrlForm';
import { shallow } from 'enzyme';

describe('UrlForm', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<UrlForm/>)
  })
  it('should setstate when handleNameChange is invoked', () => {
    const mockEvent = {
      target: {
        name: 'title',
        value: 'LongUrl'
      }
    }
    wrapper.instance().handleNameChange(mockEvent)
    expect(wrapper.state('title')).toEqual('LongUrl')
  })
})