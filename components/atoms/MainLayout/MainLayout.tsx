interface MainLayoutProps {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}
