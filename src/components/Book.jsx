import React from 'react';
import Button from './Button';

const Book = () => {
	return (
		<section className='mt-[150px] bg-vanilla mlg:rounded-[60px] rounded-[4.16667vw] py-[40px] px-[15px]'>
			<header className='text-center mb-[40px]'>
				<div className='text-5xl font-[ubuntu]'>
					Желаете забронировать?
				</div>
				<div className='text-3xl font-light font-openSans'>
					Заполните эту форму и наш администратор свяжется с вами
				</div>
			</header>
			<form action='' className='text-center sm:block flex flex-col'>
				<input
					type='text'
					id='name'
					placeholder='Ваше имя'
					required
					className='bg-white rounded-[30px] text-[18px] leading-[130%] py-[15px] px-[30px] sm:mr-[17px] mr-0 focus:outline-pink mb-[20px]'
				/>
				<input
					type='tel'
					id='phone'
					placeholder='Номер телефона'
					required
					className='bg-white rounded-[30px] text-[18px] leading-[130%] py-[15px] px-[30px] sm:mr-[17px] mr-0 focus:outline-pink mb-[20px]'
				/>
				<Button type='submit' text='Отправить' paddingY='py-[10px]' />
			</form>
		</section>
	);
};

export default Book;
