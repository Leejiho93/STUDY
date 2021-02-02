import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const utils = render(<Profile username="easyho" name="이지호" />);
    expect(utils.container).toMatchSnapshot();
  });
  it("shows the props correctly", () => {
    const utils = render(<Profile username="easyho" name="이지호" />);
    utils.getByText("easyho"); // easyho 라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText("(이지호)"); // (이지호) 이라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/이/); // 정규식 /이/ 을 통과하는 엘리먼트가 있는지 확인
  });
});
