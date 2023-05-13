import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Category/Header';
import { speakers } from '../api/speakres';
import { headphones } from '../api/headphones';
import { earphones } from '../api/earphones';
import ProductInfo from '../components/Category/ProductInfo';
import CategorySection from '../components/Home/Category/CategorySection';
import Shared from '../components/Home/sharedSection/shared';
const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category === 'speakers') {
      setProducts(speakers);
    } 
    if (category === 'headphones') {
      setProducts(headphones);
    } 
    if( category === 'earphones') {
      setProducts(earphones)
    }
  }, [category]);

  return (
    <div className="h-full">
      <Header title={category} />
      <div className="mt-10 mb-10">
        {products.map((product) => (
          <ProductInfo key={product.id} productInfo={product} />
        ))}
      </div>
      <CategorySection />
      <Shared />
    </div>
  );
};

export default Products;
