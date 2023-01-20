import React from 'react';
import { features } from '../constants';
import FeatureCard from './FeatureCard';

const Features = () => {
	return (
		<section className='mt-[140px]'>
			<header className='text-center'>
				<h2 className='heading2 mb-[152px]'>
					ВСЕ, ЧТО НУЖНО ДЛЯ ДЕТСКОГО ПРАЗДНИКА
				</h2>
			</header>

			<div className='flex md:flex-row flex-col md:items-stretch items-center'>
				{features.map((feature, index) => {
					return (
						<FeatureCard
							key={feature.id}
							{...feature}
							index={index}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Features;
