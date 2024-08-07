<script>
	/**
	 * @typedef Post
	 * @type {object}
	 * @property {string} series
	 * @property {number} seriesOrder
	 * @property {string} seriesTitle
	 * @property {string} description
	 * @property {string} title
	 * @property {string} slug
	 *
	 * @typedef PageData
	 * @type {object}
	 * @property {object} siteMetainfo
	 * @property {string} siteMetainfo.headerTitle
	 * @property {string} siteMetainfo.headerSubtitle
	 * @property {object} pageMetainfo
	 * @property {object} pageMetainfo.seo
	 * @property {string} pageMetainfo.seo.title
	 * @property {string} pageMetainfo.seo.description
	 * @property {Post[]} allPosts
	 */

	/** @type PageData */
	export let data;

	$: postsBySeries = data.allPosts.reduce(
		(/**  @type Object<string, Post[]> */ cur, post) => ({
			...cur,
			[post.series]: [...(cur[post.series] ?? []), post]
		}),
		{}
	);
	$: postSeriesKeys = Object.keys(postsBySeries);
</script>

<head>
	<title>{data.pageMetainfo.seo.title}</title>
	<meta name="description" content={data.pageMetainfo.seo.description} />
</head>

<div class="flex flex-col items-center w-screen min-h-screen">
	<div class="flex flex-col items-center grow max-w-prose w-full pt-12">
		<!-- NavBar -->
		<div class="flex items-center gap-2">
			<a href="/">
				<div class="flex items-center gap-2 hover:cursor-pointer hover:opacity-75">
					<div class="relative w-14 h-24">
						<img src="/logo.svg" alt="Logo" />
					</div>
					<!-- Title -->
					<div class=" flex flex-col items-center gap-1">
						<div class="relative">
							<h1 class="text-6xl font-display text-snow-storm-2">
								{data.siteMetainfo.headerTitle}
							</h1>
						</div>
					</div>
					<!-- Subtitle -->
					<span class="text-base font-display opacity-50 text-snow-storm-2"
						>{data.siteMetainfo.headerSubtitle}</span
					>
				</div>
			</a>
			<div class="flex gap-1 items-center font-body text-base">
				<a href="/tutorials" class="font-bold text-snow-storm-2">Tutorials</a>
			</div>
		</div>

		<!-- Content -->
		<div class="w-full flex flex-col gap-12 items-center mb-12">
			<div class="h-[1px] w-full opacity-10 bg-snow-storm-2" />
			<div class="flex flex-col gap-5 m-3 p-3 text-snow-storm-2 text-base font-body">
				<!-- List -->
				{#each postSeriesKeys as series}
					<div>
						<h1 class="font-display text-lg text-snow-storm-2">
							{series || 'Misc.'}
						</h1>
						<div class="ml-5">
							{#each postsBySeries[series] as post}
								<!-- Post -->
								<div class="flex flex-col gap-2">
									<a href={`/tutorial/${post.slug}`}>
										<div class="font-display text-base cursor-pointer hover:opacity-75">
											<h2 class="text-frost-1">
												{post.seriesTitle || post.title}
											</h2>
											<span class="text-snow-storm-2 ml-5 block font-body">
												{post.description}
											</span>
										</div>
									</a>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
			<div class="h-[1px] w-full opacity-10 bg-snow-storm-2" />
		</div>
	</div>
</div>
