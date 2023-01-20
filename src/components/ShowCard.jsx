import React from 'react';
import { showDecoration } from '../assets';
import { shows } from '../constants';
import Button from './Button';

const ShowCard = ({ index, icon, title, content }) => {
	return (
		<div
			className={`${
				index !== shows.length - 1 ? 'md:mr-[20px] mx-auto' : 'mx-auto'
			} px-2.5 md:mb-0 mb-[100px] md:w-auto w-[75%] min-w-[290px] flex flex-col justify-between card bg-white rounded-[40px] flex-1`}
		>
			<div className='relative flex justify-center flex-[0_1_50%] -mt-32'>
				<img
					src={icon}
					alt={title}
					className={`relative z-20 object-cover sm:scale-1 scale-75 w-[80%] h-full`}
				/>
				<div className='absolute z-10 w-[64%] h-full  zero:-top-[2.047743vw] zero:left-[13.764vw] md:-top-[0.047743vw] md:left-[5.764vw] mlg:-top-[0.6875rem] mlg:left-[5.1875rem]'>
					<img
						src={showDecoration}
						alt='image decoration'
						className='w-full h-full'
					/>
				</div>
			</div>
			<div className='text-center mb-[40px] flex-1 flex flex-col'>
				<h4 className='flex-1 heading4 zero:text-[2.25rem] md:text-[2.5vw] mlg:text-[2.25rem] mb-[35px]'>
					{title}
				</h4>
				<div>
					<p className='md:text-left text-center card-paragraph zero:text-[1.5rem] md:text-[1.66667vw] mlg:text-[1.5rem]'>
						{content.text}
					</p>
					<p className='md:text-left text-center card-paragraph mb-[27px] zero:text-[1.5rem] md:text-[1.66667vw] mlg:text-[1.5rem] font-normal'>
						Продолжительность:{' '}
						<span className='font-light'>{content.duration}</span>
					</p>
					<Button text='Подробнее' paddingY='py-[10px]' />
				</div>
			</div>
		</div>
	);
};

export default ShowCard;
