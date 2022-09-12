import { render } from "../../../.jest/render";
import Link from ".";

describe("Link", () => {
  it("renders", () => {
    const func = () =>
      render(
        <Link href="" target={"_blank"}>
          Hello World
        </Link>
      );

    expect(func).not.toThrow();
  });
});
