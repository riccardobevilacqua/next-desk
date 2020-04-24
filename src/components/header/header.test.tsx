import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './header';

describe('Header', () => {
  const sourceWrapper = shallow(<Header />);

  test('should render', () => {
    expect(sourceWrapper.exists()).toBeTruthy();
  });
});
