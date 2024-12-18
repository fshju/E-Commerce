"use client";
import { useState } from "react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";


import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [heartCount, setHeartCount] = useState(0);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleHeartClick = () => {
    setHeartCount(heartCount + 1);
  };
  return (
    <div>
      <div className="xl:flex xl:gap-36 flex xl:pl-28 xl:my-8 xl:justify-normal justify-between">
        <h1 className="font-bold text-xl p-5 xl:p-0 hover:text-red-600">Exclusive</h1>
        <button
          className="xl:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-gray-600 text-2xl px-3">☰</span>
        </button>
        <ul className="hidden xl:flex xl:gap-10 xl:pl-28">
          <li>
            <Link href="/" onClick={handleMenuItemClick}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={handleMenuItemClick}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={handleMenuItemClick}>
              About
            </Link>
          </li>
          <li>
            <Link href="/signup" onClick={handleMenuItemClick}>
              Sign Up
            </Link>
          </li>
        </ul>
        <div className="hidden xl:flex">
          <input
            type="text"
            className="xl:w-64 pl-3 xl:pr-4 border-2 bg-gray-50 focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="What are you looking for?"
          />
          <CiSearch className="size-5 relative right-8 top-1  " />
          <div className="flex relative top-0.5 gap-5 ">
            <button onClick={handleHeartClick}>
              <CiHeart className="size-7" />
              {heartCount > 0 && (
                <span className="absolute top-0 left-4 text-sm bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                  {heartCount}
                </span>
              )}
            </button>

            <RiShoppingCart2Line className="size-6" />
            <FiUser className="size-6" />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="xl:hidden bg-black text-white shadow-sm font-semibold ">
          <div className="flex flex-col items-center p-4 space-y-4 ">
            <Link
              href="/"
              onClick={handleMenuItemClick}
              className="hover:text-yellow-600 hover:scale-110 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/contact"
              onClick={handleMenuItemClick}
              className="hover:text-yellow-600 hover:scale-110 transition duration-300"
            >
              Contact
            </Link>
            <Link
              href="/about"
              onClick={handleMenuItemClick}
              className="hover:text-yellow-600 hover:scale-110 transition duration-300"
            >
              About
            </Link>
            <Link
              href="/signup"
              onClick={handleMenuItemClick}
              className="hover:text-yellow-600 hover:scale-110 transition duration-300"
            >
              Signup
            </Link>
            <div className="flex gap-5 start">
              <Link href="/login" onClick={handleMenuItemClick}>
                <span className="hover:text-blue-400 hover:scale-110 transition duration-300">
                  <FiUser className="text-blue-800 size-5" />
                </span>
              </Link>
              <button onClick={handleMenuItemClick}>
                <button onClick={handleSearchToggle}>
                  <span className="hover:text-purple-400 hover:scale-110 transition duration-300 ">
                    <CiSearch className="text-purple-600 size-5" />
                  </span>
                </button>
              </button>
              <button onClick={handleMenuItemClick}>
                <button onClick={handleHeartClick}>
                  <div className="relative">
                    <CiHeart className="opacity-70 text-red-600 size-5" />
                    {heartCount > 0 && (
                      <span className="absolute top-0 right-0 text-sm bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                        {heartCount}
                      </span>
                    )}
                  </div>
                </button>
              </button>

              <Link href="/cart" onClick={handleMenuItemClick}>
                <span className="hover:text-orange-400 hover:scale-110 transition duration-300">
                  <RiShoppingCart2Line className="text-orange-600 size-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {isSearchOpen && (
        <div className="w-full bg-white shadow-sm p-4 flex justify-between items-center border-t-2 border-gray-200">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full 2xl:w-1/2 border border-gray-300 p-2"
          />

          <button onClick={handleSearchToggle} className="text-gray-600">
            <CiSearch className="text-xl " />
          </button>
        </div>
      )}

      <hr />
    </div>
  );
};
export default Header;

// import React from "react";
// import Link from "next/link";
// // components/Navbar.js
// export const Header = () => {
//     const categories = [
//       "Women's Fashion",
//       "Men's Fashion",
//       "Electronics",
//       "Home & Garden",
//       "Medicine",
//       "Sports & Outdoors",
//       "Baby's & Toys",
//       "Groceries & Pets",
//       "Health & Beauty"
//     ];

//     return (
//       <nav className="bg-white shadow-md">
//         <div className="container mx-auto">
//           <ul className="flex flex-col">
//             {categories.map((category) => (
//               <li key={category} className="py-2 px-4 hover:bg-gray-100">

//                   {category}

//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//     );
//   };
