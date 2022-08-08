import { GraphQLClient } from "graphql-request";

export interface RequestParams {
  query: string;
  variables?: Record<string, unknown>;
  isPreview?: boolean;
  excludeInvalid?: boolean;
}

export function cmsRequest({
  query,
  variables,
  isPreview: includeDrafts,
  excludeInvalid,
}: RequestParams) {
  const { DATOCMS_ENDPOINT, DATOCMS_PREVIEW_ENDPOINT, DATOCMS_API_TOKEN } =
    process.env;

  const cmsEndpoint = includeDrafts
    ? DATOCMS_PREVIEW_ENDPOINT
    : DATOCMS_ENDPOINT;

  if (!cmsEndpoint || !DATOCMS_API_TOKEN) {
    throw new Error("Missing CMS env variables");
  }

  const headers: HeadersInit = {
    authorization: `Bearer ${DATOCMS_API_TOKEN}`,
  };

  if (includeDrafts) {
    headers["X-Include-Drafts"] = "true";
  }
  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true";
  }

  const client = new GraphQLClient(cmsEndpoint, { headers });
  return client.request(query, variables);
}
