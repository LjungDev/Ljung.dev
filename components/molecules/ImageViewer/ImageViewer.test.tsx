import { render } from "../../../.jest/render";
import ImageViewer from ".";

describe("ImageViewer", () => {
  it("renders", () => {
    const func = () =>
      render(
        <ImageViewer
          image={{
            aspectRatio: 1,
            width: 0,
          }}
        />
      );

    expect(func).not.toThrow();
  });
});
