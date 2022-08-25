import { render } from "../../../.jest/render";
import NavBar from ".";

describe("NavBar", () => {
  it("renders", () => {
    const func = () => render(<NavBar title="" subtitle="" />);

    expect(func).not.toThrow();
  });
});
