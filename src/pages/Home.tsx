import React, { useState, useEffect } from 'react'
import Hero from '../components/Home/Hero/Hero'
import CategorySection from '../components/Home/Category/CategorySection';
import ModelSection from '../components/Home/Category/ModelSection';
const Home = () => {
  return (
    <div>
      <Hero />
      <CategorySection />
      <ModelSection />
    </div>
  )
}

export default Home
