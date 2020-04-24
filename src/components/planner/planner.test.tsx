import React from 'react';
import { shallow } from 'enzyme';

import { Planner } from './planner';

describe('Planner', () => {
  const sourceWrapper = shallow(<Planner />);

  test('should render', () => {
    expect(sourceWrapper.exists()).toBeTruthy();
  });
});
