import StructuredTextRenderer from ".";

export function Default() {
  return (
    <StructuredTextRenderer
      content={{
        value: {
          schema: "dast",
          document: {
            type: "root",
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "span",
                    value: "This is a paragraph!",
                  },
                ],
              },
            ],
          },
        },
      }}
    />
  );
}
