"use client";
import Category from "@/components/Category";
import Products from "@/components/Products";
import ProductSlider from "@/components/ProductSlider";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
const Home = () => {
  const slides = [
    {
      title: "iPhone 14 Series",
      description: "Up to 10% off Voucher",
      image: "/hero.png",
    },
    {
      title: "MacBook Pro",
      description: "Save Big on Latest Models",
      image: "/mackbookpro.jpg",
    },
    {
      title: "AirPods Max",
      description: "Experience True Sound",
      image: "/airpodmax5.jpg",
    },
  ];
  const products = [
    {
      id: 1,
      title: "PlayStation 5",
      description: "Black and White version of the PS5 coming out on sale.",
      image: "/na1.png",
      link: "#",
      span: "col-span-2 row-span-2",
    },
    {
      id: 2,
      title: "Women's Collections",
      description: "Featured woman collections that give you another vibe.",
      image: "/na2.png",
      span: "col-span-2",
    },
    {
      id: 3,
      title: "Speakers",
      description: "Amazon wireless speakers.",
      image: "/na3.png",
    },
    {
      id: 4,
      title: "Perfume",
      description: "GUCCI INTENSE OUD EDP.",
      image: "/na4.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div>
      <div className="sm:flex">
        {/* Sidebar */}
        <ul className="sm:w-[30%] sm:pl-24 pl-5 pt-14 space-y-5">
          <li className="flex font-medium">
            Woman&apos;s Fashion
            <IoIosArrowForward className="my-0.5  size-5" />
          </li>
          <li className="flex font-medium">
            Men&apos;s Fashion <IoIosArrowForward className="my-0.5  size-5" />
          </li>
          <li className="font-medium">Electronics</li>
          <li className="font-medium">Home & Lifestyle</li>
          <li className="font-medium">Medicine</li>
          <li className="font-medium">Sports & Outdoor</li>
          <li className="font-medium">Baby&apos;s & Toys</li>
          <li className="font-medium">Groceries & Pets</li>
          <li className="font-medium">Health & Beauty</li>
        </ul>

        {/* Hero Section with Slider */}
        <div className="relative sm:w-[67%] bg-black mt-14 overflow-hidden">
          {/* Slide Content */}
          <div className="text-white  sm:flex sm:flex-col items-start justify-center px-10 sm:py-28 py-12   grid mb-52 sm:my-0">
            <h2 className=" text-4xl font-semibold z-20">
              {slides[currentSlide].title}
            </h2>
            <p className="text-lg mt-2 z-20">
              {slides[currentSlide].description}
            </p>
            <button className="z-20 mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Shop Now →
            </button>
          </div>

          {/* Slide Image */}
          <Image
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            width={580}
            height={700}
            className="absolute bottom-0 right-0   transition-all duration-500 "
          />

          {/* Dots for Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full cursor-pointer ${
                  index === currentSlide ? "bg-red-500" : "bg-gray-500"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <ProductSlider />
      <Category />
      <Products />
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h3 className="text-red-500 font-semibold text-lg">Featured</h3>
            <h2 className="text-3xl font-bold">New Arrival</h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className={`relative overflow-hidden rounded-lg shadow-lg ${
                  product.span || "col-span"
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="w-full h-fit"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
                  <h3 className="font-bold text-lg">{product.title}</h3>
                  <p className="text-sm mb-4">{product.description}</p>
                  <a
                    href={product.link}
                    className="bg-white text-black px-4 py-2 w-fit rounded font-semibold hover:bg-gray-200"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default Home;
