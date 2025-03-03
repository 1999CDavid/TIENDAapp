import React from "react";
import Img1 from "../../assets/Women/women.png";
import Img2 from "../../assets/Women/women2.jpg";
import Img3 from "../../assets/Women/women3.jpg";
import Img4 from "../../assets/Women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const Products = () => {
  const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Women Ethnic",
      rating: 5.0,
      color: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Women western",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Goggles",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "Printed T-Shirt",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
    {
      id: 5,
      img: Img2,
      title: "Fashin T-Shirt",
      rating: 4.5,
      color: "Pink",
      aosDelay: "800",
    },
  ];

  return (
    <main className="nt-14 mb-4">
      <section className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Top Selling Products for you</p>
          <h1 className="text-3xl font-bold dark:text-white">Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* body section */}
        <span>
          <span className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {ProductsData.map((data) => (
              <span
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <span>
                  <h3 className="font-semibold dark:text-white">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <span className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="dark:text-white">{data.rating}</span>
                  </span>
                </span>
              </span>
            ))}
          </span>
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md dark:text-black">
View All

            </button>
          </div>
        </span>
      </section>
    </main>
  );
};

export default Products;
