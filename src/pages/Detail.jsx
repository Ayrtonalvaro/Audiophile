import React, { useState } from 'react';
import SharedSection from '../components/Home/sharedSection/shared';
import GridCategory from '../components/Home/Category/GridCategory';
import InfoProdcut from '../components/Detail/infoProduct';
import DetailProduct from '../components/Detail/DetailProduct';
import GirdImg from '../components/Detail/GirdImg';
import { productsData } from '../api/productsData';
import { useParams } from 'react-router-dom';
const Detail = () => {
  const { slug } = useParams();
  const [products] = useState(productsData);
  const [productFilter] = useState(
    products.filter((product) => product.slug === slug)
  );

  const { name,  price, description, category, features} = productFilter[0]
  const urlImg = productFilter[0].image.desktop
  const accessories = productFilter[0].includes
  const gallery = productFilter[0].gallery
  return (
    <div className="bg-slate-50">
      <InfoProdcut 
        name={name} 
        category={category} 
        description={description}
        urlImg={urlImg} 
        price={price}/>
      <DetailProduct features={features} accesories={accessories} />
      <GirdImg gallery={gallery}/>
      <GridCategory />
      <SharedSection />
    </div>
  );
};

export default Detail;
