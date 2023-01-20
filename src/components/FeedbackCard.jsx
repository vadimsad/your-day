import React from 'react';
import { feedback } from '../constants';

const FeedbaclkCard = ({ id, icon, name, content }) => {
	return (
		<div className='bg-white rounded-[40px] p-[30px]'>
			<header className='flex gap-[30px] mb-[20px] items-baseline'>
				<img src={icon} alt='client photo' />
				<h4 className='text-[24px] leading-[1.375] font-normal font-openSans'>
					{name}
				</h4>
			</header>
			<div className='text-[20px] leading-[1.35] font-light font-openSans'>
				{content}
			</div>
		</div>
	);
};

export default FeedbaclkCard;
