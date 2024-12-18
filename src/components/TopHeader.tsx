"use client";
import { useState } from "react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const TopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="flex justify-center bg-black text-white text-sm p-3 ">
        <div className="sm:flex justify-between gap-5 lg:pr-36">
          <p className=" lg:pl-64">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <div className="flex items-end justify-end ">
            <a href="#" className=" mr-4 underline flex ">
              Shop Now
            </a>

            <div className="relative flex items-center xl:pl-64">
              <span>English</span>
              <IoIosArrowDown
                className="ml-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
              {isOpen && (
                <div className="absolute z-20 top-full mt-3 bg-white text-black border rounded shadow-lg">
                  <ul>
                    <li
                      className="hover:bg-gray-200 px-4 py-2 cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Urdu
                    </li>
                    <li
                      className="hover:bg-gray-200 px-4 py-2 cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Hindi
                    </li>
                    <li
                      className="hover:bg-gray-200 px-4 py-2 cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      French
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopHeader;
