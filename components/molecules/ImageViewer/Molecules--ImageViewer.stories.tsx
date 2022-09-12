import ImageViewer from ".";

export function Default() {
  return (
    <ImageViewer
      image={{
        aspectRatio: 1,
        width: 300,
        src: "/logo.svg",
      }}
    />
  );
}
