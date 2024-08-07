<script>
	/**
	 * @typedef SeriesLink
	 * @type {object}
	 * @property {string} seriesTitle
	 * @property {string} slug
	 */

	import A from './A.svelte';

	/** @type SeriesLink | null */
	export let prev;

	/** @type SeriesLink | null */
	export let next;
</script>

<div class="flex my-4">
	<div class="grow text-left">
		{#if prev}
			<A href={`/tutorial/${prev.slug}`} target="_self">
				« {prev.seriesTitle}
			</A>
		{/if}
	</div>
	<div class="grow text-right">
		{#if next}
			<A href={`/tutorial/${next.slug}`} target="_self">
				{next.seriesTitle} »
			</A>
		{/if}
	</div>
</div>
