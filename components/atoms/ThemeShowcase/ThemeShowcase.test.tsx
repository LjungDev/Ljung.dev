import { render } from "../../../.jest/render";
import ThemeShowcase from ".";

describe("ThemeShowcase", () => {
  it("renders", () => {
    const func = () => render(<ThemeShowcase />);

    expect(func).not.toThrow();
  });
});
