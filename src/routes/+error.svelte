<script>
	import { page } from '$app/stores';
</script>

<div class="flex flex-col h-screen">
	<div class="flex flex-col items-center justify-center h-full">
		<h1 class="text-6xl font-display text-snow-storm-2">
			{$page.status}
		</h1>
		<p>{$page.error?.message}</p>
	</div>
</div>
