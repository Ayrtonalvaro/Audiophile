import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Category/Header'
import { headphonesData } from '../api/headphonesData'
import { headphones } from '../api/headphones'
import ProductInfo from '../components/Category/ProductInfo'
import CategorySection from '../components/Home/Category/CategorySection';
import Shared from '../components/Home/sharedSection/shared'
const Products = () => {
  const { category } = useParams()
  const [productInfo] = useState(headphonesData)
  const [products] = useState(headphones)
  return (
    <div className="h-full">
      <Header title={category} />
      <div className="mt-10 mb-10">
        {
          products.map(product => <ProductInfo key={product.id} productInfo={product}/>)
        }
      </div>
      <CategorySection />
      <Shared />
    </div>
  );
}

export default Products
