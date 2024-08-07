<script>
	import A from './A.svelte';
	import Span from './Span.svelte';

	/**
	 * @typedef Meta
	 * @type {object}
	 * @property {string} id
	 * @property {string} value
	 *
	 * @typedef Node
	 * @type {object}
	 * @property {string} url
	 * @property {Meta[]} meta
	 */

	/** @type Node */
	export let node;

	$: target = node.meta.find((m) => m.id === 'target')?.value ?? '_self';
</script>

<A href={node.url} {target}>
	<slot />
</A>
