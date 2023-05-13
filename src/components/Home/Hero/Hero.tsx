import React, { useEffect, useState } from 'react'
import ButtonSeeProduct from '../ButtonSeeProduct';
import { home }from '../../../api/home'

const Hero = () => {
  const [heroData, setHeroData] = useState(home.hero);
  const {heading, description, subHeading } = heroData;
  
  return (
    <div
      className='
      w-full 
      h-screen 
      lg:bg-[url("/src/assets/home/desktop/image-hero.jpg")]
      md:bg-[url("/src/assets/home/tablet/image-header.jpg")]
      bg-[url("/src/assets/home/mobile/image-header.jpg")]
      bg-no-repeat
      bg-cover
      bg-center'
    >
      <div className="flex flex-col items-center lg:items-start lg:px-48 justify-center h-full text-white  ">
        <div className=" lg:w-96">
          <h3
            className="
            text-center
            text-4xl  
            uppercase 
            text-gray-500 
            tracking-widest 
            lg:text-xl 
            lg:font-sm 
            lg:text-start
            "
          >{subHeading}</h3>
          <h1 className="text-center text-6xl font-bold mt-5 uppercase lg:text-start">
            {heading}
          </h1>
          <p className="text-center text-slate-300 mt-5 text-xl lg:text-start">
            {description}
          </p>
          <div className="flex justify-center lg:justify-start">
            <ButtonSeeProduct textColor="white" bgColor="bg-orange-500" borderColor="none"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
