import "react-native";
import React from "react";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
import { shallow } from "enzyme";
import SettingsComponent from "../Settings";

it("render a SettingsComponent", function () {
  const wrapper = shallow(<SettingsComponent />);

  expect(wrapper.exists()).toBe(true);
});
