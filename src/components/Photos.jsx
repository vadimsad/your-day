import React from 'react';
import { case1, case2, case3, case4, case5, case6, curveRightBottom } from '../assets';

const Photos = () => {
  return (
    <section className='mt-[146px] mlg:px-0 px-[15px] sm:gap-0 gap-[15px]'>
      <div className='flex justify-around sm:flex-row flex-col sm:flex-none flex-auto sm:gap-0 gap-[20px] sm:mb-0 mb-[20px]'>
        <div className='sm:mr-[75px] mr-0'>
          <img src={case1} alt="event photo" className='sm:mx-0 mx-auto'/>
        </div>
        <div className='sm:mr-[124px] mr-0'>
          <img src={case2} alt="event photo" className='sm:mx-0 mx-auto' />
          <img src={curveRightBottom} alt="photo decoration" className='sm:block hidden relative w-[27.3%] -scale-x-100 rotate-[11deg] mlg:-top-[118px] -top-[35%] bottom-0 right-0 -left-[30px]' />
        </div>
        <div className='self-end relative sm:flex-initial flex-auto sm:w-auto w-full'>
          <img src={case3} alt="event photo" className='sm:mx-0 mx-auto' />
          <img src={curveRightBottom} alt="photo decoration" className='sm:block hidden absolute w-[41%] -scale-y-100 -top-[28px] -rotate-[7deg] bottom-0 -right-[10px]' />
        </div>
      </div>

      <div className='flex sm:flex-row flex-col sm:gap-0 gap-[20px]'>
        <div className='self-center sm:mr-[45px] mr-0 relative'>
          <img src={case4} alt="event photo" className='mlg:rounded-[50px] rounded-[3.472vw] rotate-[6.45deg]' />
          <img src={curveRightBottom} alt="photo decoration" className='sm:block hidden absolute w-[45%] rotate-[9deg] mlg:-top-[10px] -right-[24px] -top-[10px] -scale-y-100' />
        </div>
        <div className='sm:mr-[98px] mr-0 relative'>
          <img src={case5} alt="event photo" className='' />
          <img src={curveRightBottom} alt="photo decoration" className='sm:block hidden absolute w-[13.57%] -rotate-[9deg] bottom-[17px] -right-[35px]' />
        </div>
        <div className='self-center relative'>
          <img src={case6} alt="event photo" className='mlg:rounded-[50px] rounded-[3.472vw] rotate-[8.81deg]' />
          <img src={curveRightBottom} alt="photo decoration" className='sm:block hidden absolute w-[36%] rotate-[9deg] -top-[33px] -left-[5px] -scale-100' />
        </div>
      </div>
    </section>
  )
}

export default Photos