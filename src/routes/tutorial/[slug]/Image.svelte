<script>
	import { Image } from '@datocms/svelte';
	import Link from './Link.svelte';
	import A from './A.svelte';

	/**
	 * @typedef DatoCMSImage
	 * @type {object}
	 * @property {import('@datocms/svelte').ResponsiveImageType} responsiveImage
	 *
	 */

	/** @type DatoCMSImage */
	export let image;

	let overlayVisible = false;

	const toggle = () => (overlayVisible = !overlayVisible);
</script>

<button on:click={toggle} class="flex justify-center cursor-pointer">
	<Image data={image.responsiveImage} layout="intrinsic" />
</button>

{#if overlayVisible}
	<div
		class="w-full h-screen max-h-screen bg-polar-night-0 bg-opacity-95 fixed top-0 left-0 z-10 flex flex-col"
	>
		<div class="flex flex-col items-end p-2">
			<button
				class="text-frost-3 dark:text-frost-1 hover:opacity-50 active:opacity-75 bg-polar-night-0 dark:bg-polar-night-2 text-xl w-8 h-8 rounded-sm"
				on:click={toggle}
			>
				X
			</button>
		</div>
		<div class="grow flex flex-col gap-2 p-2 justify-center items-center">
			<Image data={image.responsiveImage} layout="intrinsic" />
			{#if image.responsiveImage.src}
				<A href={image.responsiveImage.src} target="_blank">Open full</A>
			{/if}
		</div>
	</div>
{/if}
