// The purpose of this file is to export all the components that can be used in markdown

import YouTube from './YouTube';
import PodcastLinks from './PodcastLinks';
import Tag from './Tag';
import Code from './Code';
import { LogWrapper, Log } from './Log';
import AudioPlayer from './AudioPlayer';

export default {
	YouTube,
	PodcastLinks,
	LogWrapper,
	Log,
	Tag,
	Code,
	AudioPlayer,
	pre: Code,
	code: Code
};
