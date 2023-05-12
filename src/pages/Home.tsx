import React, { useState, useEffect } from 'react'
import Hero from '../components/Home/Hero/Hero'
import { homeData } from '../api/homeData';
import GridCategory from '../components/Home/Category/GridCategory';
const Home = () => {
  const [dataHome, setDataHome] = useState([{}]); 

  useEffect(() => {
  homeData().then((data) => setDataHome(data.hero));
  },[])
  console.log(dataHome)
  return (
    <div>
      <Hero dataHome={dataHome}/>
      <GridCategory />
    </div>
  )
}

export default Home
