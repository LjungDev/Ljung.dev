import { gql } from "graphql-request";
import Head from "next/head";

import type { GetStaticProps } from "next";

import { queryWithCommon } from "../lib/cms";

import type { CommonProps } from "../lib/cms";
import PreviewBar from "../components/atoms/PreviewBar";
import NavBar from "../components/organisms/NavBar";
import PostSeriesDisplay from "../components/organisms/PostSeriesDisplay";
import BodyLayout from "../components/atoms/BodyLayout";
import BodyContentLayout from "../components/atoms/BodyContentLayout";
import MainLayout from "../components/atoms/MainLayout";

interface Post {
  series: string;
  seriesOrder: number;
  seriesTitle: string;
  description: string;
  title: string;
  slug: string;
}

interface TutorialPageProps extends CommonProps {
  allPosts: Post[];
}

export default function TutorialPage({
  isPreview,
  allPosts,
  siteMetainfo,
  pageMetainfo,
}: TutorialPageProps): JSX.Element {
  const postsBySeries = allPosts.reduce((cur, post) => {
    return {
      ...cur,
      [post.series]: [...(cur[post.series] ?? []), post],
    };
  }, {} as Record<string, Post[]>);

  return (
    <>
      <Head>
        <title>{pageMetainfo.seo.title}</title>
        <meta name="description" content={pageMetainfo.seo.description} />
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
            {Object.keys(postsBySeries).map((series) => (
              <PostSeriesDisplay
                key={series}
                series={series || "Misc."}
                posts={postsBySeries[series]}
              />
            ))}
          </BodyContentLayout>
        </BodyLayout>
      </MainLayout>
    </>
  );
}

const PROPS_QUERY = gql`
  {
    siteMetainfo {
      headerTitle
      headerSubtitle
    }
    pageMetainfo(filter: { pageId: { eq: "tutorials" } }) {
      seo {
        description
        title
      }
    }
    allPosts(orderBy: seriesOrder_ASC) {
      series
      seriesOrder
      seriesTitle
      description
      title
      slug
    }
  }
`;

export const getStaticProps: GetStaticProps<TutorialPageProps> = (context) => {
  return queryWithCommon(PROPS_QUERY, context.preview);
};
