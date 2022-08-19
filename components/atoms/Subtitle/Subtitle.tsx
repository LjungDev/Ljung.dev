interface SubtitleProps {
  subtitle: string;
}

export default function Subtitle({ subtitle }: SubtitleProps): JSX.Element {
  return (
    <span className="text-base font-display opacity-50 text-polar-night-0 dark:text-snow-storm-2">
      {subtitle}
    </span>
  );
}
