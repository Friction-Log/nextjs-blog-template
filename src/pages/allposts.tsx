import { Footer, Header } from '../components/Layout';
import { generatePodcastFeed, generateRSSFeed } from '../data/feed';

import { GetStaticProps } from 'next';
import GridItemPost from '../components/GridItemPost';
import Head from 'next/head';
import { Post } from '../data/types';
import React from 'react';
import { getLatestPosts } from '../data/posts';
import { site } from '../data/constants';

interface AllPostsProps {
	posts?: {
		meta: Post;
	}[];
}

const AllPosts = (props: AllPostsProps) => {
	return (
		<>
			<Head>
				<title>{site.name} - {site.slogan}</title>
				<meta name="title" content={`${site.name} - ${site.slogan}`} />
				<meta name="description" content={site.description} />

				<meta property="og:type" content="website" />
				<meta property="og:url" content={site.domain} />
				<meta property="og:title" content={`${site.name} - ${site.slogan}`} />
				<meta property="og:description" content={site.description} />
				<meta property="og:image" content={site.seoImage} />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:site" content={site.twitter} />
				<meta property="twitter:url" content={site.domain} />
				<meta property="twitter:title" content={`${site.name} - ${site.slogan}`} />
				<meta property="twitter:description" content={site.description} />
				<meta property="twitter:image" content={site.seoImage} />

				<link rel="alternate" type="application/rss+xml" href={`${site.domain}/feed/rss.xml`} />
				<link rel="canonical" href={site.domain} />

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

			{/* Posts */}
			<section className="bg-white dark:bg-gray-900">
				<div className="w-full mx-auto space-y-5 py-10 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
					<div className="grid grid-cols-12 pb-10 gap-x-8 gap-y-16">
						{props.posts && props.posts.map((row) => (
							<GridItemPost
								{...row.meta}
								key={row.meta.slug}
								hideImage
							/>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default AllPosts;

export const getStaticProps: GetStaticProps = async () => {
	const posts = await getLatestPosts(0, 99999);

	console.log('Generating RSS and Podcast Feeds. Total count: ' + posts.length);

	try {
		// Creates the rss xml file
		generateRSSFeed(posts);
		// Creates the podcast xml file
		generatePodcastFeed(posts.filter(post => post.meta.audio_url));
	} catch (err) {
		console.log('There was a problem generating a feed');
		console.log(err);
	}

	return {
		props: {
			posts
		},
	};
};
