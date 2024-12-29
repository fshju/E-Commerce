import React from "react";

const CheckoutPage: React.FC = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto bg-white p-6 shadow-md sm:my-20">
         <div className="mb-6">
          <p className="text-sm text-gray-600">
            Account / My Account / Product / View Cart /
            <span className="text-black font-medium">Checkout</span>
          </p>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Billing  */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  placeholder="Company Inc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Street Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  placeholder="123 Main Street"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Apartment, floor, etc. (optional)
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  placeholder="Apartment 1A"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Town/City<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  placeholder="City Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  placeholder="123-456-7890"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="inline-flex items-center mt-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-red-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Save this information for faster checkout next time
                  </span>
                </label>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-gray-50 p-4 rounded shadow-md">
              <h2 className="font-semibold text-lg mb-4">Your Order</h2>
              <div className="border-b mb-4">
                <div className="flex justify-between mb-2">
                  <p className="text-gray-700">LCD Monitor</p>
                  <p className="text-gray-700">$650</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p className="text-gray-700">H1 Gamepad</p>
                  <p className="text-gray-700">$1100</p>
                </div>
              </div>
              <div className="border-b mb-4">
                <div className="flex justify-between mb-2">
                  <p className="text-gray-700">Subtotal:</p>
                  <p className="text-gray-700">$1750</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p className="text-gray-700">Shipping:</p>
                  <p className="text-gray-700">Free</p>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <p>Total:</p>
                  <p>$1750</p>
                </div>
              </div>

              {/* Payment Options */}
              <div className="mb-4">
                <p className="font-semibold mb-2">Payment Method</p>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="payment"
                    className="mr-2"
                  />
                  <label className="text-sm">Bank</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    className="mr-2"
                  />
                  <label className="text-sm">Cash on Delivery</label>
                </div>
              </div>

              {/* Coupon Section */}
              <div className="flex items-center mb-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="w-full border border-gray-300 p-2 rounded-l"
                />
                <button className="bg-red-500 text-white px-4 py-2 rounded-r">
                  Apply Coupon
                </button>
              </div>

              <button className="w-full bg-red-500 text-white py-2 rounded">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;