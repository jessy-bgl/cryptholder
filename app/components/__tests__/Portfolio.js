import 'react-native';
import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect'

// NOTE: test renderer must be required after react-native.
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import PortfolioComponent from '../Portfolio';
import { Text } from 'react-native'

it('render a PortfolioComponent', function() {
  const wrapper = shallow(
    <PortfolioComponent />
  );

  expect(wrapper.exists()).toBe(true);

  expect(wrapper.contains(
    <Text>Portfolio Screen</Text>
  ))
});
