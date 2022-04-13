import { useTheme } from 'next-themes';

export const Header = () => {
	const { systemTheme } = useTheme();

	return (
		<section className="relative bg-white dark:bg-gray-900 mt-5">
			<div className="flex items-center justify-between h-24 px-6 xl:px-0 mx-auto max-w-7xl">
				<a
					href="/"
					className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"
				>
					<img className="" src={`/${systemTheme === 'dark' ? 'Logo2-small.svg' : 'Logo1.svg'}`} alt="" />
				</a>
				<nav className="items-center justify-center space-x-8 text-gray-200 md:flex">
					<a
						href="/"
						className="hidden relative md:inline-block text-base font-bold text-gray-700 dark:text-gray-200 uppercase transition duration-150 ease hover:text-gray-500"
					>
						<span className="block">Home</span>
					</a>
					<a
						href="/about"
						className="hidden relative md:inline-block text-base font-bold text-gray-700 dark:text-gray-200 uppercase transition duration-150 ease hover:text-gray-500"
					>
						<span className="block">About</span>
					</a>
					<a
						href="https://github.com"
						className="hidden relative md:inline-block text-base font-bold text-gray-700 dark:text-gray-200 uppercase transition duration-150 ease hover:text-gray-500"
					>
						<span className="block">Github</span>
					</a>
					<a
						href="https://twitter.com"
						className="relative inline-block text-base font-bold text-gray-700 dark:text-gray-200 uppercase transition duration-150 ease hover:text-gray-500"
					>
						<span className="block">Twitter</span>
					</a>
					<a
						href="https://www.youtube.com"
						className="relative inline-block text-base font-bold text-gray-700 dark:text-gray-200 uppercase transition duration-150 ease hover:text-gray-500"
					>
						<span className="block">YouTube</span>
					</a>
					<a
						href="/feed/rss.xml"
						className="relative inline-block text-base font-bold text-gray-700 dark:text-gray-200 uppercase transition duration-150 ease hover:text-gray-500"
					>
						<span className="block">RSS</span>
					</a>
				</nav>
			</div>
		</section>
	);
};

