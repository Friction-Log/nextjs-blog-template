
const AudioPlayer = (props: {
	url: string;
}) => (
	<audio
		className="w-full"
		controls
		src={props.url}
	>
		Your browser does not support the
		<code>audio</code> element.
	</audio>
);

export default AudioPlayer;
