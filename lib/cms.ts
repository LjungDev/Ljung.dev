import { GraphQLClient } from "graphql-request";
import type { GetStaticPropsResult } from "next";

export interface RequestParams {
  query: string;
  variables?: Record<string, unknown>;
  isPreview?: boolean;
  excludeInvalid?: boolean;
}
export interface SiteMeta {
  headerTitle: string;
  headerSubtitle: string;
}

export interface PageMeta {
  seo: {
    description: string;
    title: string;
  };
}

export interface CommonProps {
  isPreview: boolean;
  siteMetainfo: SiteMeta;
  pageMetainfo: PageMeta;
}

export function cmsRequest({
  query,
  variables,
  isPreview,
  excludeInvalid,
}: RequestParams) {
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
  return client.request(query, variables);
}

export async function queryWithCommon<PropType>(
  query: string,
  isPreview: boolean | undefined
): Promise<GetStaticPropsResult<PropType & CommonProps>> {
  const data: Omit<PropType, "isPreview"> = await cmsRequest({
    query,
    isPreview,
  });

  const props = { ...data, isPreview: isPreview ?? false } as PropType &
    CommonProps;
  return { props };
}
