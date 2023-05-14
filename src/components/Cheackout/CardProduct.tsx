import React from 'react';

const CardProduct = ({ prodcut }) => {
  const { displayName, quantity, price, image } = prodcut;
  console.log(prodcut);
  return (
    <div className="flex gap-5 justify-between ">
      <div className="flex gap-5">
        <img className="rounded-md w-20" src={image} />
        <div className="flex gap-1 flex-col">
          <h3 className="text-black font-bold">{displayName}</h3>
          <p className="text-slate-400">${price}</p>
        </div>
      </div>

      <div>
        <p className="text-slate-400">x{quantity}</p>
      </div>
    </div>
  );
};

export default CardProduct;
