import React from 'react';
import ButtonGoBack from '../ButtonGoBack';
import Form from './Form';
import Summary from './Summary';
const Layuout = ({products}) => {
  return (
    <div>
      <div
        className="
      lg:grid 
      lg:grid-cols-3 
      lg:justify-center  
      lg:items-center 
      lg:p-20
      mt-28
      "
      >
        <div
          className="
        flex-col 
        flex 
        items-center 
        rouded-md 
        md:justify-center 
        md:items-center
        lg:col-span-2"
        >
          <div>
            <ButtonGoBack />
            <Form />
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <Summary products={products} />
        </div>
      </div>
    </div>
  );
};

export default Layuout;
