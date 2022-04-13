// Note: If you add more, please add the appropriate Tailwind class to the safelist in the tailwind config file.
const TagType = {
	Delight: 'blue',
	Delights: 'blue',
	Article: 'green',
	Custom: 'yellow',
	Blocker: 'red',
	Podcast: 'blue',
	Video: 'purple',
	News: 'indigo'
};

export interface TagProps {
	title: string;
	color?: string;
}

const Tag = (props: TagProps) => (
	<div className={`text-${props.color || TagType[props.title] || 'gray'}-500 font-bold shadow-sm px-3 py-1 border border-${props.color || TagType[props.title] || 'gray'}-500 m-0 leading-none rounded-full text-xs font-strong uppercase inline`}>
		<span>{props.title}</span>
	</div>
);

export default Tag;
