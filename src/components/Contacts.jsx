import React from 'react';
import Button from './Button';
import { phone, telegram, whatsapp, map, heroStar } from '../assets';

const Contacts = () => {
	return (
		<section id='contacts' className='mb-[43px]'>
			<header className='mb-[64px]'>
				<h2 className='heading2 text-center'>КОНТАКТЫ</h2>
			</header>

			<div className='flex md:flex-row flex-col md:gap-0 gap-[50px] justify-between'>
				<div className='flex-[0_1_40%] pr-[15px]'>
					<div className='text-4xl font-normal font-openSans mb-[24px]'>
						Остались вопросы? <br /> с радостью{' '}
						<span
							className={`whitespace-nowrap relative after:content-curvedLine after:absolute ss:after:w-[150px] after:w-[110px] ss:after:mt-0 after:mt-[5px] after:top-4 after:left-[50%] after:translate-x-[-50%] after:overflow-hidden`}
						>
							ответим!
						</span>
					</div>
					<div className='text-2xl font-light font-openSans mb-[40px]'>
						Заполните эту форму и наш админимтратор свяжется с вами
					</div>
					<form action='' className='flex flex-col'>
						<input
							type='text'
							required
							placeholder='Ваше имя'
							className='bg-white mlg:rounded-[30px] mb-[10px] rounded-[2.08333vw] py-[15px] px-[30px] font-[18px] leading-[130%] focus:outline-pink font-openSans'
						/>
						<input
							type='tel'
							required
							placeholder='Номер телефона'
							className='bg-white mlg:rounded-[30px] mb-[30px] rounded-[2.08333vw] py-[15px] px-[30px] font-[18px] leading-[130%] focus:outline-pink font-openSans'
						/>
						<Button
							text='Отправить'
							type='submit'
							paddingY='py-[10px]'
						/>
					</form>
				</div>
				<div className='relative'>
					<div className='text-2xl font-normal font-openSans '>
						Пишите/звоните:
					</div>
					<div className='flex mb-[52px]'>
						<a
							href='tel:89063298381'
							className='flex items-end mr-[48px]'
						>
							<img src={phone} alt='phone icon' />
							<span className='font-openSans font-italic text-xl pl-[15px] underline decoration-1 relative z-10'>
								+7 906 329-83-81
							</span>
						</a>
						<a
							href='whatsapp.com'
							className='mr-[20px] relative z-10'
						>
							<img src={whatsapp} alt='whatsapp icon' />
						</a>
						<a href='telegram.com' className='relative z-10'>
							<img src={telegram} alt='telegram icon' />
						</a>
					</div>
					<div className='text-2xl font-light font-openSans mb-[20px] relative z-10'>
						Казань, ул. Дубравная 2д
					</div>
					<div>
						<img src={map} alt='map' className='relative z-10' />
					</div>
					<img
						src={heroStar}
						alt='image decoration'
						className='absolute top-[40px] -right-[60px] z-0'
					/>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
