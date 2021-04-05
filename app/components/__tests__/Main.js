import React from "react";
import { shallow } from "enzyme";

import MainComponent from "../Main";

it("render a MainComponent", function () {
  const wrapper = shallow(<MainComponent />);

  expect(wrapper.exists()).toBe(true);
});
