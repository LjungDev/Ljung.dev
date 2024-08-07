<script>
	import Image from './Image.svelte';
	import Video from './Video.svelte';

	export let node;

	/**
	 * @typedef Block
	 * @type {object}
	 * @property {string} __typename
	 * @property {any} [image]
	 * @property {any} [video]
	 */

	/** @type Block */
	export let block;
</script>

{#if block.__typename === 'ImageRecord'}
	<Image image={block.image} />
{:else if block.__typename === 'WebmRecord'}
	<Video video={block.video} />
{:else}
	<pre>(unknown element {block.__typename})</pre>
{/if}
