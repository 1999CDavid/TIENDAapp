import React from "react";
import logo from "../../assets/logo.png";
import Banner from "../../assets/Tema/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <main style={BannerImg} className="text-white">
      <footer className="container">
        <div className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Company details */}
          <section className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={logo} alt="Logo" className="max-w-[100px]" />
              Colombia Store
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id a
              aliquid vel explicabo, animi enim repellat officia fugit ut
              voluptatem.
            </p>
          </section>

          {/* Footer Links */}
          <section data-aos="zoom-in" className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                    Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/*Social links*/}
            <div>
                <div className="flex items-center gap-3 mt-6">
                    <a href="#">
                        <FaInstagram className="text-3xl"/>   
                    </a>
                    <a href="#">
                        <FaFacebook className="text-3xl"/> 
                    </a>
                    <a href="#">
                        <FaLinkedin className="text-3xl"/> 
                    </a>
                </div>
                <div className="mt-6">
                    <div className="flex items-center gap-3">
                        <FaLocationArrow/>
                        <p>UB, Gibtdal Pradesh</p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                        <FaMobileAlt/>
                        <p>+ 57 123 456 785</p>
                    </div>
                </div>
            </div>
          </section>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
