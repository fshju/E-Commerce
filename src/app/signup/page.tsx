import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import Image from "next/image";
const signup = () => {
  return (
    <div>
      <div className="sm:flex w-auto lg:pr-2">
        <Image
          src="/signup.png"
          alt="Mobile.png"
          width={800}
          height={800}
          className="sm:w-1/2 sm:py-14"
        />
        <div
          className="sm:pt-36 justify-center text-center sm:justify-normal sm:text-left pt-5 sm:pl-36
    bg-white border sm:border-none mx-2 mt-5 shadow-xl sm:shadow-none py-11"
        >
          <h1 className="sm:text-4xl text-2xl sm:pb-4">Create an account</h1>
          <p className="sm:text-xl text-lg pb-16">Enter your details below</p>
          <form className="grid space-y-16 px-3 sm:px-0 ">
            <input type="text" placeholder="Name" className="border-b-2" />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border-b-2"
            />{" "}
            <input type="text" placeholder="Password" className="border-b-2" />
          </form>
          <div className="space-y-3">
            <button className="w-full mt-10 bg-red-500 text-white rounded-r p-4 ">
              Create Account
            </button>
            <button className="w-full mt-10 bg-white text-black rounded-r border-2 p-4 flex items-center gap-3 justify-center">
              <FcGoogle className="size-6" />
              Sign up with Google
            </button>
            <div className="flex justify-center gap-2">
              <p>Already have account? </p>
              <Link href="/login"> Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
