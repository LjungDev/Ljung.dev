interface BodyContentLayoutProps {
  children?: React.ReactNode;
}

export default function BodyContentLayout({
  children,
}: BodyContentLayoutProps): JSX.Element {
  return (
    <div className="max-w-xl w-full flex flex-col gap-12 items-center mb-12">
      <div className="h-[1px] w-full opacity-10 bg-polar-night-0 dark:bg-snow-storm-2" />
      <div className="flex flex-col gap-2 max-w-lg m-3 text-polar-night-0 dark:text-snow-storm-2 text-base font-body">
        {children}
      </div>
      <div className="h-[1px] w-full opacity-10 bg-polar-night-0 dark:bg-snow-storm-2" />
    </div>
  );
}
