import React from 'react';
import { fox } from '../assets';
import Button from './Button';
import { heroStar, curvedLine, heroDecor } from '../assets';

const Main = () => {
	return (
		<section id='main'>
			<div className='flex md:flex-row flex-col md:mb-10 mb-28 justify-between items-center'>
				<div className='md:max-w-[563px] md:self-center w-full flex-1 relative md:mb-0 mb-10'>
					<div className='absolute z-[1] -top-14 -left-16'>
						<img src={heroStar} alt='star' />
					</div>
					<h1 className='flex relative z-[5] flex-col font-ubuntu sm:text-[90px] text-[60px] leading-[100%] mb-[20px]'>
						<span className='md:self-start text-center'>Это</span>
						<span className='md:self-end text-center'>
							ТВОЙ ДЕНЬ
						</span>
					</h1>
					<p className='relative z-10 text-center md:text-right font-openSans font-light sm:text-[24px] text-[20px] leading-[137.5%]'>
						Дубравная 2д <br />
						Организация детских праздников{' '}
						<span
							className={`whitespace-nowrap relative after:content-curvedLine after:absolute after:w-[100px] after:top-4 after:left-[50%] after:translate-x-[-50%] after:overflow-hidden`}
						>
							под ключ
						</span>
					</p>
				</div>
				<div
					className={`m-6 md:pl-10 pl-0 relative after:content-heroDecor after:absolute after:-bottom-[136px] after:-right-[28px]`}
				>
					<img
						src={fox}
						alt='fox_artist'
						className='w-[450px] h-[416px] rounded-[120px] object-cover rotate-[15deg]'
					/>
				</div>
			</div>
			<div className=' ss:block flex flex-col gap-y-2.5 md:text-left text-center'>
				<Button text='Позвонить' style='ss:mr-[11px] mr-0' />
				<Button text='Заказать звонок' pink={true} />
			</div>
		</section>
	);
};

export default Main;
