import Link from "next/link";

interface PostSummaryProps {
  slug: string;
  seriesTitle?: string;
  title?: string;
  description: string;
}

export default function PostSummary({
  slug,
  seriesTitle,
  title,
  description,
}: PostSummaryProps): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <Link href={`/tutorial/${slug}`}>
        <a>
          <div className="font-display text-base cursor-pointer hover:opacity-75">
            <h2 className="text-frost-3 dark:text-frost-1">
              {seriesTitle || title}
            </h2>
            <span className="text-polar-night-0 dark:text-snow-storm-2 ml-5 block font-body">
              {description}
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
}
