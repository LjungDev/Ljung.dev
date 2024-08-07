/**
 * @template {any} T
 * @param {T} item
 */
export function NonNull(item) {
	if (item === null || item === undefined) throw new Error('item is null/undefined');
	return item;
}
