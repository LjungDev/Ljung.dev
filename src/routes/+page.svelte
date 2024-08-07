<script>
	/**
	 * @typedef ExternalLink
	 * @property {string} iconType
	 * @property {string} altText
	 * @property {string} link
	 *
	 * @typedef SiteData
	 * @type {object}
	 * @property {object} _site
	 * @property {object} _site.globalSeo
	 * @property {object} _site.globalSeo.fallbackSeo
	 * @property {string} _site.globalSeo.fallbackSeo.title
	 * @property {string} _site.globalSeo.fallbackSeo.description
	 * @property {object} siteMetainfo
	 * @property {string} siteMetainfo.headerTitle
	 * @property {string} siteMetainfo.headerSubtitle
	 * @property {ExternalLink[]} allExternalIconLinks
	 */

	/** @type SiteData */
	export let data;
</script>

<head>
	<title>{data._site.globalSeo.fallbackSeo.title}</title>
	<meta name="description" content={data._site.globalSeo.fallbackSeo.description} />
</head>

<div class="flex flex-col h-screen">
	<div class="grid grid-rows-[1fr_auto_1fr] h-full">
		<!-- Logo -->
		<div class=" flex items-end justify-center">
			<div class="relative w-32 h-52">
				<img src="/logo.svg" alt="Logo" />
			</div>
		</div>

		<!-- Title heading -->
		<div class=" flex flex-col items-center gap-1">
			<div class="relative">
				<h1 class="text-6xl font-display text-snow-storm-2">
					{data.siteMetainfo.headerTitle}
				</h1>
				<span class="absolute right-0 bottom-0.5 w-0">
					<span class="text-base font-display opacity-50 text-snow-storm-2">
						{data.siteMetainfo.headerSubtitle}
					</span>
				</span>
			</div>
		</div>

		<!-- Links -->
		<div class="flex flex-col items-center pt-2">
			<div class="flex gap-1 items-center font-body text-base z-10">
				<a
					href="tutorials"
					class="hover:text-polar-night-3 active:text-snow-storm-0 cursor-pointer text-snow-storm-2"
				>
					Tutorials
				</a>
			</div>

			<!-- Social Icons -->
			<div class="flex justify-center items-start gap-1 p-3">
				{#each data.allExternalIconLinks as externalLink}
					<a
						aria-label={externalLink.altText}
						href={externalLink.link}
						target="_blank"
						class="hover:opacity-50 active:opacity-75"
						rel="noreferrer"
					>
						<!-- Icon SVG -->
						{#if externalLink.iconType === 'github'}
							<svg
								aria-label="GitHub Invertocat"
								width="16px"
								height="16px"
								version="1.1"
								viewBox="0 0 26.458 25.805"
								xmlns="http://www.w3.org/2000/svg"
								class="fill-snow-storm-2"
							>
								<g transform="translate(-126.15 -93.895)">
									<g transform="matrix(.81213 0 0 -.81213 139.38 93.895)" stroke-width=".43439">
										<path
											d="m0 0c-8.995 0-16.288-7.293-16.288-16.29 0-7.197 4.667-13.302 11.14-15.457 0.815-0.149 1.112 0.354 1.112 0.786 0 0.386-0.014 1.411-0.022 2.77-4.531-0.984-5.487 2.184-5.487 2.184-0.741 1.881-1.809 2.382-1.809 2.382-1.479 1.011 0.112 0.991 0.112 0.991 1.635-0.116 2.495-1.679 2.495-1.679 1.453-2.489 3.813-1.77 4.741-1.354 0.148 1.053 0.568 1.771 1.034 2.178-3.617 0.411-7.42 1.809-7.42 8.051 0 1.778 0.635 3.232 1.677 4.371-0.168 0.412-0.727 2.068 0.159 4.311 0 0 1.368 0.438 4.48-1.67 1.299 0.361 2.693 0.542 4.078 0.548 1.383-6e-3 2.777-0.187 4.078-0.548 3.11 2.108 4.475 1.67 4.475 1.67 0.889-2.243 0.33-3.899 0.162-4.311 1.044-1.139 1.675-2.593 1.675-4.371 0-6.258-3.809-7.635-7.438-8.038 0.585-0.503 1.106-1.497 1.106-3.017 0-2.177-0.02-3.934-0.02-4.468 0-0.436 0.293-0.943 1.12-0.784 6.468 2.159 11.131 8.26 11.131 15.455 0 8.997-7.294 16.29-16.291 16.29"
											fill-rule="evenodd"
										/>
									</g>
								</g>
							</svg>
						{/if}
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
