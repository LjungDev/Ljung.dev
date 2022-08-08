import type { Icon } from "../../atoms/ThemedIcon/ThemedIcon.types";

export interface IconLink {
  iconType: Icon;
  altText: string;
  link: string;
}

export interface ExternalIconDisplayProps {
  icons: IconLink[];
}
