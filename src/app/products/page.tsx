"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const product = {
  id: 1,
  name: "Havic HV G-92 Gamepad",
  price: 192.0,
  description:
    "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.",
  images: ["/sp1.png", "/sp2.png", "/sp3.png"],
  reviews: 150,
  inStock: true,
  colors: ["#ffffff", "#ff0000"],
  sizes: ["XS", "S", "M", "L", "XL"],
};

const relatedProducts = [
  {
    id: 2,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    images: ["/fs1.png", "/fs1.png", "/fs1.png"],
    description: "A high-quality wired gamepad with precision controls.",
    discount: 40,
    reviews: 88,
  },
  {
    id: 3,
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    images: ["/fs2.png", "/fs2.png", "/fs2.png"],
    description: "Mechanical keyboard with RGB lighting and tactile feedback.",
    discount: 25,
    reviews: 75,
  },
  {
    id: 4,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    images: ["/fs3.png", "/fs3.png", "/fs3.png"],
    description: "Ultra-smooth 144Hz gaming monitor with vibrant colors.",
    discount: 30,
    reviews: 99,
  },
  {
    id: 5,
    name: "RGB Liquid CPU Cooler",
    price: 160,
    oldPrice: 170,
    images: ["/bs3.png", "/bs3.png", "/bs3.png"],
    description: "Efficient cooling system with customizable RGB lighting.",
    discount: 6,
    reviews: 65,
  },
];

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [clickProduct, setclickedProduct] = useState<{
    image: string;
    name: string;
    description: string;
    price: number;
    reviews: number;
    images: string[];
  } | null>(null);

  const getImage = (src: string) => {
    return src || "/fallback-image.png";
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-4">
        Account / Gaming / <span className="font-bold">{product.name}</span>
      </p>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Product Images */}
        <div>
          <Image
            src={getImage(clickProduct ? clickProduct.image : selectedImage)}
            alt={clickProduct ? clickProduct.name : product.name}
            width={500}
            height={500}
            className="w-fit h-80 object-cover rounded-lg"
          />
          <div className="flex mt-4 space-x-2">
            {(clickProduct ? clickProduct.images : product.images).map(
              (image, index) => (
                <Image
                  key={index}
                  src={getImage(image)}
                  alt={`Thumbnail ${index}`}
                  width={500}
                  height={500}
                  className={`w-fit h-20 object-cover rounded-lg cursor-pointer ${
                    selectedImage === image
                      ? "border-2 border-blue-500 bg-blue-100"
                      : "border"
                  }`}
                  onClick={() => setSelectedImage(image)}
                />
              )
            )}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold">
            {clickProduct ? clickProduct.name : product.name}
          </h1>
          <p className="text-gray-600 mt-2">
            {clickProduct ? clickProduct.description : product.description}
          </p>
          <p className="text-lg font-bold mt-4">
            $
            {clickProduct
              ? clickProduct.price.toFixed(2)
              : product.price.toFixed(2)}
          </p>
          <p className="text-sm mt-2 text-green-600">
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>
          <p className="text-sm text-gray-500">
            {clickProduct ? clickProduct.reviews : product.reviews} Reviews
          </p>

          {/* Colors */}
          <div className="mt-4">
            <h3 className="font-bold">Colours:</h3>
            <div className="flex space-x-2 mt-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-full border ${
                    selectedColor === color
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-4">
            <h3 className="font-bold">Size:</h3>
            <div className="flex space-x-2 mt-2">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? "bg-red-500 text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buy Now */}
          <Link href="/cart">
            <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
              Buy Now
            </button>
          </Link>
        </div>
      </div>

      {/* Related Items */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Items</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow-md hover:shadow-lg"
              onClick={() =>
                setclickedProduct({
                  image: item.images[0],
                  name: item.name,
                  description: item.description,
                  price: item.price,
                  reviews: item.reviews,
                  images: item.images,
                })
              }
            >
              <Image
                src={getImage(item.images[0])}
                alt={item.name}
                height={500}
                width={500}
                className="w-fit h-40 object-cover mx-auto rounded-lg"
              />
              <h3 className="text-sm font-bold mt-2">{item.name}</h3>
              <p className="text-gray-500 line-through">
                {item.oldPrice && `$${item.oldPrice}`}
              </p>
              <p className="text-red-500 font-bold">${item.price}</p>
              <p className="text-sm text-gray-500">{item.reviews} Reviews</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
