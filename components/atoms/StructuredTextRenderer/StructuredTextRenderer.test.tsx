import { render } from "../../../.jest/render";
import StructuredTextRenderer from ".";

describe("StructuredTextRenderer", () => {
  it("renders", () => {
    const func = () =>
      render(
        <StructuredTextRenderer
          content={{
            value: {
              schema: "dast",
              document: {
                type: "root",
                children: [],
              },
            },
          }}
        />
      );

    expect(func).not.toThrow();
  });
});
