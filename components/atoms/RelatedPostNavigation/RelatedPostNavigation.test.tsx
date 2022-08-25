import { render } from "../../../.jest/render";
import RelatedPostNavigation from ".";

describe("RelatedPostNavigation", () => {
  it("renders", () => {
    const func = () => render(<RelatedPostNavigation />);

    expect(func).not.toThrow();
  });
});
