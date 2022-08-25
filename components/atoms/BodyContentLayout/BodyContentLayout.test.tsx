import { render } from "../../../.jest/render";
import BodyContentLayout from ".";

describe("BodyContentLayout", () => {
  it("renders", () => {
    const func = () => render(<BodyContentLayout />);

    expect(func).not.toThrow();
  });
});
