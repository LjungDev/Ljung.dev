import Link from "next/link";
import type { HTMLAttributes } from "react";
import Logo from "../../atoms/Logo";
import Subtitle from "../../atoms/Subtitle";
import TitleHeader from "../../atoms/TitleHeader";

export type Links = "Games" | "Videos" | "Tutorials";

interface NavBarProps {
  title: string;
  subtitle: string;
  selected?: Links;
}

function getClassName(
  isSelected: boolean
): HTMLAttributes<HTMLAnchorElement>["className"] {
  if (isSelected) {
    return "font-bold text-polar-night-0 dark:text-snow-storm-2";
  }
  return "hover:text-polar-night-3 active:text-snow-storm-0 cursor-pointer text-polar-night-0 dark:text-snow-storm-2";
}

export default function NavBar({
  title,
  subtitle,
  selected,
}: NavBarProps): JSX.Element {
  return (
    <div className="flex items-center gap-2">
      <Link href="/">
        <div className="flex items-center gap-2 hover:cursor-pointer hover:opacity-75">
          <Logo size="md" />
          <TitleHeader title={title} />
          <Subtitle subtitle={subtitle} />
        </div>
      </Link>
      <div className="flex gap-1 items-center font-body text-base">
        <Link href="/tutorials">
          <a className={getClassName(selected === "Tutorials")}>Tutorials</a>
        </Link>
      </div>
    </div>
  );
}
