import Link from ".";

interface ControlProps {
  href: string;
  target: string;
  text: string;
}

export function Default({ href, target, text }: ControlProps) {
  return (
    <Link href={href} target={target}>
      {text}
    </Link>
  );
}

Default.args = {
  href: "https://ljung.dev/",
  target: "_self",
  text: "Ljung.dev",
} as ControlProps;

Default.argTypes = {
  target: {
    options: ["_self", "_blank", "_parent", "_top"],
    control: { type: "select" },
  },
};
