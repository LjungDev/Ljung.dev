<script>
	import { VideoPlayer } from '@datocms/svelte';

	/**
	 * @typedef Video
	 * @type {object}
	 * @property {any} video
	 */

	/** @type Video */
	export let video;
</script>

<VideoPlayer
	data={video.video}
	streamType="on-demand"
	loop
	minResolution="720p"
	style="width: 100%; height: 100%;"
/>
