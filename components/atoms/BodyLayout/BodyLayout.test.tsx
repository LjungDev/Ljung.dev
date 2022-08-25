import { render } from "../../../.jest/render";
import BodyLayout from ".";

describe("BodyLayout", () => {
  it("renders", () => {
    const func = () => render(<BodyLayout />);

    expect(func).not.toThrow();
  });
});
