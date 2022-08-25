import Link from "next/link";

interface RelatedPost {
  slug: string;
  seriesTitle: string;
}

interface RelatedPostNavigationProps {
  left?: RelatedPost | null;
  right?: RelatedPost | null;
}

export default function RelatedPostNavigation({
  left,
  right,
}: RelatedPostNavigationProps): JSX.Element {
  return (
    <div className="flex">
      <div className="grow text-left">
        {left && (
          <Link href={`/tutorial/${left.slug}`}>
            <a className="text-frost-3 dark:text-frost-1 hover:opacity-50 active:opacity-75">
              « {left.seriesTitle}
            </a>
          </Link>
        )}
      </div>
      <div className="grow text-right">
        {right && (
          <Link href={`/tutorial/${right.slug}`}>
            <a className="text-frost-3 dark:text-frost-1 hover:opacity-50 active:opacity-75">
              {right.seriesTitle} »
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
