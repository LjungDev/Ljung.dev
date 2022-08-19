import Subtitle from ".";

interface ControlProps {
  text: string;
}

export function Default({ text }: ControlProps) {
  return <Subtitle subtitle={text} />;
}

Default.args = {
  text: ".dev",
} as ControlProps;
