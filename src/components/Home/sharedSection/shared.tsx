import React, { useState } from 'react';
import { sharedData } from '../../../api/sharedData'

const shared = () => {
  const [info]  = useState(sharedData);
  const {heading, description} = info;
  
  return (
    <div className="mt-10 pb-20 lg:pb-52 mx-5 md:flex md:flex-col md:items-center lg:mt-24  lg:flex-row-reverse lg:px-40">
      <img
        className="rounded-lg"
        src="../../../assets/shared/desktop/image-best-gear.jpg"
        alt="shared-img"
      />
      <div className="mt-5 md:px-10">
        <div className="uppercase text-3xl font-bold text-center lg:text-start">
          <h2>{heading.prefix}</h2>
          <span className="mr-2 text-orange-400">{heading.highlight}</span>
          {heading.suffix}
        </div>
        <p className="text-center text-slate-400 mt-5 lg:text-start lg:pr-40">
          {description}
        </p>
      </div>
    </div>
  );
};

export default shared;
