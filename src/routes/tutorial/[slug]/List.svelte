<script>
	/**
	 * @typedef Node
	 * @type {object}
	 * @property {string} style
	 */

	/** @type Node */
	export let node;
</script>

{#if node.style === 'numbered'}
	<ol class="list-decimal list-inside">
		<slot />
	</ol>
{:else}
	<ul class="list-disc list-inside">
		<slot />
	</ul>
{/if}
