import { gql } from "graphql-request";
import type { GetStaticProps } from "next";

import EmptyTemplate from "../components/templates/EmptyTemplate";
import { queryWithCommon } from "../lib/cms";
import type { CommonProps } from "../lib/cms";

export default EmptyTemplate;

const PROPS_QUERY = gql`
  {
    siteMetainfo {
      headerTitle
      headerSubtitle
    }
    pageMetainfo(filter: { pageId: { eq: "games" } }) {
      seo {
        description
        title
      }
    }
  }
`;

export const getStaticProps: GetStaticProps<CommonProps> = (context) => {
  return queryWithCommon(PROPS_QUERY, context.preview);
};
