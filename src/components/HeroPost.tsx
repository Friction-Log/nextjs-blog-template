import Link from 'next/link';

import { Post } from '../data/types';
import Tag from './Tag';

interface HeroPostProps extends Post {}

const HeroPost = (props: HeroPostProps) => {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="w-full mx-auto space-y-5 py-10 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
				<div className="flex flex-col items-center md:flex-row mx-5 xl:mx-0">
					<div className="w-full md:w-1/2">
						<Link href={`/post/${props.slug}`}>
						<img
							className="object-cover bg-gray-200 p-1 w-full h-full md:rounded-lg max-h-64 sm:max-h-96 block cursor-pointer"
							src={props.heroImage}
						/>
						</Link>
					</div>
					<div className="flex flex-col items-start justify-center w-full h-full py-6 px-5 md:px-0 md:mb-0 md:w-1/2">
						<div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
							<div className="flex items-center py-1.5 leading-none rounded-full text-xs font-medium uppercase inline-block">
								<span>
									<Tag title={props.category} />
								</span>
							</div>
							<h1 className="text-4xl font-semibold leading-none lg:text-5xl xl:text-6xl text-gray-900 dark:text-gray-100">
								<Link href={`/post/${props.slug}`}>
								{props.title}
								</Link>
							</h1>
							<p className="pt-2 text-xl dark:text-gray-200 text-gray-900">
								<Link href={`/post/${props.slug}`}>
									{props.abstract}
								</Link>
							</p>
							<p className="pt-2 text-sm font-medium dark:text-gray-200 text-gray-900">
								by <span className="mr-1">{props.author}</span> ·{' '}
								<span className="mx-1">
									{new Date(props.publishedOn).toLocaleDateString()}
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroPost;
