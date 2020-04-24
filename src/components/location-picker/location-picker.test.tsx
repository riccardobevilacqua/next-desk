import React from 'react';
import { shallow } from 'enzyme';

import { locations } from '../../common/location';
import { LocationPicker } from './location-picker';

describe('Location Picker', () => {
  const initialProps = {
    label: 'Depart from:',
    value: 'AMS',
    locations,
    onChange: jest.fn()
  }
  const sourceWrapper = shallow(<LocationPicker {...initialProps} />);

  it('should render', () => {
    expect(sourceWrapper.exists()).toBeTruthy();
  });

});
