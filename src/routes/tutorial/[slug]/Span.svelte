<script>
	/**
	 * @typedef Node
	 * @type {object}
	 * @property {string} value
	 * @property {string[]} [marks]
	 */

	/** @type Node */
	export let node;

	$: isCode = node.marks?.includes('code');
</script>

{#if isCode}
	<code class="px-1 rounded-sm bg-polar-night-2 font-mono">{node.value}</code>
{:else}
	<span>{node.value}<slot /></span>
{/if}
