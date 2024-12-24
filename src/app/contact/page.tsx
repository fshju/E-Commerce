import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { FaEnvelopeSquare } from "react-icons/fa";
import Link from "next/link";
const contact = () => {
  return (
    <div className="lg:py-14 py-1 ">
      <div className="flex gap-2 lg:pl-52 p-5 ">
        <Link href="/">
          <button className="opacity-50 hover:opacity-100">Home</button>
        </Link>
        <span className="opacity-30">/</span>
        <button className="cursor-pointer">Contact</button>
      </div>
      <div className="lg:flex justify-center text-center lg:text-left py-5 space-y-5 lg:space-y-0  lg:mr-14">
        <div className=" bg-white lg:shadow-2xl shadow-md w-72 h-auto mx-auto lg:mx-9 px-7 py-7 space-y-2">
          <h1 className="flex items-center gap-2 justify-center lg:justify-normal">
            {" "}
            <div className=" border-8 border-red-500 bg-red-500 rounded-full">
              {" "}
              <IoCallOutline className=" size-5" />
            </div>{" "}
            Call To Us
          </h1>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
          <br />
          <hr />
          <br />
          <h1 className="flex items-center justify-center lg:justify-normal gap-2">
            {" "}
            <div className=" border-8 border-red-500 bg-red-500 rounded-full">
              <FaEnvelopeSquare className="size-5" />
            </div>{" "}
            Write To US
          </h1>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com </p>
          <p>Emails: support@exclusive.com</p>
        </div>

        <div className="grid justify-center text-center gap-4 px-32 lg:px-8 py-14 bg-white shadow-2xl mx-5 lg:mx-0">
          <div className="lg:space-x-2 space-y-2">
            <input
              type="text"
              placeholder="Your Name"
              className="lg:w-44 h-10 pl-3 px-20 lg:pr-4 border-2 bg-gray-50 focus:ring-2 focus:ring-black focus:outline-none"
            />

            <input
              type="text"
              placeholder="Your Email"
              className="lg:w-44 h-10 pl-3 px-20 lg:pr-4 border-2 bg-gray-50 focus:ring-2 focus:ring-black focus:outline-none"
            />

            <input
              type="text"
              placeholder="Your Phone"
              className="lg:w-44 h-10 pl-3 px-20 lg:pr-4 border-2 bg-gray-50 focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>
          <textarea
            className="lg:w-auto pl-3 lg:pr-4 border-2 bg-gray-50 focus:ring-2 focus:ring-black focus:outline-none
      "
            id="message"
            rows={5}
            placeholder="Your Message"
          ></textarea>

          <button className="bg-red-500 text-white lg:px-4 lg:ml-80  py-2  rounded-r ">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default contact;
