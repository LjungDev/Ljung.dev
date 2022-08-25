import { nord as nordStyleSyntaxHighlighter } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Image, renderNodeRule, StructuredText } from "react-datocms";
import SyntaxHighlighter from "react-syntax-highlighter";
import MuxVideo from "@mux/mux-video-react";
import {
  isBlockquote,
  isCode,
  isHeading,
  isLink,
  isList,
  isListItem,
  isParagraph,
} from "datocms-structured-text-utils";
import Link from "next/link";

import type {
  ResponsiveImageType,
  StructuredTextGraphQlResponse,
  StructuredTextGraphQlResponseRecord,
} from "react-datocms";

export interface ImageBlockRecord extends StructuredTextGraphQlResponseRecord {
  __typename: "ImageRecord";
  image: {
    responsiveImage: ResponsiveImageType;
  };
}

export interface WebmBlockRecord extends StructuredTextGraphQlResponseRecord {
  __typename: "WebmRecord";
  video: {
    title: string;
    alt: string;
    video: {
      muxPlaybackId: string;
    };
  };
}

export type ContentType = StructuredTextGraphQlResponse<
  ImageBlockRecord | WebmBlockRecord
>;

interface StructuredTextRendererProps {
  content: ContentType;
}

export default function StructuredTextRenderer({
  content,
}: StructuredTextRendererProps): JSX.Element {
  return (
    <div>
      <StructuredText
        data={content}
        renderBlock={({ record }) => {
          if (record.__typename === "ImageRecord") {
            return (
              <div className="flex justify-center">
                <Image
                  data={record.image.responsiveImage}
                  layout={"intrinsic"}
                />
              </div>
            );
          }
          return (
            <MuxVideo
              style={{ height: "100%", maxWidth: "100%" }}
              playbackId={record.video.video.muxPlaybackId}
              streamType="on-demand"
              metadata={{
                video_title: record.video.title,
              }}
              controls={true}
              muted={true}
              loop={true}
            />
          );
        }}
        customNodeRules={[
          renderNodeRule(isHeading, ({ node, children, key }) => {
            const headings: (() => JSX.Element)[] = [
              () => (
                <h1 key={key} className="font-display text-4xl pt-6">
                  {children}
                </h1>
              ),
              () => (
                <h2 key={key} className="font-display text-3xl pt-5">
                  {children}
                </h2>
              ),
              () => (
                <h3 key={key} className="font-display text-2xl pt-4">
                  {children}
                </h3>
              ),
              () => (
                <h4 key={key} className="font-display text-xl pt-3">
                  {children}
                </h4>
              ),
            ];

            return headings[node.level - 1]();
          }),
          renderNodeRule(isParagraph, ({ children, key, ancestors }) => {
            // Hack (?) for inline code
            const modifiedChildren = children?.map((c) => {
              if (typeof c === "object") {
                if (c.type === "code") {
                  return (
                    <code
                      key={c.key}
                      className="px-1 rounded-sm bg-snow-storm-0 dark:bg-polar-night-2"
                    >
                      {c.props.children}
                    </code>
                  );
                }
              }
              return c;
            });
            return (
              <p
                key={key}
                className={`py-2 ${
                  ancestors[0].type === "listItem" && "inline"
                }`}
              >
                {modifiedChildren}
              </p>
            );
          }),
          renderNodeRule(isBlockquote, ({ children, key }) => {
            return (
              <blockquote
                key={key}
                className="bg-snow-storm-0 dark:bg-polar-night-1 border-l-4 border-l-polar-night-0 dark:border-l-snow-storm-0 px-4 py-2 my-2"
              >
                {children}
              </blockquote>
            );
          }),
          renderNodeRule(isLink, ({ node, children, key }) => {
            const target =
              node.meta?.find((meta) => meta.id === "target")?.value ?? "_self";
            return (
              <Link key={key} href={node.url}>
                <a
                  target={target}
                  className="text-frost-3 dark:text-frost-1 hover:opacity-50 active:opacity-75"
                >
                  {children}
                </a>
              </Link>
            );
          }),
          renderNodeRule(isList, ({ node, children, key }) => {
            if (node.style === "numbered") {
              return (
                <ol key={key} className="list-decimal list-inside">
                  {children}
                </ol>
              );
            }
            return (
              <ul key={key} className="list-disc list-inside">
                {children}
              </ul>
            );
          }),
          renderNodeRule(isListItem, ({ children, key }) => {
            return (
              <li key={key} className="my-2 pl-2">
                {children}
              </li>
            );
          }),
          renderNodeRule(isCode, ({ node, key }) => {
            return (
              <div
                key={key}
                className="border-snow-storm-0 dark:border-polar-night-1 border-2 rounded flex flex-col gap-1 my-2"
              >
                <span className="text-polar-night-3 mx-2">{node.language}</span>
                <SyntaxHighlighter
                  language={node.language}
                  style={nordStyleSyntaxHighlighter}
                  showLineNumbers={true}
                  customStyle={{ margin: 0, borderRadius: 0 }}
                >
                  {node.code}
                </SyntaxHighlighter>
              </div>
            );
          }),
        ]}
      />
    </div>
  );
}
