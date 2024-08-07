<script>
	/** @type string */
	export let href;

	/** @type string */
	export let target;
</script>

<a {href} {target} class="text-frost-3 dark:text-frost-1 hover:opacity-50 active:opacity-75">
	<slot />
</a>
