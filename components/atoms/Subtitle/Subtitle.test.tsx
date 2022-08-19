import { render } from "../../../.jest/render";
import Subtitle from ".";

describe("Subtitle", () => {
  it("renders", () => {
    const func = () => render(<Subtitle subtitle="" />);

    expect(func).not.toThrow();
  });
});
