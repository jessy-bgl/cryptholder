import React from "react";
import { shallow } from "enzyme";

import PortfolioComponent from "../Portfolio";

it("render a PortfolioComponent", function () {
  const wrapper = shallow(<PortfolioComponent />);

  expect(wrapper.exists()).toBe(true);
});
