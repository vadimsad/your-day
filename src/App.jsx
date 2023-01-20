import React from 'react';
import {
	AboutUs,
	Book,
	Contacts,
	Features,
	Feedback,
	Footer,
	Heroes,
	Main,
	NavBar,
	Packages,
	Photos,
	Questions,
	Shows,
} from './components';

const App = () => {
	return (
		<main className='bg-ghosty w-full overflow-hidden'>
			<div className='sm:px-14 px-6 flex justify-center items-center'>
				<div className='mlg:max-w-[1180px] w-full'>
					<NavBar />
					<Main />
					<Features />
					<AboutUs />
				</div>
			</div>

			<div className='flex justify-center items-center'>
				<div className='mlg:max-w-[1180px] w-full'>
					<Photos />
				</div>
			</div>

			<div className='sm:px-14 px-6 flex justify-center items-center'>
				<div className='mlg:max-w-[1180px] w-full'>
					<Packages />
					<Book />
					<Shows />
					<Heroes />
				</div>
			</div>

			<div className='mlg:pl-0 pl-14 margin-left items-center'>
				<div className='mlg:max-w-[1180px] w-full'>
					<Feedback />
				</div>
			</div>

			<div className='sm:px-14 px-6 flex justify-center items-center'>
				<div className='mlg:max-w-[1180px] w-full'>
					<Questions />
					<Contacts />
					<Footer />
				</div>
			</div>
		</main>
	);
};

export default App;
