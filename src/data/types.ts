export interface Post {
	// General post information
	title: string;
	slug: string;
	seoTitle: string;
	abstract: string;
	category: string;
	heroImage: string;
	author: string;
	isPublished: boolean;
	publishedOn: string;
	excludeComments?: boolean;
	// Podcast & media specific
	size?: number;
	duration?: number;
	audio_url?: string;
}
