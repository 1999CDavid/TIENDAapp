import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import AOS from 'aos'
import 'aos/dist/aos.css'


const App = () => {
  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:400,
      easing: 'ease-in-sine',
      delay:100,  
    });
    AOS.refresh();
  },[]);
  
  return (
    <main className=' bg-gray-100 dark:bg-gray-950'>
      <Navbar/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
    </main>
  
  )
}

export default App

