import React from 'react'
import img1 from '../../assets/product-xx59-headphones/desktop/image-gallery-1.jpg'
import img2 from '../../assets/product-xx59-headphones/desktop/image-gallery-2.jpg'
import img3 from '../../assets/product-xx59-headphones/desktop/image-gallery-3.jpg';

const GirdImg = () => {
  return (
    <div className="mt-10 px-48 ">
      <div className=" grid grid-cols-2 justify-center mr-36  ">
        <div className="flex flex-col gap-9 items-start ">
          <img className="rounded-md" src={img1} />
          <img className="rounded-md" src={img2} />
        </div>
        <div className='justify-start'>
          <img className="rounded-md"  src={img3} />
        </div>
      </div>
    </div>
  );
}

export default GirdImg
