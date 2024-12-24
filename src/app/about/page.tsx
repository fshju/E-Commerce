import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import Image from "next/image";
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
            Launced in 2015, Exclusive is South Asia premier online shopping
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
          <Image
            src="/about-hero.png"
            alt="model"
            width={500}
            height={500}
            className="sm:w-full"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 py-28 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center justify-center">
          <div className="flex flex-col items-center justify-center p-6 hover:bg-red-500 bg-white hover:text-white text-black border-gray-300 rounded-lg shadow-md">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full ">
              <Image
                src="/ab1.png"
                alt="Icon"
                width={500}
                height={500}
                className="w-6 h-6"
              />
            </div>
            <h2 className="text-xl font-bold mt-3">10.5k</h2>
            <p className="text-sm text-center mt-1">Sellers active our site</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 hover:bg-red-500 bg-white hover:text-white text-black rounded-lg shadow-md">
            <div className="w-12 h-12 flex items-center justify-center  bg-white rounded-full ">
              <Image
                src="/ab2.png"
                alt="Icon"
                width={500}
                height={500}
                className="w-6 h-6"
              />
            </div>
            <h2 className="text-xl font-bold mt-3">33k</h2>
            <p className="text-sm text-center mt-1">Monthly Product Sale</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 hover:bg-red-500 bg-white hover:text-white text-black border-gray-300 rounded-lg shadow-md">
            <div className="w-12 h-12 flex items-center justify-center  bg-white rounded-full">
              <Image
                src="/ab3.png"
                alt="Icon"
                width={500}
                height={500}
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
              <Image
                src="/ab4.png"
                alt="Icon"
                width={500}
                height={500}
                className="w-6 h-6"
              />
            </div>
            <h2 className="text-xl font-bold mt-3 ">25k</h2>
            <p className="text-sm text-center mt-1">
              Annual gross sale in our site
            </p>
          </div>
        </div>
      </div>
      <div className="sm:flex gap-6 justify-center text-center">
        <div>
          <Image
            src="/about1.png"
            alt="person1"
            width={500}
            height={500}
            className="py-5 w-full"
          />
          <p>Tom Cruise</p>
          <p>Founder & Chairman</p>
          <div className="flex gap-3 justify-center pt-2 ">
            <CiTwitter className="size-5" />
            <FaInstagram className="size-5" />
            <FaLinkedinIn className="size-5" />
          </div>
        </div>
        <div>
          <Image
            src="/about2.png"
            alt="person2"
            width={500}
            height={500}
            className="py-5 w-full"
          />
          <p>Emma Watson</p>
          <p>Managing Director</p>
          <div className="flex gap-3 justify-center pt-2">
            <CiTwitter className="size-5" />
            <FaInstagram className="size-5" />
            <FaLinkedinIn className="size-5" />
          </div>
        </div>
        <div>
          <Image
            src="/about3.png"
            alt="person3"
            width={500}
            height={500}
            className="py-5 w-full"
          />
          <p>Will Smith</p>
          <p>Product Designer </p>
          <div className="flex gap-3 justify-center pt-2">
            <CiTwitter className="size-5" />
            <FaInstagram className="size-5" />
            <FaLinkedinIn className="size-5" />
          </div>
        </div>
        <br />
      </div>

      <div className="container mx-auto px-6 py-12 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-200">
              <Image
                src="/ab5.png"
                alt="Delivery"
                width={500}
                height={500}
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
              <Image
                src="/ab6.png"
                alt="Customer Service"
                width={500}
                height={500}
                className="w-10 h-10"
              />
            </div>
            <h2 className="text-lg font-bold mt-4">24/7 CUSTOMER SERVICE</h2>
            <p className="text-gray-600 mt-2">Friendly 24/7 customer support</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-200">
              <Image
                src="/ab7.png"
                alt="Money Back"
                width={500}
                height={500}
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
