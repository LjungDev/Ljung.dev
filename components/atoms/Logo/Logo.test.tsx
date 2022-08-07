import { render } from "../../../.jest/render";
import Logo from ".";

describe("Logo", () => {
  it("renders", () => {
    const func = () => render(<Logo />);

    expect(func).not.toThrow();
  });
});
