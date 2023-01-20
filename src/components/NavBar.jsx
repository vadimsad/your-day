import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';
import { menu, close } from '../assets';

const NavBar = () => {
	const [toggle, setToggle] = useState(true);

	return (
		<header id='header'>
			<nav className='w-full flex py-[40px] justify-between items-center'>
				<div className='relative z-[50] font-ubuntu text-[24px] leading-[24px] pr-6'>
					<a href='#'>ТВОЙ ДЕНЬ</a>
				</div>
				<ul className='md:flex hidden justify-center items-center flex-1 flex-wrap'>
					{navLinks.map((link, index) => {
						return (
							<li
								key={link.id}
								className={`${
									index !== navLinks.length - 1
										? 'mr-[38px]'
										: 'mr-0'
								} text-2xl font-light font-openSans`}
							>
								<a href={`#${link.id}`}>{link.title}</a>
							</li>
						);
					})}
				</ul>
				<div className='md:hidden flex'>
					<img
						src={toggle ? menu : close}
						alt='menu'
						onClick={() => {
							setToggle((prev) => !prev);
						}}
						className='w-[40px] h-[40px] object-contain'
					/>
					<div
						className={`${
							toggle ? 'hidden' : 'flex'
						} px-10 py-6 mx-8 my-4 top-20 right-4 bg-ghosty border-pink border absolute z-[50] rounded-xl sidebar`}
					>
						<ul>
							{navLinks.map((link, index) => {
								return (
									<li
										key={link.id}
										className={`${
											index !== navLinks.length - 1
												? 'mb-4'
												: 'mb-0'
										} text-2xl font-light font-openSans`}
									>
										<a
											href={`#${link.id}`}
											onClick={() => {
												setToggle((prev) => !prev);
											}}
										>
											{link.title}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
