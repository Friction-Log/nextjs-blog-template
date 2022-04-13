import YouTube, { YouTubeProps } from 'react-youtube';

export interface YouTubeComponentProps extends YouTubeProps {}

const YouTubeComponent = (props: YouTubeComponentProps) => {
	return (
		<YouTube
			className={props.className || 'w-full h-96'}
			{...props}
		/>
	);
};

export default YouTubeComponent;
