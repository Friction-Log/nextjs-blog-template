import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import { Post } from './types';

export const getPosts = async () => {
	const postDir = path.join(process.cwd(), `content/posts`);
	const filenames = await fs.readdirSync(postDir);

	const posts = await Promise.all(filenames.map(async filename => {
		const filePath = path.join(postDir, filename)
		const content = await fs.readFileSync(filePath, 'utf8')
		const matter = grayMatter(content);

		return {
			filename,
			path: `/posts/${filename.replace('.mdx', '')}`,
			meta: matter.data as Post
		}
	}));

	// Only use published posts and sort by date
	posts.sort((a, b) => {
		return new Date(b.meta.publishedOn).getTime() - new Date(a.meta.publishedOn).getTime();
	});

	return posts.filter(post => post.meta.isPublished === true);
};

export const getLatestPosts = async (startAt?: number, limit?: number) => {
	const posts = await getPosts();
	return posts.slice(startAt || 0, limit || 50);
};
