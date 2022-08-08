import { gql } from "graphql-request";
import Head from "next/head";

import type { GetStaticProps } from "next";

import ExternalIconDisplay from "../components/molecules/ExternalIconDisplay";
import TitleHeader from "../components/atoms/TitleHeader";
import Logo from "../components/atoms/Logo";
import { cmsRequest } from "../lib/cms";

import type { Icon } from "../components/atoms/ThemedIcon/ThemedIcon.types";

interface IndexPageProps {
  isPreview: boolean;
  allExternalIconLinks: {
    iconType: Icon;
    altText: string;
    link: string;
  }[];
  siteMetainfo: {
    seo: {
      description: string;
      title: string;
    };
    headerTitle: string;
    headerSubtitle: string;
  };
}

export default function IndexPage({
  isPreview,
  allExternalIconLinks,
  siteMetainfo,
}: IndexPageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{siteMetainfo.seo.title}</title>
        <meta name="description" content={siteMetainfo.seo.description} />
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
      seo {
        description
        title
      }
      headerTitle
      headerSubtitle
    }
  }
`;

export const getStaticProps: GetStaticProps<IndexPageProps> = async (
  context
) => {
  const data: Omit<IndexPageProps, "isPreview"> = await cmsRequest({
    query: SITE_QUERY,
    isPreview: context.preview,
  });

  return {
    props: { ...data, isPreview: !!context.preview },
  };
};
