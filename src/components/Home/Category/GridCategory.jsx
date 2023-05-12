import React from 'react'
import CardCategory from './CardCategory'


const GridCategory = () => {
  return (
    <div className='md:mt-36 mt-20'>
      <div className="grid md:grid-cols-3 justify-center  md:p-20 gap-10">
        <CardCategory />
        <CardCategory />
        <CardCategory />
      </div>
    </div>
  );
}

export default GridCategory
