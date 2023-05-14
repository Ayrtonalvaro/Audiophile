import React from 'react';
import img1 from '../../assets/product-xx59-headphones/desktop/image-gallery-1.jpg';
import img2 from '../../assets/product-xx59-headphones/desktop/image-gallery-2.jpg';
import img3 from '../../assets/product-xx59-headphones/desktop/image-gallery-3.jpg';

const GirdImg = ({ gallery }) => {
  const { first, second, third } = gallery;
  return (
    <div className="mt-10 lg:px-48 px-10">
      <div className=" grid lg:grid-cols-2 justify-center lg:mr-36  ">
        <div className="flex flex-col gap-9 items-start ">
          <img className="rounded-md" src={first.desktop} />
          <img className="rounded-md" src={second.desktop} />
        </div>
        <div className="justify-start mt-10 lg:mt-0">
          <img className="rounded-md" src={third.desktop} />
        </div>
      </div>
    </div>
  );
};

export default GirdImg;
