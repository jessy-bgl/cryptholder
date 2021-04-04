import 'react-native';
import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect'

// NOTE: test renderer must be required after react-native.
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import SettingsComponent from '../Settings';
import { Text } from 'react-native'

it('render a SettingsComponent', function() {
  const wrapper = shallow(
    <SettingsComponent />
  );

  expect(wrapper.exists()).toBe(true);

  expect(wrapper.contains(
    <Text>Settings Screen</Text>
  ))
});