import React from 'react'
import { Link } from 'react-router-dom';
import inconArrowRight from '../../../assets/shared/desktop/icon-arrow-right.svg'
const CardCategory = ({urlImg, title}) => {
  return (
    <div
      className="
      flex 
      flex-col 
      justify-center 
      items-center 
      bg-gray-100 
      relative 
      md:pt-32 
      md:pb-5 
      lg:mx-20 
      rounded-md"
    >
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

      <div className="cursor-pointer hover:scale-110 duration-300 ">
        <Link to={`/products/${title}`} className="flex items-center gap-2 ">
          <span className="text-slate-300 hover:text-orange-400 duration-300 uppercase text-sm  ">
            Shop
          </span>
          <img src={inconArrowRight} alt="img-arrow" />
        </Link>
      </div>
    </div>
  );
}

export default CardCategory
