import { PRIVATE_DATOCMS_CDA_TOKEN } from '$env/static/private';
import { executeQuery } from '@datocms/cda-client';
import { NonNull } from './nonNull';

/**
 * @param {string} query
 * @param {import("@datocms/cda-client").ExecuteQueryOptions<unknown>} [options]
 */
export function queryCMS(query, options) {
	return executeQuery(query, {
		...options,
		token: NonNull(PRIVATE_DATOCMS_CDA_TOKEN)
	});
}
