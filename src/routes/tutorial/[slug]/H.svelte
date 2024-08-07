<script>
	/**
	 * @typedef Node
	 * @type {object}
	 * @property {number} level
	 */

	/** @type Node */
	export let node;
</script>

{#if node.level == 1}
	<h1 class="font-display text-4xl pt-6">
		<slot />
	</h1>
{:else if node.level == 2}
	<h2 class="font-display text-3xl pt-5">
		<slot />
	</h2>
{:else if node.level == 3}
	<h3 class="font-display text-2xl pt-4">
		<slot />
	</h3>
{:else if node.level == 4}
	<h4 class="font-display text-xl pt-3">
		<slot />
	</h4>
{:else}
	<p>
		<slot />
	</p>
{/if}
