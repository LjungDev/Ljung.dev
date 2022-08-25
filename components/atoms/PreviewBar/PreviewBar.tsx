import Link from "next/link";

export default function PreviewBar(): JSX.Element {
  return (
    <div className="w-full bg-aurora-0 text-snow-storm-2 text-center text-sm p-1 relative">
      <span>Preview Mode</span>

      <div className="absolute right-0 top-0 h-full w-5 flex justify-center items-center">
        <Link href="/api/preview?clear=true">
          <a className="text-frost-3 dark:text-frost-1 hover:opacity-50 active:opacity-75">
            X
          </a>
        </Link>
      </div>
    </div>
  );
}
