import { render } from "../../../.jest/render";
import Logo from ".";

describe("Logo", () => {
  it("renders", () => {
    const func = () => render(<Logo size="md" />);

    expect(func).not.toThrow();
  });
});
