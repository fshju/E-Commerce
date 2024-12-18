import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

import React from 'react'

const signup = () => {
  return (
    <div>
    <div className="sm:flex w-auto lg:pr-2">
    <img src="signup.png" alt="Mobile.png" className="sm:w-1/2 sm:py-14"/>
    <div className="sm:pt-36 justify-center text-center sm:justify-normal sm:text-left pt-5 sm:pl-36
    bg-white border sm:border-none mx-2 mt-5 shadow-xl sm:shadow-none py-11">
      <h1 className="sm:text-4xl text-2xl sm:pb-4">
        Create an account
      </h1>
      <p className="sm:text-xl text-lg pb-16">Enter your details below</p>
      <form className="grid space-y-16 px-3 sm:px-0 ">
      <input type="text" placeholder="Name" className="border-b-2" />
      <input type="text" placeholder="Email or Phone Number" className="border-b-2"/>{" "}
      <input type="text" placeholder="Password" className="border-b-2"/>
      </form>
      <div className="space-y-3">
    <button className="w-full mt-10 bg-red-500 text-white rounded-r p-4 ">
          Create Account
        </button>
            <button className="w-full mt-10 bg-white text-black rounded-r border-2 p-4 flex items-center gap-3 justify-center">
            <FcGoogle  className="size-6"/>
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
  )
}

export default signup



//             </div>
//             <div className="">
//               {/* name */}
//               <div className="">
//                 <div className="">
//                   <div className="">
//                     <form>
//                       {/* <p>Name</p> */}
//                       <input type="text" placeholder="Name" />
//                     </form>
//                   </div>
//                   {/* email */}
//                   <div
//                     className=""
//                   >
//                     <div className="">
//                       <form>
//                         {/* <p>Email or Phone Number</p> */}
//                         <input
//                           type="text"
//                           placeholder="Email or Phone Number"
//                         />{" "}
//                         <br />
//                       </form>
//                     </div>
//                     {/* pssword */}
//                     <div
//                       className=""
//                     >
//                       <div className="w-[77px] h-[24px]">
//                         <form>
//                           {/* <p>Password</p> */}
//                           <input type="text" placeholder="Password" />
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-[371px]  h-[188px] gap-[16px]">
//                 <div className="h-[56px] gap-[16px] rounded-[4px] pt-[16px] pr-[122px] pb-[16px] pl-[122px] bg-[#DB4443]  text-white ">
//                   <button className="w-[127px] h-[24px] pt-[] pr-[] pb-[] pl-[] font-medium ">
//                     Create Account
//                   </button>
//                 </div>
//               </div>
//               <div className="w-[371px] h-[56px] rounded-[4px] border-spacing-1 pt-[16px] pr-[88px] pb-[16px] pl-[88px] gab-[10px] ">
//                 <div className="w-[199px] h-[24] gap-[16px] flex">
//                   <Image
//                     className="pt-[14px] pl-[9px] "
//                     src={"/Igoogle.png"}
//                     alt=""
//                     width={34}
//                     height={22}
//                   />
//                   <p className="w-[159px] h-[24px] leading-[24px] text-[16px]">
//                     Sign up with Google
//                   </p>
//                 </div>
//                 <div className="w-[248px] h-[28px] gap-[16px] flex">
//                   <div className="w-[185px] h-[24px] ">
//                     <p className="leading-[24px] text-[16px]">
//                       Already have account?
//                     </p>
//                   </div>
//                   <div className="w-[47px] h-[28px] gap-[4px]">
//                     {" "}
//                     <p className="h-[24px] leading-[24px] text-[16px]">
//                       <Link href="/Login">Login</Link>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
