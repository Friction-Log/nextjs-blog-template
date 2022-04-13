import { Footer, Header } from '../components/Layout';

import { GetStaticProps } from 'next';
import GridItemPost from '../components/GridItemPost';
import Head from 'next/head';
import HeroPost from '../components/HeroPost';
import Link from 'next/link';
import { Post } from '../data/types';
import React from 'react';
import { getLatestPosts } from '../data/posts';
import { site } from '../data/constants';

interface IndexProps {
	posts?: {
		meta: Post;
	}[];
}

const Index = (props: IndexProps) => {
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
				<div className="w-full mx-auto max-w-7xl">
					{props.posts && props.posts[0] ? (
						<HeroPost {...props.posts[0].meta} />
					) : null}

					{/* Grid of posts */}
					<div className="grid grid-cols-12 pb-10 gap-x-8 gap-y-16">
						{props.posts && props.posts.slice(1).map((row) => (
							<GridItemPost key={row.meta.slug} {...row.meta} />
						))}
					</div>

					<hr className="mb-10 dark:border-gray-800" />

					<div className="flex justify-center">
						<Link href={`/allposts`}>
							<span
								className="cursor-pointer inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-black rounded-lg hover:bg-gray-800 ease"
							>
								See all posts
							</span>
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
	const posts = await getLatestPosts(0, 16);

	return {
		props: {
			posts
		},
	};
};
