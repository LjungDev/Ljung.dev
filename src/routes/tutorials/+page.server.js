import { queryCMS } from '$lib/datocms';

const query = `
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

export function load() {
	return queryCMS(query);
}
