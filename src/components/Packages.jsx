import React from 'react';
import { packages } from '../constants';
import Button from './Button';
import { usDecor } from '../assets';

const PackageItem = (props) => {
	return (
		<div
			className={`${props.style} card md:gap-0 gap-[30px] flex flex-col bg-white md:w-auto w-[75%] min-w-[290px] rounded-[60px] ss:p-[30px] p-[15px]`}
		>
			<div className={`flex ${props.flexStyle} flex-[1_0_auto]`}>
				<header className={`${props.headerStyle}`}>
					<div
						className={`heading4 zero:text-[2.25rem] md:text-[2.5vw] mlg:text-[2.25rem]`}
					>
						{props.title}
					</div>
					<div className='ss:text-[30px] text-[24px] leading-[1.36667] font-light'>
						{props.subtitle}
					</div>
				</header>
				<ul>
					{props.features.map((feature) => (
						<li
							key={feature.id}
							className='text-[20px] leading-[140%] font-light before:content-["·"] before:text-[50px] before:align-text-top before:leading-[20px] before:pr-[10px]'
						>
							{feature.text}
						</li>
					))}
				</ul>
			</div>

			<div className={`flex ${props.flexStyle} justify-between`}>
				<div
					className={`${props.marginBottom} ss:text-[20px] text-[18px] leading-[1.35]`}
				>
					<div>
						<span className='font-medium'>В будни: </span>
						{props.price.weekdays}
					</div>
					<div>
						<span className='font-medium'>
							В выходные и праздничные дни:{' '}
						</span>
						{props.price.weekends}
					</div>
				</div>
				<div className='text-center'>
					<Button text='Подробнее' paddingY='py-[10px]' />
				</div>
			</div>
		</div>
	);
};

const Packages = () => {
	return (
		<section id='price' className='mt-[150px]'>
			<header className='mb-[40px]'>
				<h2 className='heading2 text-center'>ПАКЕТЫ ПРОГРАММ</h2>
			</header>
			<div className='grid md:grid-cols-[1fr_2fr] grid-cols-1 md:justify-items-stretch justify-items-center gap-[20px]'>
				{packages.map((item, index) => (
					<PackageItem
						key={item.id}
						{...item}
						style={`${index == 0 ? 'row-span-2 ' : ''}`}
						flexStyle={
							index == 0
								? 'flex-col'
								: 'justify-between md:flex-row flex-col md:mb-[20px] mb-0'
						}
						marginBottom={
							index == 0 ? 'mb-[20px]' : 'md:mb-0 mb-[20px]'
						}
						headerStyle={
							index == 0
								? 'ss:pb-[45px] pb-[15px] text-center flex-initial'
								: 'md:pr-[20px] ss:pb-[45px] pb-[15px] md:text-left text-center flex-[1_0_auto]'
						}
						flexGrow={
							index == 0 ? 'flex-initial' : 'flex-[1_0_auto]'
						}
					/>
				))}
			</div>
			<img
				src={usDecor}
				alt='decoration'
				className='xs:-scale-100 -scale-75 relative bottom-[22px] -left-[62px] ss:-left-[56px] md:-left-[148px]'
			/>
			<div className='text-center ss:-mt-[80px] -mt-[50px]'>
				<Button text='Все пакеты' />
			</div>
		</section>
	);
};

export default Packages;
