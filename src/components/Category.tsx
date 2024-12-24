
import Image from "next/image";
export default function Category() {
  const categories = [
    { name: "Phones", icon: "/bc1.png" },
    { name: "Computers", icon: "/bc2.png" },
    { name: "SmartWatch", icon: "/bc3.png" },
    { name: "Camera", icon: "/cameraa.png" },
    { name: "HeadPhones", icon: "/bc5.png" },
    { name: "Gaming", icon: "/bc6.png" },
  ];

  const products = [
    {
      name: "The north coat",
      price: "$260",
      originalPrice: "$360",
      rating: 4.5,
      reviews: 65,
      image: "/bs1.png",
    },
    {
      name: "Gucci duffle bag",
      price: "$960",
      originalPrice: "$1160",
      rating: 4.8,
      reviews: 65,
      image: "/bs2.png",
    },
    {
      name: "RGB liquid CPU Cooler",
      price: "$160",
      originalPrice: "$170",
      rating: 4.7,
      reviews: 65,
      image: "/bs3.png",
    },
    {
      name: "Small BookShelf",
      price: "$360",
      rating: 4.6,
      reviews: 65,
      image: "/bs4.png",
    },
  ];

  return (
    <div className="py-12 px-4 md:px-8 lg:px-16">
      {/* Browse by Category */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-red-500">Categories</h2>
        <h1 className="text-2xl font-bold mb-16">Browse By Category</h1>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-8 border rounded-lg sm:flex sm:flex-col sm:items-center sm:w-[190px] w-32 cursor-pointer bg-white text-black hover:text-white hover:bg-red-500`}
            >
              <Image
                src={category.icon}
                alt={category.name}
                width={200}
                height={200}
                className="h-8 w-8   mx-auto  mix-blend-multiply"
              />
              <p className="mt-2 text-sm font-medium justify-center text-center">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <hr className="mb-14" />

      {/* Best Selling Products */}
      <div>
        <div className="flex justify-between items-center ">
          <h2 className="text-lg font-semibold text-red-500">This Month</h2>
          <button className="text-red-500 border border-red-500 sm:py-2 sm:px-4 hidden md:block rounded hover:bg-red-500 hover:text-white">
            View All
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-16">Best Selling Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex flex-col hover:shadow-lg"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="h-40 w-full object-cover mb-4 bg-gray-100"
              />
              <h3 className="font-medium text-lg">{product.name}</h3>
              <div className="flex items-center gap-2 text-red-500 mt-2">
                <span className="font-semibold">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    {product.originalPrice}
                  </span>
                )}
              </div>
              <div className="mt-2 flex items-center">
                <div className="text-yellow-500 flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={
                        i < Math.round(product.rating) ? "currentColor" : "none"
                      }
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.91-.64L12 2 8.91 8.6 2 9.24l5.46 4.73L5.82 21z"
                      />
                    </svg>
                  ))}
                </div>
                <p className="ml-2 text-sm text-gray-500">
                  ({product.reviews} reviews)
                </p>
              </div>
            </div>
          ))}
          <button className="text-red-500 border border-red-500 py-2 px-4 sm:hidden rounded hover:bg-red-500 hover:text-white">
            View All
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />

      
      <div className="bg-black h-auto sm:h-96 text-white sm:flex  ">
        <div className="sm:pl-20 pl-5">
          <button className="font-semibold text-green-500 pb-3 py-24">
            Categories
          </button>
          <h1 className="font-semibold text-5xl pb-3">
            Enhance Your <br /> Music Experience
          </h1>
          <button className="py-2 px-4 bg-green-500">Buy Now!</button>
        </div>
        <div>
          <Image
            src="/speaker.hero.png"
            alt="hero2"
            width={200}
            height={200}
            className="w-[400px] sm:ml-40 pt-11"
          />
        </div>
      </div>
      <br />
    </div>
  );
}
