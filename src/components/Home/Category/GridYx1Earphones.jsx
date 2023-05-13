import React from 'react'
import earphonesImg from '../../../assets/home/desktop/image-earphones-yx1.jpg'
import ButtonSeeProduct from '../ButtonSeeProduct'
const GridYx1Earphones = ({info}) => {
  const {heading} = info
  return (
    <div className='mt-20 px-5 gap-10 grid grid-cols-1 md:grid-cols-2 items-center lg:px-7'>
      <div>
        <img className='rounded-md' src={earphonesImg} alt='earphones_img' />
      </div>
      <div className='md:bg-gray-100 bg-gray-200 h-full pt-20 pl-8 pb-8 lg:pt-36 lg:px-36 rounded-md'>
        <h2 className='text-4xl uppercase font-bold'>{heading}</h2>
        <ButtonSeeProduct />
      </div>
    </div>
  )
}

export default GridYx1Earphones
