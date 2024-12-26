"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { FaOpencart } from "react-icons/fa";
import { MdCloseFullscreen } from "react-icons/md";

const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    } else {
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }
  };
  
  const ref = useRef();
  
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Image src="/n.png" alt="logo" width={200} height={20} />
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="/bracelets" className="mr-5 hover:text-white">Bracelets</a>
          <a href="/cards" className="mr-5 hover:text-white">Cards</a>
          <a href="/sneakers" className="mr-5 hover:text-white">Sneakers</a>
        </nav>
        <button onClick={toggleCart} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          <FaOpencart />
        </button>
        <div ref={ref} className="sideCart absolute top-2 right-2 bg-yellow-500 p-10 transform transition-transform translate-x-full">
          <h2 className="font-bold text-xl font-black">Shopping Cart</h2>
          <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-yellow-100">
            <MdCloseFullscreen />
          </span>
          <ol>
            <li>
              <span>tee</span>
            </li>
          </ol>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
