import * as MarkDownComponents from '../../components/MarkdownComponents';

import { Footer, Header } from '../../components/Layout';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useEffect, useMemo } from 'react';

import { GetStaticProps } from 'next';
import Head from 'next/head';
import HeroPost from '../../components/HeroPost';
import { Post } from '../../data/types';
import fs from 'fs';
import { getPosts } from '../../data/posts';
import grayMatter from 'gray-matter';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { site } from '../../data/constants';
import { useRouter } from 'next/router';

interface PostProps {
	content?: MDXRemoteSerializeResult<Record<string, unknown>>;
	meta?: Post;
}

const PostPage = (props: PostProps) => {
	const router = useRouter();
	const loading = useMemo(() => {
		if (router.isFallback) return true;
		return false;
	}, [router.isFallback]);

	// const handleScript = () => {
	// 	// @ts-ignore
	// 	window.HYVOR_TALK_WEBSITE = 5522;
	// 	// @ts-ignore
	// 	window.HYVOR_TALK_CONFIG = {
	// 		id: props.meta?.slug,
	// 		loadMode: 'click'
	// 	}

	// 	// Remove it for weird render cases
	// 	if (document.getElementById('ht-embed-script')) {
	// 		const script = document.getElementById('ht-embed-script');
	// 		script?.parentElement?.removeChild(script);
	// 	}

	// 	const script = document.createElement('script')
	// 	script.src = '//talk.hyvor.com/web-api/embed.js';
	// 	script.id = 'ht-embed-script';

	// 	document.body.appendChild(script);
	// }

	useEffect(() => {
		if (props.meta) {
			//Turning this off for now
			// if (props.meta.excludeComments !== false) { handleScript(); }

			if (props.meta.audio_url && 'mediaSession' in navigator) {
				navigator.mediaSession.metadata = new MediaMetadata({
					title: props.meta.title,
					artist: props.meta.author,
					album: 'REPLACEME',
					artwork: [{ src: props.meta.heroImage }]
				});
			}
		}
	}, [props.meta]);

	return (
		<>
			<Head>
				<title>{props.meta?.seoTitle} - {site.name}</title>
				<meta name="title" content={props.meta?.seoTitle} />
				<meta name="description" content={props.meta?.abstract} />

				<meta property="og:type" content="website" />
				<meta property="og:url" content={`${site.domain}/post/${props.meta?.slug}`} />
				<meta property="og:title" content={props.meta?.seoTitle} />
				<meta property="og:description" content={props.meta?.abstract} />
				<meta property="og:image" content={props.meta?.heroImage} />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:site" content={site.twitter} />
				<meta property="twitter:url" content={`${site.domain}/post/${props.meta?.slug}`} />
				<meta property="twitter:title" content={props.meta?.seoTitle} />
				<meta property="twitter:description" content={props.meta?.abstract} />
				<meta property="twitter:image" content={props.meta?.heroImage} />

				<link rel="alternate" type="application/rss+xml" href={`${site.domain}/feed/rss.xml`} />
				<link rel="canonical" href={`${site.domain}/post/${props.meta?.slug}`} />

				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
				<meta name="msapplication-TileColor" content="#aaaaaa" />
				<meta name="msapplication-config" content="/browserconfig.xml" />
				<meta name="theme-color" content="#333333" />
			</Head>

			<Header />

			{loading ? <h1>Loading...</h1> : null}

			{/* Hero Area */}
			{props.meta && <HeroPost {...props.meta} />}

			{/* Content Area */}
			<div className="w-full p-5 md:p-10 mx-auto mb-5 max-w-7xl prose lg:prose-lg dark:prose-light dark:bg-black bg-white border dark:border-0 shadow-lg xl:rounded-2xl">
				{!loading && props.content && (
					<>
						<MDXRemote
							{...props.content}
							components={{
								...MarkDownComponents.default,
							}}
						/>
					</>
				)}

				{/* Comment Area */}
				{/* <div id="hyvor-talk-view" className="bg-white dark:bg-black" /> */}
			</div>

			<Footer />
		</>
	);
};

export default PostPage;

export const getStaticProps: GetStaticProps = async (context) => {
	const slug = context?.params?.id;
	const postFile = path.join(process.cwd(), `content/posts/${slug}.mdx`);
	const content = await fs.readFileSync(postFile, 'utf8');
	const matter = grayMatter(content);
	const mdxSource = await serialize(matter.content, {
		mdxOptions: {
			remarkPlugins: [
				[require('remark-oembed'), { syncWidget: true }],
			],
		},
	});

	return {
		props: {
			content: mdxSource,
			meta: matter.data,
		},
	};
};

export const getStaticPaths = async () => {
	const posts = await getPosts();

	return {
		paths: posts.map(post => {
			return {
				params: {
					id: post.meta.slug
				}
			};
		}),
		fallback: true,
	};
};
