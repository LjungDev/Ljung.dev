import Subtitle from "../Subtitle";
import type { TitleHeaderProps } from "./TitleHeader.types";

export default function TitleHeader({
  title,
  subtitle,
}: TitleHeaderProps): JSX.Element {
  return (
    <div className=" flex flex-col items-center gap-1">
      <div className="relative">
        <h1 className="text-6xl font-display text-polar-night-0 dark:text-snow-storm-2">
          {title}
        </h1>
        <span className="absolute right-0 bottom-0.5 w-0">
          <Subtitle subtitle={subtitle ?? ""} />
        </span>
      </div>
    </div>
  );
}
