import React, { useState } from 'react'
import ButtonGoBack from '../components/ButtonGoBack';
import Form from '../components/Cheackout/Form';
import Layuout from '../components/Cheackout/Layuout';
import { cart } from '../api/cart';
const Checkout = () => {

  const [products] = useState(cart)
  console.log(products)
  return (
    <div className='bg-slate-50'>
      <Layuout products={products}/>
    </div>
  );
}

export default Checkout
