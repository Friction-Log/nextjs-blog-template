import { Feed } from 'feed';
import { Post } from './types';
import fs from 'fs';
import jsonfeedToRSS from 'jsonfeed-to-rss';

const hostname = 'https://yourdomain.com';
const logoUrl = `${hostname}/images/podcast-logo.jpg`;

const common = {
	home_page_url: hostname,
	version: 'https://jsonfeed.org/version/1',
	title: 'Site Title',
	description: 'Site Description',
	id: hostname,
	link: hostname,
	language: 'en',
	image: logoUrl,
	copyright: 'All rights reserved 2022, Your Brand.',
	generator: 'Your Brand',
	feedLinks: {
		json: hostname + '/feed/json',
		atom: hostname + '/feed/atom',
		rss2: hostname + '/feed/rss.xml'
	},
	author: {
		name: 'Your Brand',
		link: hostname,
	}
};

export const generateRSSFeed = async (
	posts: {
		filename: string;
		path: string;
		meta: Post;
	}[]
) => {
	const feed = new Feed({
		...common,
	});

	// This can be anything, see: https://stackoverflow.com/questions/64059759/how-to-select-the-right-category-in-rss-is-there-a-list
	feed.addCategory('Software Engineering');

	posts.forEach((post) => {
		const url = `${hostname}/post/${post.meta.slug}`;

		feed.addItem({
			title: post.meta.title,
			id: url,
			link: url,
			description: post.meta.abstract,
			content: post.meta.abstract,
			author: [{
				name: post.meta.author
			}],
			date: new Date(post.meta.publishedOn),
		});
	});

	fs.writeFileSync('public/feed/rss.xml', feed.rss2());
};

export const generatePodcastFeed = async (
	posts: {
		filename: string;
		path: string;
		meta: Post;
	}[]
) => {
	const feed = {
		...common,
		feed_url: hostname + 'feed/podcast.xml',
		'_itunes': {
			owner: {
				email: 'contact@yourbrand.com'
			},
			author: 'Your Brand',
			image: logoUrl,
			// See: https://podcasters.apple.com/support/1691-apple-podcasts-categories
			category: 'Technology',
			subcategory: "",
			explicit: false
		},
		items: [] as any[]
	};

	posts.forEach((post) => {
		const url = `${hostname}/post/${post.meta.slug}`;

		feed.items.push({
			date_published: new Date(post.meta.publishedOn),
			_itunes: {
				author: post.meta.author,
				subtitle: post.meta.title,
				summary: post.meta.abstract,
			},
			content_text: post.meta.abstract,
			content_html: post.meta.abstract,
			url,
			id: url,
			image: post.meta.heroImage,
			title: post.meta.title,
			attachments: [
				{
					size_in_bytes: post.meta.size,
					duration_in_seconds: post.meta.duration,
					url: post.meta.audio_url,
					mime_type: 'audio/mp3',
					title: post.meta.title,
				}
			]
		});
	});

	fs.writeFileSync('public/feed/podcast.xml', jsonfeedToRSS(feed));
};
