import React, { useEffect, useState } from 'react'
import CardZx9Speaker from './CardZx9Speaker';
import { home } from '../../../api/home';
const ModelSection = () => {

  const [data] = useState(home)
  console.log(data.sectionTwo);
  return (
    <div className="lg:mt-10 lg:px-40">
      <CardZx9Speaker info={data.sectionTwo}/>
    </div>
  );
}

export default ModelSection
