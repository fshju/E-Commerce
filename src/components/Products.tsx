"use client";
import Image from "next/image";
import React, { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  isNew: boolean;
};

const allProducts: Product[] = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: "$100",
    rating: 4,
    reviews: 35,
    image: "/ep1.png",
    isNew: false,
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: "$360",
    rating: 5,
    reviews: 95,
    image: "/ep2.png",
    isNew: false,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: "$700",
    rating: 4.5,
    reviews: 325,
    image: "/ep3.png",
    isNew: false,
  },
  {
    id: 4,
    name: "Kids Electric Car",
    price: "$960",
    rating: 5,
    reviews: 65,
    image: "/ep5.png",
    isNew: true,
  },
  {
    id: 5,
    name: "Jr. Zoom Soccer Cleats",
    price: "$1160",
    rating: 4.2,
    reviews: 35,
    image: "/ep6.png",
    isNew: true,
  },
  {
    id: 6,
    name: "GP11 Shooter USB Gamepad",
    price: "$660",
    rating: 4.5,
    reviews: 55,
    image: "/ep7.png",
    isNew: true,
  },
  {
    id: 7,
    name: "Quilted Satin Jacket",
    price: "$660",
    rating: 4.5,
    reviews: 55,
    image: "/ep8.png",
    isNew: false,
  },
  {
    id: 8,
    name: "The north coat",
    price: "$260",
    rating: 4.5,
    reviews: 65,
    image: "/bs1.png",
    isNew: false,
  },
  {
    id: 9,
    name: "Gucci duffle bag",
    price: "$960",
    rating: 4.8,
    reviews: 65,
    image: "/bs2.png",
    isNew: false,
  },
  {
    id: 10,
    name: "RGB liquid CPU Cooler",
    price: "$160",
    rating: 4.7,
    reviews: 65,
    image: "/bs3.png",
    isNew: false,
  },
  {
    id: 11,
    name: "Small BookShelf",
    price: "$360",
    rating: 4.6,
    reviews: 65,
    image: "/bs4.png",
    isNew: false,
  },
];

const Products: React.FC = () => {
  const [visibleProducts, setVisibleProducts] = useState<number>(8);

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold text-red-500">Our Products</h2>
        <h1 className="text-3xl font-bold mb-8">Explore Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.slice(0, visibleProducts).map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="relative">
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200} 
                  height={200} 
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
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
              <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                Add To Cart
              </button>
            </div>
          ))}
        </div>

        {visibleProducts < allProducts.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMoreProducts}
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
