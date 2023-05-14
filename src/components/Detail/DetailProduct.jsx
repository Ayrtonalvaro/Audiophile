import React from 'react';

const DetailProduct = () => {
  return (
    <div className="lg:px-20">
      <div className="lg:px-28 lg:grid lg:grid-cols-2 gap-10 ">
        <div className="">
          <h2 className="text-3xl font-bold uppercase">Features</h2>
          <p className="mt-10 text-slate-500">
            These headphones have been created from durable, high-quality
            materials tough enough to take anywhere. Its compact folding design
            fuses comfort and minimalist style making it perfect for travel.
            Flawless transmission is assured by the latest wireless technology
            engineered for audio synchronization with videos.More than a simple
            pair of headphones, this headset features a pair of built-in
            microphones for clear, hands-free calling when paired with a
            compatible smartphone. Controlling music and calls is also intuitive
            thanks to easy-access touch buttons on the earcups. Regardless of
            how you use the XX59 headphones, you can do so all day thanks to an
            impressive 30-hour battery life that can be rapidly recharged via
            USB-C,
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold uppercase">In the box</h2>
          <div className='flex flex-col gap-5 mt-10 font-semibold text-sm'>
            <div className="flex gap-10">
              <p className="text-orange-400">1x</p>
              <p className="text-slate-500">Headphone Unit</p>
            </div>
            <div className=" flex gap-10">
              <p className="text-orange-400">1x</p>
              <p className="text-slate-500">Headphone Unit</p>
            </div>
            <div className=" flex gap-10">
              <p className="text-orange-400">2x</p>
              <p className="text-slate-500">Headphone Unit</p>
            </div>
            <div className="flex gap-10">
              <p className="text-orange-400">1x</p>
              <p className="text-slate-500">Headphone Unit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
