import NavBar from ".";
import type { Links } from "./NavBar";

interface ControlProps {
  title: string;
  subtitle: string;
  selected: string;
}

export function Default({ title, subtitle, selected }: ControlProps) {
  return (
    <NavBar title={title} subtitle={subtitle} selected={selected as Links} />
  );
}

Default.args = {
  title: "Hello",
  subtitle: "World",
  selected: "",
} as ControlProps;

Default.argTypes = {
  selected: {
    options: ["<none>", "Games", "Videos", "Tutorials"],
    control: { type: "select" },
  },
};
