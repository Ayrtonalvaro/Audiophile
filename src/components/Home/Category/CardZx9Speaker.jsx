import React from 'react';
import speakerImg from '../../../assets/home/desktop/image-speaker-zx9.png';
import ButtonSeeProduct from '../ButtonSeeProduct';
import checkMark from '../../../assets/shared/desktop/check-mark.svg';
const CardZx9Speaker = ({ info }) => {
  const { heading, description, slug } = info;
  
  return (
    <div className="lg:mt-10 md:mx-20 mx-5  ">
      <div
        className='
        bg-orange-500 
        opacity-90 
        2xl:max-h-full
        lg:px-40 
        rounded-md 
        pt-36 
        relative
        flex
        lg:bg-[url("/src/assets/home/desktop/pattern-circles.svg")]
        md:bg-[url("/src/assets/home/desktop/pattern-circles.svg")]
        bg-[url("/src/assets/home/desktop/pattern-circles.svg")]
        md:bg-cover
        md:bg-center
        bg-center
        bg-no-repeat
        lg:flex-row
        md:flex-col
        lg:justify-center
        lg:gap-20
        md:items-center
        md:mr-20
        flex-col
        items-center
        mt-20
        pb-20
        '
      >
        <div>
          <img
            src={speakerImg}
            alt="speaker_img"
            className="lg:w-full md:w-52 w-40"
          />
        </div>
        <div className="lg:w-96 flex flex-col items-center justify-center md:w-96 md:flex md:flex-col md:items-center lg:items-start ">
          <h2 className="text-white  sm:text-8xl md:w-76 text-6xl uppercase text-center lg:text-start   font-bold mt-10 ">
            {heading}
          </h2>
          <p className="text-white px-10 mt-10 text-center md:text-center lg:text-start ">
            {description}
          </p>
          <ButtonSeeProduct textColor="white" bgColor="bg-black" borderColor="none" slug={slug}/>
        </div>
      </div>
    </div>
  );
};

export default CardZx9Speaker;
