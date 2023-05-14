import React from 'react'
import SharedSection from '../components/Home/sharedSection/shared';
import GridCategory from '../components/Home/Category/GridCategory'
import InfoProdcut from '../components/Detail/infoProduct'
;
import DetailProduct from '../components/Detail/DetailProduct';
import GirdImg from '../components/Detail/GirdImg';

const Detail = () => {
  return (
    <div className=''>
      <InfoProdcut />
      <DetailProduct />
      <GirdImg />
      <GridCategory />
      <SharedSection />
    </div>
  )
}

export default Detail
