import { gql } from "graphql-request";
import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next";

import { cmsRequest, queryWithCommon } from "../../lib/cms";
import type { CommonProps } from "../../lib/cms";

import StructuredTextRenderer from "../../components/atoms/StructuredTextRenderer";
import BodyContentLayout from "../../components/atoms/BodyContentLayout";
import BodyLayout from "../../components/atoms/BodyLayout";
import MainLayout from "../../components/atoms/MainLayout";
import PreviewBar from "../../components/atoms/PreviewBar";
import NavBar from "../../components/organisms/NavBar";
import type { ContentType } from "../../components/atoms/StructuredTextRenderer/StructuredTextRenderer";
import RelatedPostNavigation from "../../components/atoms/RelatedPostNavigation";

interface RelatedSeriesEntry {
  slug: string;
  seriesTitle: string;
}

interface TutorialPageProps extends Omit<CommonProps, "pageMetainfo"> {
  post: {
    title: string;
    description: string;
    seriesPrevious: RelatedSeriesEntry | null;
    seriesNext: RelatedSeriesEntry | null;
    content: ContentType;
  };
}

export default function TutorialPage({
  isPreview,
  siteMetainfo,
  _site,
  post: { title, description, seriesPrevious, seriesNext, content },
}: TutorialPageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{`${_site.globalSeo.siteName} | ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <MainLayout>
        {isPreview && <PreviewBar />}
        <BodyLayout>
          <NavBar
            title={siteMetainfo.headerTitle}
            subtitle={siteMetainfo.headerSubtitle}
            selected="Tutorials"
          />
          <BodyContentLayout>
            <RelatedPostNavigation left={seriesPrevious} right={seriesNext} />
            <StructuredTextRenderer content={content} />
            <RelatedPostNavigation left={seriesPrevious} right={seriesNext} />
          </BodyContentLayout>
        </BodyLayout>
      </MainLayout>
    </>
  );
}

function makePropsQuery(slug: string): string {
  return gql`
    {
      siteMetainfo {
        headerTitle
        headerSubtitle
        pageTitlePrefix
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
      post(filter: { slug: { eq: "${slug}" } }) {
        title
        description
        seriesPrevious {
          slug
          seriesTitle
        }
        seriesNext {
          slug
          seriesTitle
        }
        content {
          value
          blocks {
            __typename
            ... on ImageRecord {
              id
              image {
                responsiveImage(imgixParams: {auto: format, maxW: " 600"}) {
                  base64
                  srcSet
                  webpSrcSet
                  sizes
                  src
                  alt
                  title
                  width
                  height
                  aspectRatio
                }
              }
            }
            ... on WebmRecord {
              id
              video {
                title
                alt
                video {
                  muxPlaybackId
                }
              }
            }
          }
        }
      }
    }
  `;
}

export const getStaticProps: GetStaticProps<
  TutorialPageProps,
  StaticPathProps
> = (context) => {
  const query = makePropsQuery(context.params?.slug ?? "");
  return queryWithCommon(query, context.preview);
};

type StaticPathProps = {
  slug: string;
};

const PATHS_QUERY = gql`
  {
    allPosts {
      slug
    }
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await cmsRequest<{ allPosts: StaticPathProps[] }>({
    query: PATHS_QUERY,
    isPreview: process.env.NODE_ENV === "development",
  });

  const paths = data.allPosts.map((post) => ({
    params: { ...post },
  }));

  return {
    paths,
    fallback: false,
  };
};
