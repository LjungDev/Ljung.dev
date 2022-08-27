import { gql } from "graphql-request";
import Head from "next/head";
import Link from "next/link";

import type { GetStaticProps } from "next";

import ExternalIconDisplay from "../components/molecules/ExternalIconDisplay";
import TitleHeader from "../components/atoms/TitleHeader";
import { queryWithCommon } from "../lib/cms";
import Logo from "../components/atoms/Logo";

import type { CommonProps } from "../lib/cms";
import PreviewBar from "../components/atoms/PreviewBar";

type IndexPageProps = Omit<CommonProps, "pageMetainfo">;

export default function IndexPage({
  isPreview,
  allExternalIconLinks,
  siteMetainfo,
  _site,
}: IndexPageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{_site.globalSeo.fallbackSeo.title}</title>
        <meta
          name="description"
          content={_site.globalSeo.fallbackSeo.description}
        />
      </Head>
      <div className="flex flex-col h-screen">
        {isPreview && <PreviewBar />}
        <div className="grid grid-rows-[1fr_auto_1fr] h-full bg-snow-storm-2 dark:bg-polar-night-0">
          <div className=" flex items-end justify-center">
            <Logo size="lg" />
          </div>
          <TitleHeader
            title={siteMetainfo.headerTitle}
            subtitle={siteMetainfo.headerSubtitle}
          />
          <div className="flex flex-col items-center pt-2">
            <div className="flex gap-1 items-center font-body text-base z-10">
              <Link href="tutorials">
                <a className="hover:text-polar-night-3 active:text-snow-storm-0 cursor-pointer text-polar-night-0 dark:text-snow-storm-2">
                  Tutorials
                </a>
              </Link>
            </div>
            <ExternalIconDisplay icons={allExternalIconLinks} />
          </div>
        </div>
      </div>
    </>
  );
}

const PROPS_QUERY = gql`
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
    _site {
      globalSeo {
        siteName
        fallbackSeo {
          title
          description
        }
      }
    }
  }
`;

export const getStaticProps: GetStaticProps<IndexPageProps> = (context) => {
  return queryWithCommon(PROPS_QUERY, context.preview);
};
