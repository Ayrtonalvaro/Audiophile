import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero/Hero'
import { homeData } from '../api/homeData';
const Home = () => {
  const [dataHome, setDataHome] = useState([{}]); 

  useEffect(() => {
  homeData().then((data) => setDataHome(data.hero));
  },[])
  console.log(dataHome)
  return (
    <div>
      <Hero dataHome={dataHome}/>
    </div>
  )
}

export default Home
