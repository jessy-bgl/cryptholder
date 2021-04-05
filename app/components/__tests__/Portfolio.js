import "react-native";
import React from "react";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
import { shallow } from "enzyme";
import PortfolioComponent from "../Portfolio";

it("render a PortfolioComponent", function () {
  const wrapper = shallow(<PortfolioComponent />);

  expect(wrapper.exists()).toBe(true);
});
