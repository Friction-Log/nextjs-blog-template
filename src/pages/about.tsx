import { Footer, Header } from '../components/Layout';

import Head from 'next/head';
import React from 'react';
import { site } from '../data/constants';

const About = () => {
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

			<section className="bg-white dark:bg-gray-900">
				<div className="box-border relative overflow-hidden leading-7 text-gray-900 border-0 border-gray-200 border-solid">
					<div className="relative z-10 mx-auto space-y-5 py-10 px-5 xl:px-0 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
						<div className="prose lg:prose-lg dark:prose-light pr-0 lg:pr-20">
							<h1>What can I do with this template?</h1>
							<p>You can do anything with it.</p>
							<p>Have fun and share with us what have you done with it.</p>

							<h2>Media supported</h2>
							<p>This template can be used primary for blog posts using MDX. However, you can also embed YouTube videos, play audio and 
								generate RSS and podcast feeds.</p>

							<p>Pull requests are always welcome!</p>
						</div>
					</div>
					<div className="absolute top-0 right-0 hidden w-1/3 h-full lg:block xl:w-1/2 pl-0 xl:pl-20 pb-20">
						<img
							className="object-cover w-full h-full rounded-tl-2xl rounded-bl-2xl shadow-2xl"
							src="https://images.unsplash.com/photo-1554229897-66ba7bb2846e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
						/>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default About;
