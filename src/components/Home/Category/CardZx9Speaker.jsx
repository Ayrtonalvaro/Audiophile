import React from 'react';
import speakerImg from '../../../assets/home/desktop/image-speaker-zx9.png';
import ButtonSeeProduct from '../ButtonSeeProduct';
import checkMark from '../../../assets/shared/desktop/check-mark.svg';
const CardZx9Speaker = ({ info }) => {
  const { heading, description } = info;
  return (
    <div className="lg:mt-10 md:mx-20">
      <div
        className='
        bg-orange-500 
        opacity-90 
        w-full 
        px-40 
        rounded-md 
        pt-36 
        relative
        flex
        lg:bg-[url("/src/assets/home/desktop/pattern-circles.svg")]
        md:bg-[url("/src/assets/home/desktop/pattern-circles.svg")]
        md:bg-cover
        md:bg-center
        bg-no-repeat
        lg:justify-center
        lg:gap-60
        md:flex-col
        md:items-center
        md:mr-20
        '
      >
        <div>
          <img src={speakerImg} alt="speaker_img" className="w-96 md:w-52" />
        </div>
        <div className="w-96  md:flex md:flex-col md:items-center ">
          <h2 className="text-white md:w-80 text-6xl uppercase text-center  w-20 font-bold mt-10">
            {heading}
          </h2>
          <p className="text-white mt-10 md:text-center">{description}</p>
          <ButtonSeeProduct textColor="white" bgColor="bg-black" />
        </div>
      </div>
    </div>
  );
};

export default CardZx9Speaker;
