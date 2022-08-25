import RelatedPostNavigation from ".";

export function Default() {
  return (
    <RelatedPostNavigation
      left={{
        seriesTitle: "Previous entry",
        slug: "previous-entry",
      }}
      right={{
        seriesTitle: "Next entry",
        slug: "next-entry",
      }}
    />
  );
}
