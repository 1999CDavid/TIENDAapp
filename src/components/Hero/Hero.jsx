import React from "react";
import imagen1 from "../../assets/Hero/imagen1.png";
import imagen2 from "../../assets/Hero/imagen2.png";
import imagen3 from "../../assets/Hero/imagen3.png";
import Slider from "react-slick";

const Hero = () => {
  
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  const ImageList = [
    {
      id: 1,
      img: imagen1,
      title: "Upto 50% off on all Men's Wear",
      description:
        "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: imagen2,
      title: "30% off on all Women's Wear",
      description:
        "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: imagen3,
      title: "70% off on all Products Sale",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <main
      className="relative overflow-hidden min-h-[550px]
    sm:min-h-[650px]  flex justify-center
    items-center dark:text-white duration-200 "
    >
      <section
        className="h-[700px] w-[700px] bg-primary/40  
      absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-0"
      ></section>

      <section className="container pb-8 sm:pb-0 relative z-20">
        <Slider {...settings} className="cursor-pointer">
          {ImageList.map((data)=>(
             
          <span>
            <span className="grid grid-cols-1 sm:grid-cols-2">
              {/* columna del texto */}
              <span
                className="flex flex-col justify-center gap-4
            pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10"
              >
                <h1 
                data-aos='zoom-out'
                data-aos-duration='500'
                data-aos-once='true'
                className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                  {data.title}
                </h1>
                <p 
                data-aos='fade-up'
                data-aos-duration='500'
                data-aos-delay='100'
                className="text-sm">
                  {data.description}
                </p>

                <span>
                  <button
                    onClick={() => alert("Ordering not available yet")}
                    className="bg-gradient-to-r from-primary to-secundary
                  hover:scale-105 duration-200 text-white py-1 px-4 rounded-full dark:text-black"
                  >
                    Order Now
                  </button>
                </span>
              </span>

              {/* columna de la imagen */}
              <span className="order-1 sm:order-2">
                <span className="relative  z-10" 
                data-aos='zoom-in'
                data-aos-once='true'
                >
                  <img
                    src={data.img}
                    alt="img1"
                    className="w-[300px] h-[300px] sm:h-[450px]
          sm:w-[450px] sm:scale-125 lg:scale-125 object-contain mx-auto"
                  />
                </span>
              </span>
            </span>
          </span>
          ))}
        </Slider>
      </section>
    </main>
  );
};

export default Hero;
