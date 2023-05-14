import React from 'react'
import { Link } from 'react-router-dom'

const ButtonSeeProduct = ({bgColor, textColor, borderColor, slug}) => {
  
  return (
    <>
      <Link to={`/detail/${slug}`}>
        <button
          className={`${bgColor} text-${textColor} border border-${borderColor} opacity-90 p-2 px-5 uppercase text-sm mt-5`}
        >
          see product
        </button>
      </Link>
    </>
  );
}

export default ButtonSeeProduct;
