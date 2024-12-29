import React from "react";
import Image from "next/image";
const wishlist = () => {
  const wishproduct = [
    {
      id: "1",
      name: "Gucci duffle bag",
      price: "$960",
      originalPrice: "$1160",
      rating: 4.8,
      reviews: 65,
      image: "/bs2.png",
    },
    {
      id: "2",
      name: "RGB liquid CPU Cooler",
      price: "$160",
      originalPrice: "$170",
      rating: 4.7,
      reviews: 65,
      image: "/bs3.png",
    },
    {
      id: "3",
      name: "GP11 Shooter USB Gamepad",
      price: "$660",
      rating: 4.5,
      reviews: 55,
      image: "/ep7.png",
    },
    {
      id: "4",
      name: "Quilted Satin Jacket",
      price: "$660",
      rating: 4.5,
      reviews: 55,
      image: "/ep8.png",
    },
  ];

  const foryou = [
    {
      id: 1,
      name: "ASUS FHD Gaming Laptop",
      price: "$700",
      rating: 4.5,
      reviews: 325,
      image: "/ep3.png",
      isNew: false,
    },
    {
      id: 2,
      name: "IPS LCD Gaming Monitor",
      image: "/fs3.png",
      reviews: 35,
      discount: "-30%",
      price: "$370",
      oldPrice: "$400",
      rating: 99,
    },
    {
      id: 3,
      name: "HAVIT HV-G92 Gamepad",
      image: "/fs1.png",
      reviews: 32,
      discount: "-40%",
      price: "$120",
      oldPrice: "$160",
      rating: 88,
    },
    {
      id: 4,
      name: "AK-900 Wired Keyboard",
      image: "/fs2.png",
      reviews: 25,
      discount: "-35%",
      price: "$60",
      oldPrice: "$90",
      rating: 75,
    },
  ];
  return (
    <div>
      <div className=" sm:flex mx-auto sm:justify-between">
        <h1 className="text-3xl font-bold my-16  text-center  sm:text-left sm:pl-36">
          Wishlist
        </h1>
        <button className="mr-44 my-14 px-12 border border-black hover:text-white hover:bg-black sm:block hidden ">
          Move All To Bag
        </button>
      </div>
      <div className=" px-12 space-y-4 sm:grid grid-cols-2  lg:flex gap-6 justify-center ">
        {wishproduct.slice().map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
              Add To Cart
            </button>
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-red-500 text-lg font-bold">{product.price}</p>
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`${
                      index < Math.floor(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-2">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>
        ))}
        <div className=" text-center">
          <button className="mt-14 py-2 px-12 border border-black hover:text-white hover:bg-black  sm:hidden ">
            Move All To Bag
          </button>
        </div>
      </div>
      <br />
      <br />
      <div className=" sm:flex mx-auto sm:justify-between">
        <h1 className="text-3xl font-bold my-16  text-center  sm:text-left sm:pl-36">
          Just For You
        </h1>
        <button className="mr-44 my-14 px-12 border border-black hover:text-white hover:bg-black sm:block hidden ">
          See All
        </button>
      </div>
      <div className=" px-12 space-y-4 sm:grid grid-cols-2  lg:flex gap-6 justify-center mb-28 ">
        {foryou.slice().map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
              Add To Cart
            </button>
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-red-500 text-lg font-bold">{product.price}</p>
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`${
                      index < Math.floor(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-2">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>
        ))}
        <div className=" text-center">
          <button className="mt-14 py-2 px-20 border border-black hover:text-white hover:bg-black  sm:hidden ">
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default wishlist;
