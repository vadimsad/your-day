import React from 'react';
import Button from './Button';
import { hero1, hero2, heroDecor, heroStarFilled } from '../assets';

const Heroes = () => {
	return (
		<section className='flex md:flex-row flex-col mt-[100px]'>
			<div className='flex-1 md:pr-[50px] pr-0 md:text-left text-center md:mb-0 mb-[60px] flex flex-col justify-center'>
				<header className='mb-[60px]'>
					<h2 className='heading2'>
						Большой выбор героев и тематических программ
					</h2>
				</header>
				<div>
					<Button text='Узнать подробнее' />
				</div>
			</div>
			<div className='flex-1 relative'>
				<img
					src={hero1}
					alt='event image'
					className='absolute z-10 md:top-[190px] top-[215px] md:-left-[85px] left-[10px]'
				/>
				<img
					src={hero2}
					alt='event image'
					className='md:ml-auto md:mr-0 ml-auto mr-auto relative z-[5]'
				/>
				<img
					src={heroDecor}
					alt='image decoration'
					className='absolute rotate-[155deg] -top-[67px] md:right-[397px] right-[72%]'
				/>
				<img
					src={heroStarFilled}
					alt='image decoration'
					className='relative bottom-[60px] -right-[150px] rotate-[40deg] z-0'
				/>
			</div>
		</section>
	);
};

export default Heroes;
