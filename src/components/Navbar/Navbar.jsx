import React from "react";
import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import Darkmode from "./Darkmode";

const Navbar = ({handleOrderPopup}) => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 3,
      name: "Mens Wear",
      link: "/#",
    },
    {
      id: 3,
      name: "Electronics",
      link: "/#",
    },
  ];
  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];
  return (
    <main
      className="shadow-md bg-white dark:bg-gray-900 dark:text-white 
    duration-200 relative z-40"
    >
      <section className="bg-primary/40 py-2">
        <nav className="container flex justify-between items-center">
          {/*caja de navegacion parte superior izquierda */}
          <span className="flex items-center justify-center">
            <a
              className="font-bold text-2xl sm:text-xs flex items-center gap-2"
              href="#"
            >
              <img className="w-10" src={logo} alt="Logo" />
              <span className="Lowercase">Colombia Store</span>
            </a>
          </span>

          {/* caja de navegacion parte superior centro-derecha */}
          <span className="flex justify-between items-center gap-4">
            {/* caja de busqueda e icono buscar */}
            <span className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] 
                    group-hover:w-[300px] transition-all duration-300 rounded-full
                    border border-gray-300 px-2 py-1 focus:outline-none
                    focus:border-1 focus:border-primary text-black dark:border-gray-500
                    dark:bg-gray-700 dark:text-white"
              />
              <IoMdSearch
                className="text-gray-500 group-hover:text-primary
              absolute top-1/2 -translate-y-1/2 right-3 "
              />
            </span>
            <span>
              <button
                onClick={()=> handleOrderPopup()}
                className="bg-gradient-to-r from-primary to-secundary
              transition-all duration-200 text-white py-1 px-4 rounded-full
              flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200 dark:text-black">
                  Order
                </span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer dark:text-black" />
              </button>
            </span>
            {/* Darkmode switch */}
            <span>
              <Darkmode />
            </span>
          </span>
        </nav>
      </section>

      <section>
        <nav className="">
          <span className="flex justify-center">
            <ul className="sm:flex hidden  items-center gap-4">
              {Menu.map((data) => (
                <li key={data.id}>
                  <a
                    className="inline-block px-4 hover:text-primary duration-200 "
                    href="#"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              <li className="group relative cursor-pointer">
                <a href="" className="flex items-center gap-[2px] py-2 hover:text-primary">
                  Trending Products
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <span className="absolute z-[9999] hidden
                group-hover:block w-[150px] rounded-md bg-white
                p-2 text-black shadow-md">
                  <ul>
                    {DropdownLinks.map((datos) => (
                      <li key={datos.id}>
                        <a href={datos.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20 " >{datos.name}</a>
                      </li>
                    ))}
                  </ul>
                </span>
              </li>
            </ul>
          </span>
        </nav>
      </section>
    </main>
  );
};

export default Navbar;
