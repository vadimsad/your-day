import React from 'react';

const Button = (props) => {
	return (
		<button
			type={`${props.type || 'button'}`}
			className={`${
				props.pink
					? 'text-white bg-pink border-white button-pink'
					: 'text-pink bg-white border-pink button'
			} text-[22px] leading-[130%] font-openSans ${
				props.paddingY || 'ss:py-[17px] py-[10px]'
			} px-[48px] border-2 border-solid rounded-[30px] ${props.style}`}
		>
			{props.text}
		</button>
	);
};

export default Button;
