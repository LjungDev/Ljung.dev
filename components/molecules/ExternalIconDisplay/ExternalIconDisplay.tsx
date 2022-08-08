import ThemedIcon from "../../atoms/ThemedIcon";

import type { ExternalIconDisplayProps } from "./ExternalIconDisplay.types";

export default function ExternalIconDisplay({
  icons,
}: ExternalIconDisplayProps): JSX.Element {
  return (
    <div className="flex justify-center items-start gap-1 p-3">
      {icons.map(({ iconType, link, altText }) => (
        <a
          key={link}
          aria-label={altText}
          href={link}
          target="_blank"
          className="hover:opacity-50 active:opacity-75"
          rel="noreferrer"
        >
          <ThemedIcon icon={iconType} />
        </a>
      ))}
    </div>
  );
}
