import PostSeriesDisplay from ".";

export function Default() {
  return (
    <div className="flex flex-col">
      <PostSeriesDisplay
        series="Test Series"
        posts={[
          {
            seriesTitle: "Test title",
            description: "Test description",
            slug: "test-slug-2",
          },
          {
            seriesTitle: "Test title 2",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing " +
              "elit. Maecenas dignissim ex ac turpis blandit convallis. " +
              "Cras non mauris eros. Aliquam placerat, sem et " +
              "fringilla auctor, velit nisi lobortis nibh, et aliquam " +
              "urna metus sit amet nulla. Aliquam erat volutpat. Morbi " +
              "imperdiet nulla eget faucibus laoreet. Nunc ligula eros, " +
              "feugiat a urna ac, tincidunt vulputate leo. Nulla cursus " +
              "interdum tellus a efficitur. ",
            slug: "test-slug",
          },
        ]}
      />
      <PostSeriesDisplay
        series="Other"
        posts={[
          {
            title: "Test title",
            description: "Test description",
            slug: "test-slug",
          },
          {
            title: "Test title 2",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing " +
              "elit. Maecenas dignissim ex ac turpis blandit convallis. " +
              "Cras non mauris eros. Aliquam placerat, sem et " +
              "fringilla auctor, velit nisi lobortis nibh, et aliquam " +
              "urna metus sit amet nulla. Aliquam erat volutpat. Morbi " +
              "imperdiet nulla eget faucibus laoreet. Nunc ligula eros, " +
              "feugiat a urna ac, tincidunt vulputate leo. Nulla cursus " +
              "interdum tellus a efficitur. ",
            slug: "test-slug-2",
          },
        ]}
      />
    </div>
  );
}
