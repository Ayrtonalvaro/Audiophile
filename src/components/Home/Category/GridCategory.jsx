import React from 'react'
import CardCategory from './CardCategory'
import headphoneImg from '../../../assets/shared/desktop/image-headphones.png';
import earphonesImg from '../../../assets/shared/desktop/image-earphones.png';
import speakersImg from '../../../assets/shared/desktop/image-speakers.png';

const GridCategory = () => {
  return (
    <div className="md:mt-36 mt-20">
      <div className="grid md:grid-cols-3 justify-center  md:p-20 gap-10">
        <CardCategory urlImg={headphoneImg} title={'headphone'} />
        <CardCategory urlImg={earphonesImg} title={'earphones'} />
        <CardCategory urlImg={speakersImg} title={'speakers'} />
      </div>
    </div>
  );
}

export default GridCategory
