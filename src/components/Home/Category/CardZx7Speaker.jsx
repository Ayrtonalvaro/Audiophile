import React from 'react';
import ButtonSeeProduct from '../ButtonSeeProduct';

const CardZx7Speaker = ({ info }) => {
  const { heading } = info;
  return (
    <div
      className=' 
      lg:h-96
      h-96
      mt-20
      mx-5 
      lg:flex
      lg:px-20
      items-center
      md:bg-[url("/src/assets/home/desktop/image-speaker-zx7.jpg")]
      bg-[url("/src/assets/home/mobile/image-speaker-zx7.jpg")]    
      md:bg-cover
      bg-right-bottom
      md:bg-top
      rounded-md'
    >
      <div className="pt-20 pl-10 lg:pl-0">
        <h2 className="text-xl md:text-5xl lg:text-6xl uppercase font-bold">{heading}</h2>
        <ButtonSeeProduct />
      </div>
    </div>
  );
};

export default CardZx7Speaker;
