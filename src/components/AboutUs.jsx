import React from 'react';
import { us, usDecor, heroStarFilled } from '../assets';
import Button from './Button';

const AboutUs = () => {
	return (
		<section id='about' className='md:mt-48 mt-22 md:text-left'>
			<header className='heading2 mb-5'>Мы</header>
			<div className='flex md:flex-row flex-col'>
				<div className='font-openSans ss:text-[32px] text-[20px] md:w-auto w-full leading-[120%] font-light flex-1 md:mr-[52px] mr-0'>
					<p className='mb-12'>
						Позвольте представиться, нас зовут Аскар и Настя. В
						сфере праздников мы уже более 15 лет, с лёгкостью
						ответим на любой вопрос, связанный с организацией
						праздника
					</p>
					<Button text='Задать вопрос' style='ss:w-auto w-full' />
				</div>
				<div className='flex-1 md:-mt-11 mt-[100px] relative'>
					<img
						src={us}
						alt='us'
						className='relative z-20 md:mx-0 mx-auto'
					/>
					<img
						src={usDecor}
						alt='image decoration'
						className='absolute md:-top-[100px] md:left-[340px] left-[62%] -top-[24%] ss:rotate-12 rotate-0 md:w-auto w-[26.5%]'
					/>
					<img
						src={heroStarFilled}
						alt='image decoration'
						className='absolute md:-bottom-[20px] md:-left-[106px] left-[0] -bottom-[20px] md:w-auto w-[26.5%]'
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
