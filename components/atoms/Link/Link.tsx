import NextLink from "next/link";
import type { LinkProps } from "./Link.types";

export default function Link({
  href,
  target,
  children,
}: LinkProps): JSX.Element {
  return (
    <NextLink href={href} passHref={true}>
      <a
        target={target}
        className="text-frost-3 dark:text-frost-1 hover:opacity-50 active:opacity-75"
      >
        {children}
      </a>
    </NextLink>
  );
}
