import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/dom";

import { render } from "../../../.jest/render";
import ExternalIconDisplay from ".";

import type { IconLink } from "./ExternalIconDisplay.types";

describe("ExternalIconDisplay", () => {
  it("renders", () => {
    const func = () => render(<ExternalIconDisplay icons={[]} />);

    expect(func).not.toThrow();
  });

  it("links to site", async () => {
    const mock: IconLink = {
      link: "https://example.com/",
      altText: "",
      iconType: "github",
    };
    const user = userEvent.setup();

    render(<ExternalIconDisplay icons={[mock]} />);
    const link = screen.getByRole("link");
    await user.click(link);

    expect(link).toHaveAttribute("href", mock.link);
  });

  it("has accessibility label", async () => {
    const mock: IconLink = {
      link: "https://example.com/",
      altText: "Hello world",
      iconType: "github",
    };

    render(<ExternalIconDisplay icons={[mock]} />);
    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("aria-label", mock.altText);
  });
});
