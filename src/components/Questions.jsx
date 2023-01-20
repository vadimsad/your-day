import React, { useState } from 'react';
import { questions } from '../constants';
import QuestionItem from './QuestionItem';
import { heroDecor } from '../assets';

const Questions = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section id='questions' className='mt-[187px] mb-[210px]'>
			<header>
				<h2 className='heading2 text-center mb-[107px]'>
					ЧАСТО ЗАДАВАЕМЫЕ{' '}
					<span
						className={`whitespace-nowrap relative after:content-curvedLine after:absolute after:w-[100px] after:top-4 after:left-[50%] after:translate-x-[-50%] after:scale-[2] after:overflow-hidden`}
					>
						ВОПРОСЫ
					</span>
				</h2>
			</header>
			<div className='relative mlg:max-w-[980px] max-w-auto mx-auto'>
				{questions.map((question, index) => {
					const showDescriptionStyle =
						index === activeIndex ? '' : 'hidden';
					const addMarginB =
						index === activeIndex ? 'mb-0' : 'mb-[30px]';
					const ariaExpanded = index === activeIndex;
					const rotateIcon =
						index === activeIndex ? 'rotate-[180deg]' : '';
					return (
						<QuestionItem
							key={question.id}
							{...question}
							index={index}
							rotateIcon={rotateIcon}
							setActiveIndex={setActiveIndex}
							showDescriptionStyle={showDescriptionStyle}
							addMarginB={addMarginB}
							ariaExpanded={ariaExpanded}
						/>
					);
				})}
				<img
					src={heroDecor}
					alt='image decoration'
					className='absolute sm:-bottom-[130px] -bottom-[160px] mlg:-left-[130px] sm:-left-[100px] -left-[70px] z-20 mlg:rotate-[73deg] rotate-[53deg]'
				/>
			</div>
		</section>
	);
};

export default Questions;
