import React, { useState } from 'react'
import CardProduct from './CardProduct'

const Summary = ({products}) => {
  
  return (
    <div className="bg-white w-96  p-10 rounded-md">
      <h6 className="uppercase font-bold">Summary</h6>
      <div className="flex flex-col gap-5 mt-5 ">
        {products.map((product) => {
          return <CardProduct key={product.id} prodcut={product} />;
        })}
      </div>
      <div className="mt-10 flex flex-col gap-2">
        <div className="flex justify-between">
          <h6 className="font-light text-slate-400 uppercase">Total</h6>
          <p className="font-bold">$ 100</p>
        </div>
        <div className="flex justify-between">
          <h6 className="font-light text-slate-400 uppercase">Shippign</h6>
          <p className="font-bold">Free</p>
        </div>
        <div className="flex justify-between">
          <h6 className="font-light text-slate-400 uppercase">Vat(include)</h6>
          <p className="font-bold">$ 100</p>
        </div>
        <div className="flex justify-between">
          <h6 className="font-light text-slate-400 uppercase">Grand</h6>
          <p className="font-bold">$ 100</p>
        </div>
        <button className='uppercase bg-orange-400 p-3 mt-5 text-white'>Continue & pay</button>
      </div>

    </div>
  );
}

export default Summary
