import React, { useState, useEffect } from 'react'
import Hero from '../components/Home/Hero/Hero'
import CategorySection from '../components/Home/Category/CategorySection';
import ModelSection from '../components/Home/Category/ModelSection';
import SharedSection from '../components/Home/sharedSection/shared';
const Home = () => {
  return (
    <div >
      <Hero />
      <CategorySection />
      <ModelSection />
      <SharedSection />
    </div>
  );
}

export default Home
