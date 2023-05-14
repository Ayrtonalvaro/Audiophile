import React from 'react'
import ButtonSeeProduct from '../Home/ButtonSeeProduct'
import { Link } from 'react-router-dom'
import Counter from './Counter';
import ButtonAddCart from './ButtonAddCart';
import ButtonGoBack from '../ButtonGoBack';
const infoProduct = ({name, category, description, price, urlImg}) => {
  return (
    <div
      className="
      lg:grid 
      lg:grid-cols-2 
      lg:justify-center  
      lg:items-center 
      lg:p-20
      mt-28
      "
    >
      <div
        className="
        flex-col 
        flex 
        items-center 
        rouded-md 
        md:justify-center 
        md:items-center"
      >
        <div>
          <ButtonGoBack />
          <img
            className="w-48 md:w-96 lg:w-[600px] rounded-lg"
            src={urlImg}
            alt={name}
          />
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="md:text-6xl text-4xl text-center md:text-start  uppercase">
          {name}
        </h2>
        <h2 className="md:text-6xl text-center lg:text-start text-4xl uppercase">
          {category}
        </h2>
        <p className="text-slate-500 md:px-10 text-center  lg:text-start lg:px-0 lg:pr-52 lg:text-lg">
          {description}
        </p>
        <p className='mt-5 text-xl font-bold'>${price}</p>
        <div className='flex gap-5 items-center mt-10'>
          <Counter />
          <ButtonAddCart />
        </div>
      </div>
    </div>
  );
}

export default infoProduct
