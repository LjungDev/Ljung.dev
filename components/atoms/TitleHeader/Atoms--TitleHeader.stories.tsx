import TitleHeader from ".";

interface ControlProps {
  title: string;
  subtitle: string;
}

export function Default({ title, subtitle }: ControlProps) {
  return <TitleHeader title={title} subtitle={subtitle} />;
}

Default.args = {
  title: "Hello",
  subtitle: "World",
} as ControlProps;
