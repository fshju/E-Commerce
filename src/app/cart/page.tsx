import React from "react";
import Image from "next/image";
import Link from "next/link";
const CartPage: React.FC = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto bg-white p-6 shadow-md sm:my-20">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/" className="text-sm text-gray-600">
            Home / <span className="text-black font-medium">Cart</span>
          </Link>
        </div>

        {/* Cart Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Product</th>
              <th className="text-left py-2">Price</th>
              <th className="text-left py-2">Quantity</th>
              <th className="text-left py-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-4 flex items-center">
                <Image
                  src="/fs3.png"
                  alt="LCD Monitor"
                  width={500}
                  height={500}
                  className="w-16 h-16 mr-4"
                />
                <p>LCD Monitor</p>
              </td>
              <td className="py-4">$650</td>
              <td className="py-4">
                <select className="border border-gray-300 rounded p-1">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>
              </td>
              <td className="py-4">$650</td>
            </tr>
            <tr className="border-b">
              <td className="py-4 flex items-center">
                <Image src="/fs1.png"
                alt="Gamepad"
                width={500}
                height={500}
                className="w-16 h-16 mr-4" />
                <p>H1 Gamepad</p>
              </td>
              <td className="py-4">$550</td>
              <td className="py-4">
                <select className="border border-gray-300 rounded p-1">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>
              </td>
              <td className="py-4">$1100</td>
            </tr>
          </tbody>
        </table>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button className="text-sm bg-gray-100 px-4 py-2 rounded">
            Return to Shop
          </button>
          <button className="text-sm bg-gray-100 px-4 py-2 rounded">
            Update Cart
          </button>
        </div>

        {/* Coupon and Cart Total */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Coupon Code"
                className="w-full border border-gray-300 p-2 rounded-l"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded-r">
                Apply Coupon
              </button>
            </div>
          </div>

          {/* Cart Total */}
          <div className="bg-gray-50 p-4 mt-10 rounded shadow-md border border-black">
            <h2 className="font-semibold text-lg mb-4">Cart Total</h2>
            <div className="flex justify-between mb-2">
              <p>Subtotal:</p>
              <p>$1750</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <p>Total:</p>
              <p>$1750</p>
            </div>
            <Link href="/billing">
            <button className="w-full bg-red-500 text-white mt-4 py-2 rounded">
              Proceed to Checkout
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
