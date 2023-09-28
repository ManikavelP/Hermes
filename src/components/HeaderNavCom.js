import React, { useState } from 'react';
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"


function HeaderNavCom() { 
  const [menuVisible, setMenuVisible] = useState(false);

  const onToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className=" grid gap-4 text-white ">
      <nav className="flex justify-between items-center w-[93%] py-3">
        <div>
          <p className="w-16 cursor-pointer text-white font-bold text-3xl pl-5">Hermes</p>
        </div>
        <div className={`nav-links duration-500 md:static absolute  md:min-h-fit min-h-[60vh] left-0 ${menuVisible ? 'top-[9%] bg-[white] text-black' : '-top-full'} md:w-auto w-full flex items-center  px-5`}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[2.5vw] gap-4">
            <li>
              <a className="hover:text-gray-400 " href="index.html">Home</a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="index.html">AboutUs</a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="index.html">BookingTermes</a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="index.html">Flight</a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="index.html">GetInTouch</a>
            </li>
          

            
        </ul>
        </div>
        <div className=" items-center gap-6 ">
          <a href="index.html" className="border-[2px] px-3 py-2 rounded-lg border-white hover:bg-blue-500 hover:text-white bg-yellow-200 transition-colors ease-linear text-blue-400 ">Sign in</a>
          <div className="text-3xl cursor-pointer md:hidden " onClick={onToggleMenu}>
          {menuVisible ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderNavCom;
