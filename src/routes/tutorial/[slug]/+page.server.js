import { queryCMS } from '$lib/datocms';

const makeQuery = (/** @type string */ slug) => `
    {
      siteMetainfo {
        headerTitle
        headerSubtitle
        pageTitlePrefix
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
                  title
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
`;

export function load({ params }) {
	return queryCMS(makeQuery(params.slug));
}
