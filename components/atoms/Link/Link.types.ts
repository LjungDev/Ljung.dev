import type { HTMLAttributeAnchorTarget, ReactNode } from "react";

export interface LinkProps {
  href: string;
  target: HTMLAttributeAnchorTarget;
  children: ReactNode;
}
