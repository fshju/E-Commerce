// "use client"
// import Image from "next/image";
// import React, { useState } from "react";

// const products = [
//   {
//     id: 1,
//     name: "HAVIT HV-G92 Gamepad",
//     image: "/fs1.png",
//     discount: "-40%",
//     price: "$120",
//     oldPrice: "$160",
//     rating: 88,
//   },
//   {
//     id: 2,
//     name: "AK-900 Wired Keyboard",
//     image: "/fs2.png",
//     discount: "-35%",
//     price: "$60",
//     oldPrice: "$90",
//     rating: 75,
//   },
//   {
//     id: 3,
//     name: "IPS LCD Gaming Monitor",
//     image: "/fs3.png",
//     discount: "-30%",
//     price: "$370",
//     oldPrice: "$400",
//     rating: 99,
//   },
//   {
//     id: 4,
//     name: "S-Series Comfort Chair",
//     image: "/fs4.png",
//     discount: "-25%",
//     price: "$375",
//     oldPrice: "$400",
//     rating: 99,
//   },
//   {
//     id: 5,
//     name: "Jr. Zoom Soccer Cleats",
//     price: "$1160",
//     rating: 4.2,
//     reviews: 35,
//     image: "/ep6.png",
//     isNew: true,
//   },
//   {
//     id: 6,
//     name: "GP11 Shooter USB Gamepad",
//     price: "$660",
//     rating: 4.5,
//     reviews: 55,
//     image: "/ep7.png",
//     isNew: true,
//   },
//   {
//     id: 7,
//     name: "Quilted Satin Jacket",
//     price: "$660",
//     rating: 4.5,
//     reviews: 55,
//     image: "/ep8.png",
//     isNew: false,
//   },
//   {
//     id: 8,
//     name: "CANON EOS DSLR Camera",
//     price: "$360",
//     rating: 5,
//     reviews: 95,
//     image: "/ep2.png",
//     isNew: false,
//   },
// ];

// const FlashSalesSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerPage = 4;

//   const getItemsPerPage = () => {
//     if (window.innerWidth < 640) return 2;
//     return itemsPerPage;
//   };

//   const handleSlide = (direction: string) => {
//     const items = getItemsPerPage();
//     const totalPages = Math.ceil(products.length / items);

//     if (direction === "left") {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === 0 ? totalPages - 1 : prevIndex - 1
//       );
//     } else {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === totalPages - 1 ? 0 : prevIndex + 1
//       );
//     }
//   };

//   const visibleProducts = products.slice(
//     currentIndex * getItemsPerPage(),
//     currentIndex * getItemsPerPage() + getItemsPerPage()
//   );

//   return (
//     <div className="relative w-full max-w-6xl mx-auto p-6 pt-40">
//       {/* Header */}
//       <div className="mb-6">
//         <h2 className="text-2xl font-bold">
//           <span className="text-red-500">Today&apos;s</span> Flash Sales
//         </h2>
//         <div className="flex space-x-2 mt-2 text-gray-600">
//           <div className="text-center">
//             <p className="font-bold text-lg">03</p>
//             <span>Days</span>
//           </div>
//           <div className="text-center">
//             <p className="font-bold text-lg">23</p>
//             <span>Hours</span>
//           </div>
//           <div className="text-center">
//             <p className="font-bold text-lg">19</p>
//             <span>Minutes</span>
//           </div>
//           <div className="text-center">
//             <p className="font-bold text-lg">56</p>
//             <span>Seconds</span>
//           </div>
//         </div>
//       </div>

