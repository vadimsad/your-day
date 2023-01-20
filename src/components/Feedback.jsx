import React from 'react';
import { feedback } from '../constants';
import FeedbackCard from './FeedbackCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Feedback = () => {
	const slides = feedback.map((feedbackItem) => (
		<SwiperSlide key={feedbackItem.id}>
			<FeedbackCard key={feedbackItem.id} {...feedbackItem} />
		</SwiperSlide>
	));
	return (
		<section id='feedback' className='mlg:overflow-hidden overflow-visible'>
			<h2 className='heading2 mb-[115px] text-center mlg:pr-0 pr-14'>
				ОТЗЫВЫ
			</h2>
			<div>
				<Swiper
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						621: {
							slidesPerView: 1.5,
						},
						1061: {
							slidesPerView: 2.5,
						},
					}}
					spaceBetween={20}
					grabCursor='true'
				>
					{slides}
				</Swiper>
			</div>
		</section>
	);
};

export default Feedback;
