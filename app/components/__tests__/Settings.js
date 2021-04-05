import React from "react";
import { shallow } from "enzyme";

import SettingsComponent from "../Settings";

it("render a SettingsComponent", function () {
  const wrapper = shallow(<SettingsComponent />);

  expect(wrapper.exists()).toBe(true);
});
