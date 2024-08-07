import { queryCMS } from '$lib/datocms';

const query = `
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

export function load() {
	return queryCMS(query);
}
