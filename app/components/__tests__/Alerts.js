import "react-native";
import React from "react";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
import { shallow } from "enzyme";
import AlertsComponent from "../Alerts";

it("render a AlertsComponent", function () {
  const wrapper = shallow(<AlertsComponent />);

  expect(wrapper.exists()).toBe(true);
});
