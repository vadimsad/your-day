import React from 'react';
import { shows } from '../constants';
import ShowCard from './ShowCard';
import Button from './Button';

const Shows = () => {
	return (
		<section id='catalog' className='mt-[160px]'>
			<header className='mb-[200px]'>
				<h2 className='heading2 text-center'>ШОУ</h2>
			</header>
			<div className='flex md:flex-row flex-col md:items-stretch justify-center md:mb-[60px] mb-0'>
				{shows.map((show, index) => (
					<ShowCard key={show.id} {...show} index={index} />
				))}
			</div>
			<div className='text-center'>
				<Button text='Все шоу' paddingY='py-[10px]' />
			</div>
		</section>
	);
};

export default Shows;
