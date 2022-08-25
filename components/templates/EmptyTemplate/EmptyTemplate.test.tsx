import { render } from "../../../.jest/render";
import EmptyTemplate from ".";

describe("EmptyTemplate", () => {
  it("renders", () => {
    const func = () =>
      render(
        <EmptyTemplate
          siteMetainfo={{
            headerTitle: "",
            headerSubtitle: "",
          }}
          pageMetainfo={{
            seo: {
              title: "",
              description: "",
            },
          }}
          allExternalIconLinks={[]}
          isPreview={false}
        />
      );

    expect(func).not.toThrow();
  });
});
