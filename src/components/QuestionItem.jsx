import React from 'react';
import { arrow } from '../assets';

const QuestionItem = ({
	question,
	answer,
	showDescriptionStyle,
	addMarginB,
	ariaExpanded,
	setActiveIndex,
	index,
	rotateIcon,
}) => {
	return (
		<div>
			<button
				type='button'
				onClick={() => setActiveIndex(index)}
				aria-expanded={ariaExpanded}
				className={`${addMarginB} w-full relative z-20 flex items-center justify-between py-[30px] sm:px-[60px] px-[30px] text-left bg-white mlg:rounded-[40px] rounded-[2.7778vw]`}
			>
				<p className='text-2xl pr-[15px] font-normal font-openSans'>
					{question}
				</p>
				<img
					src={arrow}
					alt='open/close icon'
					className={`${rotateIcon} w-[32px] h-[17px] transition-transform duration-300`}
				/>
			</button>
			<div
				className={`${showDescriptionStyle} relative z-10 -top-[45px] bg-vanilla xs:px-[75px] px-[30px] pt-[75px] pb-[30px] mlg:rounded-b-[40px] rounded-b-[2.7778vw]`}
			>
				<p className='text-2xl font-light font-openSans'>{answer}</p>
			</div>
		</div>
	);
};

export default QuestionItem;
