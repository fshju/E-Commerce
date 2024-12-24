import Image from "next/image";
import React from "react";
const login = () => {
  return (
    <div>
      <div className="sm:flex w-auto lg:pr-2">
        <Image
          src="/signup.png"
          alt="Mobile.png"
          width={500}
          height={500}
          className="sm:w-1/2 sm:py-14"
        />
        <div
          className="sm:pt-36 justify-center text-center sm:justify-normal sm:text-left pt-5 sm:pl-36
    bg-white border sm:border-none mx-2 mt-5 shadow-xl sm:shadow-none py-11"
        >
          <h1 className="sm:text-4xl text-2xl sm:pb-4">Log in to Exclusive</h1>
          <p className="sm:text-xl text-lg pb-16">Enter your details below</p>
          <form className="grid space-y-16 px-3 sm:px-0 ">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border-b-2"
            />{" "}
            <input type="text" placeholder="Password" className="border-b-2" />
          </form>
          <div className="flex gap-10 justify-center">
            <button className="w-36 mt-10 bg-red-500 text-white rounded-r p-4 ">
              Log In
            </button>
            <p className="text-red-500 mt-14">Forget Password?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
