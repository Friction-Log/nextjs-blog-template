import Link from 'next/link';

import Tag from './Tag';
import { Post } from "../data/types";

interface GridItemPostProps extends Post {
	hideImage?: boolean;
}

const GridItemPost = (props: GridItemPostProps) => {
	return (
		<div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 mx-5 xl:mx-0 dark:bg-black dark:p-5 dark:rounded-xl">
			{!props.hideImage ? (
				<Link href={`/post/${props.slug}`}>
					<img
						className="cursor-pointer object-cover w-full mb-2 overflow-hidden rounded-lg shadow-lg max-h-56 block"
						src={props.heroImage}
					/>
				</Link>
			) : null}

			<span>
				<Tag title={props.category} />
			</span>

			<h2 className="text-lg text-gray-900 dark:text-white font-bold sm:text-xl md:text-2xl cursor-pointer">
				<Link href={`/post/${props.slug}`}>{props.title}</Link>
			</h2>
			<p className="pt-2 text-xs font-medium text-gray-900 dark:text-gray-400">
				<span className="mr-1">
					{props.author}
				</span>{" "}
				· <span className="mx-1">{new Date(props.publishedOn).toLocaleDateString()}</span>
			</p>
			<p className="text-gray-900 dark:text-gray-300 cursor-pointer">
				<Link href={`/post/${props.slug}`}>
					{props.abstract}
				</Link>
			</p>
		</div>
	);
};

export default GridItemPost;
