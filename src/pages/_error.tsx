import { Footer, Header } from '../components/Layout';

import React from 'react';

const ErrorPage = () => {
	return (
		<>
			<Header />

			<section className="bg-white dark:bg-gray-900">
				<div className="box-border h-96 relative overflow-hidden leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid">
					<div className="relative z-10 mx-auto space-y-5 py-10 px-5 xl:px-0 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
						<div className="pr-0 lg:pr-20">
							<h3 className="text-red-500 font-semibold text-2xl mb-10">Welp, this didn't work as expect!</h3>
							<p>
								Sorry about that but the page you're looking for isn't around or there was another error.
							</p>
							<p>
								Go back to the <a className="text-blue-500" href="/">home page</a>.
							</p>
						</div>
					</div>
					<div className="absolute top-0 right-0 hidden w-1/3 h-full lg:block xl:w-1/2 pl-0 xl:pl-20 pb-20">
						<img
							className="object-cover w-full h-full rounded-tl-2xl rounded-bl-2xl shadow-2xl"
							src="https://images.unsplash.com/photo-1606166245039-ffeba59d83a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3193&q=80"
						/>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default ErrorPage;
