<script>
	import { StructuredText } from '@datocms/svelte';
	import {
		isBlock,
		isBlockquote,
		isCode,
		isHeading,
		isLink,
		isList,
		isListItem,
		isParagraph,
		isSpan
	} from 'datocms-structured-text-utils';
	import Block from './Block.svelte';
	import BlockQuote from './BlockQuote.svelte';
	import Code from './Code.svelte';
	import H from './H.svelte';
	import Link from './Link.svelte';
	import P from './P.svelte';
	import Span from './Span.svelte';
	import List from './List.svelte';
	import ListItem from './ListItem.svelte';
	import PrevNextNav from './PrevNextNav.svelte';

	/**
	 * @typedef SeriesLink
	 * @type {object}
	 * @property {string} seriesTitle
	 * @property {string} slug
	 *
	 * @typedef Post
	 * @type {object}
	 * @property {string} title
	 * @property {string} description
	 * @property {SeriesLink | null} seriesNext
	 * @property {SeriesLink | null} seriesPrevious
	 * @property {import('datocms-structured-text-utils').StructuredText} content
	 *
	 * @typedef PageData
	 * @type {object}
	 * @property {object} siteMetainfo
	 * @property {string} siteMetainfo.headerTitle
	 * @property {string} siteMetainfo.headerSubtitle
	 * @property {string} siteMetainfo.pageTitlePrefix
	 * @property {Post} post
	 */

	/** @type PageData */
	export let data;
</script>

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
			<div class="w-full">
				<PrevNextNav prev={data.post.seriesPrevious} next={data.post.seriesNext} />
				<StructuredText
					data={data.post.content}
					components={[
						[isSpan, Span],
						[isParagraph, P],
						[isHeading, H],
						[isBlock, Block],
						[isLink, Link],
						[isBlockquote, BlockQuote],
						[isCode, Code],
						[isList, List],
						[isListItem, ListItem]
					]}
				/>
				<PrevNextNav prev={data.post.seriesPrevious} next={data.post.seriesNext} />
			</div>
			<div class="h-[1px] w-full opacity-10 bg-snow-storm-2" />
		</div>
	</div>
</div>