//       {/* Slider */}
//       <div className="relative overflow-hidden">
//         <div className={`grid grid-cols-2 md:grid-cols-4 gap-4`}>
//           {visibleProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
//             >
//               <div className="relative">
//                 <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
//                   {product.discount}
//                 </span>
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={200}
//                   height={200}
//                   className="w-48 h-48 object-contain"
//                 />
//                 <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
//                   ♥
//                 </button>
//               </div>
//               <h3 className="mt-4 text-sm font-semibold text-center">
//                 {product.name}
//               </h3>
//               <div className="mt-2 text-center">
//                 <span className="text-red-500 font-bold">{product.price}</span>{" "}
//                 <span className="line-through text-gray-400">
//                   {product.oldPrice}
//                 </span>
//               </div>
//               <div className="mt-2 text-yellow-500 text-sm">
//                 {"★".repeat(5)}{" "}
//                 <span className="text-gray-400">({product.rating})</span>
//               </div>
//               <button className="mt-4 bg-black text-white py-2 px-4 rounded">
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={() => handleSlide("left")}
//         className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
//       >
//         {"<"}
//       </button>
//       <button
//         onClick={() => handleSlide("right")}
//         className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
//       >
//         {">"}
//       </button>

//       {/* View All Products Button */}
//       <div className="mt-10 text-center">
//         <button className="bg-red-500 text-white py-2 px-6 rounded-full">
//           View All Products
//         </button>
//       </div>
//       <br />
//       <br />

//       <hr />
//     </div>
//   );
// };

// export default FlashSalesSlider;

















"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    image: "/fs1.png",
    discount: "-40%",
    price: "$120",
    oldPrice: "$160",
    rating: 88,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    image: "/fs2.png",
    discount: "-35%",
    price: "$60",
    oldPrice: "$90",
    rating: 75,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    image: "/fs3.png",
    discount: "-30%",
    price: "$370",
    oldPrice: "$400",
    rating: 99,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    image: "/fs4.png",
    discount: "-25%",
    price: "$375",
    oldPrice: "$400",
    rating: 99,
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
    name: "CANON EOS DSLR Camera",
    price: "$360",
    rating: 5,
    reviews: 95,
    image: "/ep2.png",
    isNew: false,
  },
];

const FlashSalesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Default to 4
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Update items per page based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2); // Set 2 items per page for mobile
      } else {
        setItemsPerPage(4); // Set 4 items per page for larger screens
      }
    };

    handleResize(); // Call once on mount to set the initial value

    window.addEventListener("resize", handleResize); // Add resize listener
    return () => window.removeEventListener("resize", handleResize); // Clean up on unmount
  }, []);

  const handleSlide = (direction: string) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalPages - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalPages - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const visibleProducts = products.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div className="relative w-full max-w-6xl mx-auto p-6 pt-40">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          <span className="text-red-500">Today&apos;s</span> Flash Sales
        </h2>
        <div className="flex space-x-2 mt-2 text-gray-600">
          <div className="text-center">
            <p className="font-bold text-lg">03</p>
            <span>Days</span>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg">23</p>
            <span>Hours</span>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg">19</p>
            <span>Minutes</span>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg">56</p>
            <span>Seconds</span>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4`}>
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
            >
              <div className="relative">
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {product.discount}
                </span>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-48 h-48 object-contain"
                />
                <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                  ♥
                </button>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-center">
                {product.name}
              </h3>
              <div className="mt-2 text-center">
                <span className="text-red-500 font-bold">{product.price}</span>{" "}
                <span className="line-through text-gray-400">
                  {product.oldPrice}
                </span>
              </div>
              <div className="mt-2 text-yellow-500 text-sm">
                {"★".repeat(5)}{" "}
                <span className="text-gray-400">({product.rating})</span>
              </div>
              <button className="mt-4 bg-black text-white py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => handleSlide("left")}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
      >
        {"<"}
      </button>
      <button
        onClick={() => handleSlide("right")}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
      >
        {">"}
      </button>

      {/* View All Products Button */}
      <div className="mt-10 text-center">
        <button className="bg-red-500 text-white py-2 px-6 rounded-full">
          View All Products
        </button>
      </div>
      <br />
      <br />

      <hr />
    </div>
  );
};

export default FlashSalesSlider;
