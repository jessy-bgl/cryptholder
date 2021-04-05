import "react-native";
import React from "react";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
import { shallow } from "enzyme";
import MainComponent from "../Main";

it("render a MainComponent", function () {
  const wrapper = shallow(<MainComponent />);

  expect(wrapper.exists()).toBe(true);
});
