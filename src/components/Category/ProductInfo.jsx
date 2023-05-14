import React from 'react'
import ButtonSeeProduct from '../Home/ButtonSeeProduct'
import { Link } from 'react-router-dom'
const ProductInfo = ({productInfo}) => {
  const {name, description, category,slug} = productInfo
  console.log(slug)
  return (
    <div
      className="
      lg:grid 
      lg:grid-cols-2 
      lg:justify-center  
      lg:items-center 
      lg:p-20
      mt-10
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
        <img
          className="w-48 md:w-96 lg:w-[600px] rounded-lg"
          src={`${productInfo.image.desktop}`}
          alt={`${name}`}
        />
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <h5 className="text-orange-600 text-center lg:text-start uppercase text-xl tracking-widest  ">
          New product
        </h5>
        <h2 className="md:text-6xl text-4xl text-center md:text-start  uppercase">
          {name}
        </h2>
        <h2 className="md:text-6xl text-center lg:text-start text-4xl uppercase">
          {category}
        </h2>
        <p className="text-slate-500 md:px-10 text-center  lg:text-start lg:px-0 lg:pr-52 lg:text-lg">
          {description}
        </p>
        
          <ButtonSeeProduct
            bgColor="bg-orange-400"
            textColor="white"
            borderColor="none"
            slug={slug}
          />
        
      </div>
    </div>
  );
}

export default ProductInfo
