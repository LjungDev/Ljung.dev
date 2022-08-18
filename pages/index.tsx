import { gql } from "graphql-request";
import Head from "next/head";
import Link from "next/link";

import type { GetStaticProps } from "next";

import ExternalIconDisplay from "../components/molecules/ExternalIconDisplay";
import TitleHeader from "../components/atoms/TitleHeader";
import { queryWithCommon } from "../lib/cms";
import Logo from "../components/atoms/Logo";

import type { Icon } from "../components/atoms/ThemedIcon/ThemedIcon.types";
import type { CommonProps } from "../lib/cms";

interface IndexPageProps extends CommonProps {
  isPreview: boolean;
  allExternalIconLinks: {
    iconType: Icon;
    altText: string;
    link: string;
  }[];
}

export default function IndexPage({
  isPreview,
  allExternalIconLinks,
  siteMetainfo,
  pageMetainfo,
}: IndexPageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{pageMetainfo.seo.title}</title>
        <meta name="description" content={pageMetainfo.seo.description} />
      </Head>
      <div className="flex flex-col h-screen">
        {isPreview && (
          <div className="w-full bg-aurora-0 text-snow-storm-2 text-center text-sm p-1">
            <span>Preview Mode</span>
          </div>
        )}
        <div className="grid grid-rows-[1fr_auto_1fr] w-screen h-full bg-snow-storm-2 dark:bg-polar-night-0">
          <div className=" flex items-end justify-center">
            <div className="w-32">
              <Logo />
            </div>
          </div>
          <TitleHeader
            title={siteMetainfo.headerTitle}
            subtitle={siteMetainfo.headerSubtitle}
          />
          <ExternalIconDisplay icons={allExternalIconLinks} />
        </div>
      </div>
    </>
  );
}

const SITE_QUERY = gql`
  {
    allExternalIconLinks {
      iconType
      altText
      link
    }
    siteMetainfo {
      headerTitle
      headerSubtitle
    }
    pageMetainfo(filter: { pageId: { eq: "home" } }) {
      seo {
        description
        title
      }
    }
  }
`;

export const getStaticProps: GetStaticProps<IndexPageProps> = async (
  context
) => {
  return queryWithCommon(SITE_QUERY, context.preview);
};
