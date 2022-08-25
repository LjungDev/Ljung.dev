import { render } from "../../../.jest/render";
import PostSummary from ".";

describe("PostSummary", () => {
  it("renders", () => {
    const func = () => render(<PostSummary description="" slug="" />);

    expect(func).not.toThrow();
  });
});
