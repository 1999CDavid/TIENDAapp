import React from 'react'
import tema from '../../assets/Tema/orange-pattern.jpg'

const BannerImg={
    backgroundImage:`url(${tema})`,
    backgroundPosition: "center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",
}

const Suscribe = () => { 
  
    return (
    <main
        style={BannerImg}
        data-aos="zoom-in" className="mb-gray-100 bg-gray-100 dark:bg-gray-800 text-white mb-12">    
        <section className='container backdrop-blur-sm py-10'>
            <div className='space-y-6 max-w-xl mx-auto'>
                <h1 className='text-2
                 !text-center sm:text-left sm-text-4xl font-semibold '>Get Notified About New Products</h1>
                 <input 
                 data-aos="fade-up"
                 type="text"
                 placeholder='Enter your email'
                 className='w-full p-3 text-black  dark:border-gray-500
                 dark:bg-gray-700 dark:text-white'
                 />
            </div>
        </section>
    </main>
  );
}

export default Suscribe