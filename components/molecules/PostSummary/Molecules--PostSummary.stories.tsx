import PostSummary from ".";

interface ControlProps {
  slug: string;
  title: string;
  seriesTitle: string;
  description: string;
}

export function Default({
  slug,
  title,
  seriesTitle,
  description,
}: ControlProps) {
  return (
    <PostSummary
      slug={slug}
      title={title}
      seriesTitle={seriesTitle}
      description={description}
    />
  );
}

Default.args = {
  slug: "slug-here",
  title: "Hello World",
  seriesTitle: "",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos in " +
    "praesentium sunt quae doloribus unde reiciendis repudiandae ea " +
    "corporis vel! Magni quo eveniet ea veritatis alias natus molestias " +
    "esse tenetur?",
} as ControlProps;
