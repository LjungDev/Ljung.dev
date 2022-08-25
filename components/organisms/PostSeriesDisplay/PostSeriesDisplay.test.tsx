import { render } from "../../../.jest/render";
import PostSeriesDisplay from ".";

describe("PostSeriesDisplay", () => {
  it("renders", () => {
    const func = () => render(<PostSeriesDisplay series="Hello" posts={[]} />);

    expect(func).not.toThrow();
  });
});
