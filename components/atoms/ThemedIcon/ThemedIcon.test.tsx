import { render } from "../../../.jest/render";
import ThemedIcon from ".";

describe("ThemedIcon", () => {
  it("renders", () => {
    const func = () => render(<ThemedIcon icon="github" />);

    expect(func).not.toThrow();
  });
});
