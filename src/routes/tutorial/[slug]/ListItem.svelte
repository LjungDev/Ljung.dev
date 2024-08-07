<script>
	export let node;
</script>

<li class="my-2 pl-2">
	<slot />
</li>

<style lang="postcss">
	:global(li > p) {
		display: inline;
	}
</style>
