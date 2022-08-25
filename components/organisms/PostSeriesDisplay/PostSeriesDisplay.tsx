import PostSummary from "../../molecules/PostSummary";

interface PostSeriesDisplayProps {
  series: string;
  posts: {
    slug: string;
    description: string;
    seriesTitle?: string;
    title?: string;
  }[];
}

export default function PostSeriesDisplay({
  series,
  posts,
}: PostSeriesDisplayProps): JSX.Element {
  return (
    <div>
      <h1 className="font-display text-lg text-polar-night-0 dark:text-snow-storm-2">
        {series}
      </h1>
      <div className="ml-5">
        {posts.map((post) => (
          <PostSummary
            key={post.slug}
            description={post.description}
            seriesTitle={post.seriesTitle}
            slug={post.slug}
            title={post.title}
          />
        ))}
      </div>
    </div>
  );
}
