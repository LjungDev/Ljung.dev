interface BodyLayoutProps {
  children?: React.ReactNode;
}

export default function BodyLayout({ children }: BodyLayoutProps): JSX.Element {
  return (
    <div className="flex flex-col items-center grow pt-12 bg-snow-storm-2 dark:bg-polar-night-0">
      {children}
    </div>
  );
}
