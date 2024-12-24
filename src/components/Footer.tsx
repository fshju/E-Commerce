
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="justify-center text-center sm:justify-normal sm:text-left pt-10">
      <footer className="bg-black text-white pt-16 pb-6 ">
        <div className="container mx-auto pl-4 md:pl-0  grid grid-cols-1 md:grid-cols-4 gap-8 ">
          <div>
            <h3 className="text-xl font-bold mb-4">Exclusive</h3>
            <p className="mb-4">Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className="flex pt-3 justify-center text-center ">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 rounded-l"
              />
              <button className="bg-red-500 px-4 rounded-r">Subscribe</button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>111 Bijoy sarani, Dhaka</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/account">My Account</Link>
              </li>
              <li>
                <Link href="/login">Login / Register</Link>
              </li>
              <li>
                <Link href="/cart">Cart</Link>
              </li>
              <li>
                <Link href="/wishlist">Wishlist</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Use</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto mt-8 pt-8 border-t border-gray-800">
          <div className="flex justify-center items-center">
            <p>© 2024 Exclusive. All rights reserved.</p>
            <div className="flex gap-4">
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
