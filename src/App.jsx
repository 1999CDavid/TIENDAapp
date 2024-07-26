import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Suscribe from './components/Suscribe/Suscribe'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'


const App = () => {


  const [orderPopup,setOrderPopup]= useState(false);
  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup);
  }

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
    <main className=' bg-gray-100 dark:bg-gray-950 dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products/>
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner/>
      <Suscribe/>
      <Products/>
      <Testimonials/>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </main>
  
  )
}

export default App

