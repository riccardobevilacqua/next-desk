import React from 'react';
import { shallow } from 'enzyme';

import { LocationCard } from './location-card';
import { forecastBudapest } from '../../mock/mock-forecast-budapest';
import { flightBudapest } from '../../mock/mock-flight-budapest';

describe('Location Card', () => {
  const initialProps = {
    title: 'Budapest',
    forecast: forecastBudapest,
    flight: flightBudapest
  };
  const sourceWrapper = shallow(<LocationCard {...initialProps} />);

  test('should render', () => {
    expect(sourceWrapper.exists()).toBeTruthy();
  });
});
