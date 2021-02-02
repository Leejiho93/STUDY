// import React from "react";
// import { mount } from "enzyme";
// import Profile from "./Profile";

// describe("<Profile />", () => {
//   it("matches snapshot", () => {
//     const wrapper = mount(<Profile username="easyho" name="이지호" />);
//     expect(wrapper).toMatchSnapshot();
//   });
// });

// mount Enzyme을 통해 리액트 컴포넌트 렌더링
import React from "react";
import { mount } from "enzyme";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<Profile username="easyho" name="이지호" />);
    expect(wrapper).toMatchSnapshot();
  });
});
