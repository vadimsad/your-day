import React from 'react';
import { features } from '../constants';
import { squareDecor, starDecor, roundDecor } from '../assets';

const FeatureCard = ({ icon, title, content, index }) => {
	return (
		<div
			className={`${
				index !== features.length - 1 ? 'md:mr-[20px] mr-0' : 'mr-0'
			} px-1 md:mb-0 mb-[100px] md:w-auto w-[75%] ss:min-w-fit min-w-[290px] flex flex-col justify-center  card bg-white rounded-[40px] flex-1`}
		>
			<div className='relative flex justify-center flex-[0_1_50%] -mt-32'>
				<img
					src={icon}
					alt={title}
					className={`relative z-20 object-cover sm:scale-1 scale-75 w-[80%] h-full`}
				/>
				<div className='absolute z-10 w-[64%] h-full  zero:-top-[2.047743vw] zero:left-[13.764vw] md:-top-[0.047743vw] md:left-[5.764vw] mlg:-top-[0.6875rem] mlg:left-[5.1875rem]'>
					<img
						src={`${
							(index == 0 && squareDecor) ||
							(index == 1 && starDecor) ||
							(index == 2 && roundDecor)
						}`}
						alt='image decoration'
						className='w-full h-full'
					/>
				</div>
			</div>
			<div className='text-center pb-[65px]'>
				<h4 className='heading4 zero:text-[2.25rem] md:text-[2.5vw] mlg:text-[2.25rem]'>
					{title}
				</h4>
				<p className='card-paragraph zero:text-[1.5rem] md:text-[1.66667vw] mlg:text-[1.5rem]'>
					{content}
				</p>
			</div>
		</div>
	);
};

export default FeatureCard;
