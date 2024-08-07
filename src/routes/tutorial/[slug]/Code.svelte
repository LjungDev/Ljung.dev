<script>
	import hljs from 'highlight.js';

	/**
	 * @typedef Node
	 * @type {object}
	 * @property {string} language
	 * @property {string} code
	 */

	/** @type Node */
	export let node;

	/** @type string */
	let html;

	$: html = hljs.highlight(node.code, { language: node.language }).value;
	$: lines = Array(html.split('\n').length)
		.fill(0)
		.map((v, i) => `${i + 1}`);
</script>

<div
	class="border-polar-night-1 border-2 rounded flex flex-col gap-1 my-2 p-2 pb-5 font-mono overflow-scroll"
>
	<span class="text-polar-night-3 mx-2">{node.language}</span>
	<div class="flex gap-2">
		<div class="flex flex-col items-end text-polar-night-3 select-none">
			{#each lines as line}
				<span>{line}</span>
			{/each}
		</div>
		<pre><code class="language-{node.language}">{@html html}<slot /></code></pre>
	</div>
</div>
