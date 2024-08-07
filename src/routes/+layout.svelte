<script>
	import { initGTM } from '$lib/gtm';
	import '../app.css';

	initGTM();
</script>

<div class="font-body text-base text-snow-storm-0">
	<slot />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.polar-night.0);
		color: theme(colors.snow-storm.0);
	}
</style>
