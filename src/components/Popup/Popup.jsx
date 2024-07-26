import React from "react";
import { IoCloseOutline } from "React-icons/io5";

const Popup = ({orderPopup,setOrderPopup}) => {
  return <>
    {
      orderPopup && <div className="popup">
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm ">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            <header className="flex items-center justify-between">
              <section>
                <h1>Order Now</h1>
              </section>
              <section>
                <IoCloseOutline className="text-2xl cursor-pointer" onClick={()=>setOrderPopup(false)}/>
              </section>
            </header>
            <body>
              <input type="text" placeholder="Name" className="w-full rounded-full border border-gray-300 dark:border-gray-500 
              dark:bg-gray-800 px-2 py-1 mb-4 "/>
              <input type="email" placeholder="Email" className="w-full rounded-full border border-gray-300 dark:border-gray-500 
              dark:bg-gray-800 px-2 py-1 mb-4 "/>
              <input type="text" placeholder="Address" className="w-full rounded-full border border-gray-300 dark:border-gray-500 
              dark:bg-gray-800 px-2 py-1 mb-4 "/>
            </body>
            <span className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md dark:text-black">
                Order Now
              </button>
            </span>

          </div>

        </div>

      </div>
    }
  </>;
};

export default Popup;
