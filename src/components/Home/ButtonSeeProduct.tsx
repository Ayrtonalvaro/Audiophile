import React from 'react'

const ButtonSeeProduct = ({bgColor, textColor}) => {
  
  return (
    <>
      <button
        className={`${bgColor} text-${textColor} border border-black opacity-90 p-2 px-5 uppercase text-sm mt-5`}
      >
        see product
      </button>
    </>
  );
}

export default ButtonSeeProduct;