export const Footer = () => {
	const { systemTheme } = useTheme();

	return (
		<>
			<section className="py-24 bg-white dark:bg-gray-900">
				<div className="max-w-3xl px-10 mx-auto xl:px-5">
					<div className="flex flex-col justify-center space-y-8">
						<p className="w-full max-w-3xl mx-auto text-center font-bold text-gray-800 dark:text-gray-200">
							Sign up and get the latest from us
						</p>
						{
						/* 
							Go to https://admin.mailchimp.com/audience/forms/embedded-form/editor to generate 
							your form. At the minimum it should include the form action and the tag below shown as
							BOT_PREVENTION_REPLACE_ME
						*/
						}
						<form
							action="#"
							method="post"
							id="mc-embedded-subscribe-form"
							name="mc-embedded-subscribe-form"
							className="validate flex flex-col w-full mx-auto space-y-5 md:space-y-0 md:space-x-5 md:flex-row"
							target="_blank"
							noValidate
						>
							<input
								id="mce-EMAIL"
								name="EMAIL"
								className="flex-1 w-full px-5 py-5 text-gray-900 text-xl bg-white border border-gray-300 rounded-lg focus:ring-4 focus:border-gray-600 focus:ring-gray-600 focus:ring-opacity-50 focus:outline-none"
								type="email"
								defaultValue=""
								placeholder="Email Addressss"
							/>
							<div className="clear">
								<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="flex-shrink-0 px-10 py-5 text-xl font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none" />
							</div>

							<div id="mce-responses" className="clear">
								<div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
								<div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
							</div>
							<div style={{ position: 'absolute', left: '-5000px' }}>
								<input type="text" name="BOT_PREVENTION_REPLACE_ME" tabIndex={-1} defaultValue="" />
							</div>
						</form>
					</div>
				</div>
			</section>

			<section className="box-border pt-5 mb-5 leading-7 text-gray-900 bg-white dark:bg-gray-900 border-0 border-gray-200 border-solid pb-7">
				<div className="box-border px-4 mx-auto border-solid xl:px-0 max-w-7xl">
					<div className="relative flex flex-col items-start justify-between leading-7 text-gray-900 border-0 border-gray-200 md:flex-row md:items-center">
						<a
							href="/"
							className="left-0 flex items-center justify-center order-first w-full mb-4 font-medium text-gray-900 md:justify-start md:absolute md:w-64 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0"
						>
							<img className="" src={`/${systemTheme === 'dark' ? 'Logo2-small.svg' : 'Logo1.svg'}`} alt="" />
						</a>
						<ul className="box-border md:flex mx-auto my-6 md:space-x-6">
							<li className="relative mt-2 leading-7 text-center lg:text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
								<a
									href="/about"
									className="box-border items-center block w-full px-4 text-base font-normal leading-normal dark:text-gray-200 text-gray-900 no-underline border-solid cursor-pointer hover:text-gray-600 focus-within:text-gray-700 sm:px-0 sm:text-left"
								>
									About
								</a>
							</li>
							<li className="relative mt-2 leading-7 text-center lg:text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
								<a
									href="https://github.com/sponsors"
									className="box-border items-center block w-full px-4 text-base font-semibold leading-normal dark:text-purple-300 text-purple-500 no-underline border-solid cursor-pointer hover:text-gray-600 focus-within:text-gray-700 sm:px-0 sm:text-left"
								>
									Sponsor
								</a>
							</li>
							<li className="relative mt-2 leading-7 text-center lg:text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
								<a
									href="https://github.com"
									className="box-border items-center block w-full px-4 text-base font-normal leading-normal dark:text-gray-200 text-gray-900 no-underline border-solid cursor-pointer hover:text-gray-600 focus-within:text-gray-700 sm:px-0 sm:text-left"
								>
									Github
								</a>
							</li>
							<li className="relative mt-2 leading-7 text-center lg:text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
								<a
									href="https://twitter.com"
									className="box-border items-center block w-full px-4 text-base font-normal leading-normal dark:text-gray-200 text-gray-900 no-underline border-solid cursor-pointer hover:text-gray-600 focus-within:text-gray-700 sm:px-0 sm:text-left"
								>
									Twitter
								</a>
							</li>
							<li className="relative mt-2 leading-7 text-center lg:text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
								<a
									href="https://spotify.com"
									className="box-border items-center block w-full px-4 text-base font-normal leading-normal dark:text-gray-200 text-gray-900 no-underline border-solid cursor-pointer hover:text-gray-600 focus-within:text-gray-700 sm:px-0 sm:text-left"
								>
									Spotify
								</a>
							</li>
							<li className="relative mt-2 leading-7 text-center lg:text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
								<a
									href="https://www.apple.com/apple-podcasts/"
									className="box-border items-center block w-full px-4 text-base font-normal leading-normal dark:text-gray-200 text-gray-900 no-underline border-solid cursor-pointer hover:text-gray-600 focus-within:text-gray-700 sm:px-0 sm:text-left"
								>
									Apple Podcast
								</a>
							</li>
							<li className="relative mt-2 leading-7 text-center lg:text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
								<a
									href="https://www.youtube.com"
									className="box-border items-center block w-full px-4 text-base font-normal leading-normal dark:text-gray-200 text-gray-900 no-underline border-solid cursor-pointer hover:text-gray-600 focus-within:text-gray-700 sm:px-0 sm:text-left"
								>
									YouTube
								</a>
							</li>
							<li className="relative mt-2 leading-7 text-center lg:text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
								<a
									href="/feed/rss.xml"
									className="box-border items-center block w-full px-4 text-base font-normal leading-normal dark:text-gray-200 text-gray-900 no-underline border-solid cursor-pointer hover:text-gray-600 focus-within:text-gray-700 sm:px-0 sm:text-left"
								>
									RSS
								</a>
							</li>
						</ul>
					</div>
					<div className="pt-4 mt-4 leading-7 text-center text-gray-600 border-t border-gray-200 dark:border-gray-800 md:mt-5 md:pt-5 ">
						<p className="box-border mt-0 text-sm border-0 border-solid">
							© 2021 [REPLACE_ME]. All Rights Reserved.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};
