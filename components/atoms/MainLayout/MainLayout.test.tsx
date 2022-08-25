import { render } from "../../../.jest/render";
import MainLayout from ".";

describe("MainLayout", () => {
  it("renders", () => {
    const func = () => render(<MainLayout />);

    expect(func).not.toThrow();
  });
});
