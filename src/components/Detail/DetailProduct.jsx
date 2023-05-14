import React from 'react';

const DetailProduct = ({features, accesories}) => {
  return (
    <div className="lg:px-20">
      <div className="lg:px-28 lg:grid lg:grid-cols-2 gap-10 mt-10">
        <div className="text-center lg:text-start">
          <h2 className="text-3xl font-bold uppercase">Features</h2>
          <p className="mt-10 text-slate-500">{features}</p>
        </div>
        <div className="mt-10">
          <h2 className="text-3xl font-bold uppercase text-center lg:text-start">
            In the box
          </h2>
          <div className="flex flex-col items-center lg:items-start gap-5 mt-10 font-semibold text-sm">
            {accesories.map((accesories) => {
              return (
                <div className="flex gap-10">
                  <p className="text-orange-400">{accesories.quantity}</p>
                  <p className="text-slate-500">{accesories.item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
