import React from "react";
import Link from "next/link";
const contact = () => {
  return (
    <div>
      <div className="flex gap-2 lg:p-8 p-4">
        <Link href="/">
          <button className="opacity-50 hover:opacity-100">Home</button>
        </Link>
        <span className="opacity-30">/</span>
        <button className="cursor-pointer">Contact</button>
      </div>

      <div className="grid justify-center text-center gap-4 px-12 py-4">
        <div className="sm:space-x-2 space-y-2">
          <input
            type="text"
            placeholder="Your Name"
            className="sm:w-40 pl-3 px-20 sm:pr-4 border-2 bg-gray-50 focus:ring-2 focus:ring-black focus:outline-none"
          />

          <input
            type="text"
            placeholder="Your Email"
            className="sm:w-40 pl-3 px-20 sm:pr-4 border-2 bg-gray-50 focus:ring-2 focus:ring-black focus:outline-none"
          />

          <input
            type="text"
            placeholder="Your Phone"
            className="sm:w-40 pl-3 px-20 sm:pr-4 border-2 bg-gray-50 focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>
        <textarea
          className="sm:w-auto  pl-3 sm:pr-4 border-2 bg-gray-50 focus:ring-2 focus:ring-black focus:outline-none
      "
          id="message"
          rows={5}
          placeholder="Your Message"
        ></textarea>

        <button className="bg-red-500 text-white sm:px-4 sm:mx-40 mx-4 py-3 rounded-r ">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default contact;
