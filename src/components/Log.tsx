
export interface LogWrapperProps {
	title?: string;
	children: React.ReactNode | React.ReactNode[];
}

export const LogWrapper = (props: LogWrapperProps) => {
	return (
		<>
			<section className="w-full py-24 mx-auto bg-white">
				<div className="max-w-5xl px-12 mx-auto xl:px-12">
					<h1 className="mb-12 text-xl font-bold text-left md:text-3xl md:text-center">
						{props.title || 'Logs'}
					</h1>
				</div>

				{props.children}
			</section>
		</>
	);
};

export interface LogProps {
	title: string;
	content: string;
}

export const Log = (props: LogProps) => {
	return (
		<>
			<div className="flex items-start justify-start mb-12">
				<div>
					<p className="mt-0 mb-3 font-semibold text-gray-900">
						{props.title}
					</p>
					<p className="text-gray-600">
						{props.content}
					</p>
				</div>
			</div>
		</>
	);
};
