import { render } from "../../../.jest/render";
import TitleHeader from ".";

describe("TitleHeader", () => {
  it("renders", () => {
    const func = () => render(<TitleHeader title="" />);

    expect(func).not.toThrow();
  });
});
