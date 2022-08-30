import { GraphQLClient } from "graphql-request";
import type { GetStaticPropsResult } from "next";
import type { Icon } from "../components/atoms/ThemedIcon/ThemedIcon.types";

export interface RequestParams {
  query: string;
  variables?: Record<string, unknown>;
  isPreview?: boolean;
  excludeInvalid?: boolean;
}
export interface SiteExtraMeta {
  headerTitle: string;
  headerSubtitle: string;
  pageTitlePrefix?: string;
}

export interface SiteMeta {
  globalSeo: {
    siteName: string;
    fallbackSeo: {
      title: string;
      description: string;
    };
  };
}

export interface PageMeta {
  seo: {
    description: string;
    title: string;
  };
}

export interface CommonProps {
  isPreview: boolean;
  siteMetainfo: SiteExtraMeta;
  _site: SiteMeta;
  allExternalIconLinks: {
    iconType: Icon;
    altText: string;
    link: string;
  }[];
}

export interface CommonPropsWithMeta extends CommonProps {
  pageMetainfo: PageMeta;
}

export function cmsRequest<DataType>({
  query,
  variables,
  isPreview,
  excludeInvalid,
}: RequestParams): Promise<DataType> {
  const { DATOCMS_ENDPOINT, DATOCMS_PREVIEW_ENDPOINT, DATOCMS_API_TOKEN } =
    process.env;

  const cmsEndpoint = isPreview ? DATOCMS_PREVIEW_ENDPOINT : DATOCMS_ENDPOINT;

  if (!cmsEndpoint || !DATOCMS_API_TOKEN) {
    throw new Error("Missing CMS env variables");
  }

  const headers: HeadersInit = {
    authorization: `Bearer ${DATOCMS_API_TOKEN}`,
  };

  if (isPreview) {
    headers["X-Include-Drafts"] = "true";
  }
  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true";
  }

  const client = new GraphQLClient(cmsEndpoint, { headers });
  return client.request<DataType>(query, variables);
}

export async function queryWithCommon<PropType extends CommonProps>(
  query: string,
  isPreview: boolean | undefined
): Promise<GetStaticPropsResult<PropType>> {
  const data = await cmsRequest<PropType>({
    query,
    isPreview,
  });

  const props = { ...data, isPreview: isPreview ?? false };
  return { props };
}
