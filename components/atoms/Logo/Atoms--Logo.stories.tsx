import Logo from ".";
import type { Size } from "./Logo.types";
interface ControlProps {
  size: Size;
}
export function Default({ size }: ControlProps) {
  return <Logo size={size} />;
}

Default.args = {
  size: "md",
} as ControlProps;

Default.argTypes = {
  size: {
    options: ["md", "lg"],
    control: { type: "select" },
  },
};
