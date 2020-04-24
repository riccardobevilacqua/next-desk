import React from 'react';
import { shallow } from 'enzyme';

import { locations } from '../../common/location';
import { LocationPicker } from './location-picker';

describe('Location Picker', () => {
  const initialProps = {
    label: 'Depart from:',
    value: '',
    locations,
    onChange: jest.fn()
  }
  const sourceWrapper = shallow(<LocationPicker {...initialProps} />);

  test('should render', () => {
    expect(sourceWrapper.exists()).toBeTruthy();
  });

  test('should have an option for each location', () => {
    const options = sourceWrapper.find('option');
    expect(options.length).toEqual(locations.length + 1);
  })
});
