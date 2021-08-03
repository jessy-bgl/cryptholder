import React from "react";
import { shallow } from "enzyme";

import HomeComponent from "../Home";

it("render a HomeComponent", function () {
  const wrapper = shallow(<HomeComponent />);

  expect(wrapper.exists()).toBe(true);
});
