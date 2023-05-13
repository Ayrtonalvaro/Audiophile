import React from 'react'

import inconArrowRight from '../../../assets/shared/desktop/icon-arrow-right.svg'
const CardCategory = ({urlImg, title}) => {
  return (
    <div className="
      flex 
      flex-col 
      justify-center 
      items-center 
      bg-gray-100 
      relative 
      md:pt-32 
      md:pb-5 
      lg:mx-20 
      rounded-md">
      <img
        className="w-72  -top-96 md:absolute lg:-top-32 md:-top-24"
        src={urlImg}
        alt="headphone"
      />
      <h5
        className="uppercase font-bold
      "
      >
        {title}
      </h5>
      <div className='flex items-center gap-2'>
        <span className="text-slate-300 hover:text-orange-400 duration-300 uppercase text-sm cursor-pointer ">Shop</span>
        <img src={inconArrowRight} alt='img-arrow' />
      </div>
    </div>
  );
}

export default CardCategory
