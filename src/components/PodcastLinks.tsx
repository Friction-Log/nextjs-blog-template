import { site } from "../data/constants";

const PodcastLinks = () => (
	<div className="flex flex-col md:flex-row items-center justify-center space-x-1 ">
		<a target="_blank" className="img" href={site.podcast.apple}>
			<img className="podcast-badge h-16" src="/images/listen-on-apple.svg" alt="Listen on Apple" />
		</a>
		<a target="_blank" className="img dark:hidden" href={site.podcast.spotify}>
			<img className="podcast-badge h-16" src="/images/listen-on-spotify.svg" alt="Listen on Spotify" />
		</a>
		<a target="_blank" className="hidden img dark:block" href={site.podcast.spotify}>
			<img className="podcast-badge h-16" src="/images/listen-on-spotify-dark.svg" alt="Listen on Spotify" />
		</a>
		<a target="_blank" className="img" href={site.podcast.castro}>
			<img className="podcast-badge h-16" src="/images/listen-on-castro.svg" alt="Listen on Castro" />
		</a>
		<a target="_blank" className="img" href={site.podcast.overcast}>
			<img className="podcast-badge h-16" src="/images/listen-on-overcast.svg" alt="Listen on Overcast" />
		</a>
	</div>
);

export default PodcastLinks;
