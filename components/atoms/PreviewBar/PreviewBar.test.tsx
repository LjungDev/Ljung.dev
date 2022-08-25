import { render } from "../../../.jest/render";
import PreviewBar from ".";

describe("PreviewBar", () => {
  it("renders", () => {
    const func = () => render(<PreviewBar />);

    expect(func).not.toThrow();
  });
});
