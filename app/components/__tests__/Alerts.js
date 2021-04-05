import React from "react";
import { shallow } from "enzyme";

import AlertsComponent from "../Alerts";

it("render a AlertsComponent", function () {
  const wrapper = shallow(<AlertsComponent />);

  expect(wrapper.exists()).toBe(true);
});
