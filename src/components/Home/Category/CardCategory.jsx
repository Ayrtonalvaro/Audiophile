import React from 'react'
import headphoneImg from '../../../assets/shared/desktop/image-headphones.png'
import inconArrowRight from '../../../assets/shared/desktop/icon-arrow-right.svg'
const CardCategory = () => {
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
      sm:w-96 
      lg:mx-20 
      rounded-md">
      <img
        className="w-72   md:absolute lg:-top-32 md:-top-24"
        src={headphoneImg}
        alt="headphone"
      />
      <h5
        className="uppercase font-bold
      "
      >
        Headpones
      </h5>
      <div className='flex items-center gap-2'>
        <span className="text-slate-300 uppercase text-sm">Shop</span>
        <img src={inconArrowRight} alt='img-arrow' />
      </div>
    </div>
  );
}

export default CardCategory
