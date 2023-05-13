import React, { useEffect, useState } from 'react';
import CardZx9Speaker from './CardZx9Speaker';
import CardZx7Speaker from './CardZx7Speaker'
import { home } from '../../../api/home';
import GridYx1Earphones from './GridYx1Earphones';
const ModelSection = () => {
  const [data] = useState(home);
  
  return (
    <div className="lg:mt-10 lg:px-40">
      <CardZx9Speaker info={data.sectionTwo} />
      <CardZx7Speaker  info={data.sectionThree}/>
      <GridYx1Earphones info={data.sectionFour}/>
    </div>
  );
};

export default ModelSection;
