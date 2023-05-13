import React from 'react'

const Header = ({title}) => {
  return (
    <div className="flex justify-center items-center bg-black w-full md:pt-64 ">
      <div className="bg-black w-full h-56 md:pt-5 pt-28">
        <h1 className="uppercase text-white text-5xl font-bold text-center">
          {title}
        </h1>
      </div>
    </div>
  );
}

export default Header
