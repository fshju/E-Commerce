import React from "react";
import Link from "next/link";
const about = () => {
  return (
    <div>
      <div className="lg:py-14 py-1 ">
        <div className="flex gap-2 lg:pl-20 p-5 ">
          <Link href="/">
            <button className="opacity-50 hover:opacity-100">Home</button>
          </Link>
          <span className="opacity-30">/</span>
          <button className="cursor-pointer">Contact</button>
        </div>
      </div>
      <div className="lg:flex lg:justify-between lg:items-center grid">
        <div className="lg:w-1/2  py-5 px-4 lg:pl-20 lg:px-24">
          <h1 className="text-5xl text-center lg:text-left py-6">Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
            <br />
            <br />
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div>
          <img src="about-hero.png" alt="model" className="sm:w-full" />
        </div>
      </div>
      <div className="container mx-auto px-4 py-28 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center justify-center">
          <div className="flex flex-col items-center justify-center p-6 hover:bg-red-500 bg-white hover:text-white text-black border-gray-300 rounded-lg shadow-md">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077976.png"
                alt="Icon"
                className="w-6 h-6"
              />
            </div>
            <h2 className="text-xl font-bold mt-3">10.5k</h2>
            <p className="text-sm text-center mt-1">Sellers active our site</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 hover:bg-red-500 bg-white hover:text-white text-black rounded-lg shadow-md">
            <div className="w-12 h-12 flex items-center justify-center  bg-white rounded-full ">
              <img
                src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
                alt="Icon"
                className="w-6 h-6"
              />
            </div>
            <h2 className="text-xl font-bold mt-3">33k</h2>
            <p className="text-sm text-center mt-1">Monthly Product Sale</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 hover:bg-red-500 bg-white hover:text-white text-black border-gray-300 rounded-lg shadow-md">
            <div className="w-12 h-12 flex items-center justify-center  bg-white rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
                alt="Icon"
                className="w-6 h-6 "
              />
            </div>
            <h2 className="text-xl font-bold mt-3">45.5k</h2>
            <p className="text-sm text-center mt-1">
              Customer active in our site
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 hover:bg-red-500 bg-white hover:text-white text-black border-gray-300 rounded-lg shadow-md">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077977.png"
                alt="Icon"
                className="w-6 h-6"
              />
            </div>
            <h2 className="text-xl font-bold mt-3">25k</h2>
            <p className="text-sm text-center mt-1">
              Annual gross sale in our site
            </p>
          </div>
        </div>
      </div>
      <div className="sm:flex gap-6 justify-center text-center">
        <div>
          <img src="about1.png" alt="person1" className="py-5" />
          <p>Tom Cruise</p>
          <p>Founder & Chairman</p>
        </div>
        <div>
          <img src="about2.png" alt="person2" className="py-5" />
          <p>Emma Watson</p>
          <p>Managing Director</p>
        </div>
        <div>
          <img src="about3.png" alt="person3" className="py-5" />
          <p>Will Smith</p>
          <p>Product Designer</p>
        </div>
        <br />
      </div>

      <div className="container mx-auto px-6 py-12 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-200">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png"
                alt="Delivery"
                className="w-10 h-10"
              />
            </div>
            <h2 className="text-lg font-bold mt-4">FREE AND FAST DELIVERY</h2>
            <p className="text-gray-600 mt-2">
              Free delivery for all orders over $140
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-200">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5975/5975478.png"
                alt="Customer Service"
                className="w-10 h-10"
              />
            </div>
            <h2 className="text-lg font-bold mt-4">24/7 CUSTOMER SERVICE</h2>
            <p className="text-gray-600 mt-2">Friendly 24/7 customer support</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-200">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                alt="Money Back"
                className="w-10 h-10"
              />
            </div>
            <h2 className="text-lg font-bold mt-4">MONEY BACK GUARANTEE</h2>
            <p className="text-gray-600 mt-2">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
