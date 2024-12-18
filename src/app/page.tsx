// import React from 'react'
// import { IoIosArrowForward } from "react-icons/io";
// const home = () => {
//   return (
//     <div>
//     <hr className='border-t-2 border-gray-300  '/>
//     <div className='flex items-start justify-between  '>
           
//  <div className='border-r-2 border-gray-300 pr-28  '>
//         <ul className='pl-[110px] space-y-4 pt-12 font-medium  '>
//         <li className='flex '>Woman's Fashion <IoIosArrowForward className='my-0.5  size-5' /></li>
//         <li className='flex '>Men's Fashion <IoIosArrowForward className='my-0.5  size-5' /></li>
//         <li>Electronics</li>
//         <li>Home & Lifestyle</li>
//         <li>Medicine</li>
//         <li>Sports & Outdoor</li>
//         <li>Baby's & Toys</li>
//         <li>Groceries & Pets</li>
//         <li>Health & Beauty</li>
//       </ul>
//       </div>
//       <div className=' pr-14 pt-12'>
//       <img src="Frame 560.png" alt="Frame" className=' top-11  sm:w-[880px] h-[340px]   '  />
//     </div>
//     </div>

//     <section className="py-14">
//       <div className="container mx-auto">
//         <div className="flex  items-center mb-6">
//           <h2 className="text-2xl font-bold">Flash Sales</h2>
//           <div className="flex gap-2">
            
//             <div className="flex gap-2">
//               <span className="font-semibold px-2 py-1 rounded">03 :</span>
//               <span className="font-semibold px-2 py-1 rounded">23 :</span>
//               <span className="font-semibold px-2 py-1 rounded">19 :</span>
//               <span className="font-semibold px-2 py-1 rounded">56</span>
//             </div>
//           </div>
//         </div>
//     </div>
//     </section>
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//       <img src="Frame 611.png" alt="img"  />

//               </div>
//     </div>
//   )
// }

// export default home









// // // components/FlashSales.js
// // export const FlashSales = () => {
// //   const flashSaleItems = [
// //     {
// //       id: 1,
// //       name: "HAVIT HV G92 Gamepad",
// //       price: 120,
// //       salePrice: 80,
// //       rating: 4.5,
// //       image: "/gamepad.jpg"
// //     },
// //     // Add more items as needed
// //   ];

// //   return (
//     // <section className="py-8">
//     //   <div className="container mx-auto">
//     //     <div className="flex justify-between items-center mb-6">
//     //       <h2 className="text-2xl font-bold">Flash Sales</h2>
//     //       <div className="flex gap-2">
//     //         <span>Ends in:</span>
//     //         <div className="flex gap-2">
//     //           <span className="bg-gray-200 px-2 py-1 rounded">03</span>
//     //           <span className="bg-gray-200 px-2 py-1 rounded">23</span>
//     //           <span className="bg-gray-200 px-2 py-1 rounded">19</span>
//     //           <span className="bg-gray-200 px-2 py-1 rounded">56</span>
//     //         </div>
//     //       </div>
//     //     </div>
        
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
// //           {flashSaleItems.map((item) => (
// //             <div key={item.id} className="border rounded-lg p-4">
// //               <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
// //               <h3 className="mt-2 font-semibold">{item.name}</h3>
// //               <div className="flex gap-2 mt-1">
// //                 <span className="text-red-500">${item.salePrice}</span>
// //                 <span className="line-through text-gray-400">${item.price}</span>
// //               </div>
// //               <button className="mt-2 w-full bg-red-500 text-white py-2 rounded">
// //                 Add to Cart
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // // components/Footer.js
// // export const Footer = () => {
// //   return (
// //     <footer className="bg-black text-white pt-12 pb-6">
// //       <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
// //         <div>
// //           <h3 className="text-xl font-bold mb-4">Exclusive</h3>
// //           <p className="mb-4">Subscribe to get special offers, free giveaways, and more.</p>
// //           <div className="flex">
// //             <input
// //               type="email"
// //               placeholder="Enter your email"
// //               className="px-4 py-2 bg-gray-800 rounded-l"
// //             />
// //             <button className="bg-red-500 px-4 rounded-r">
// //               Subscribe
// //             </button>
// //           </div>
// //         </div>
        
// //         <div>
// //           <h3 className="text-xl font-bold mb-4">Support</h3>
// //           <ul className="space-y-2">
// //             <li>111 Bijoy sarani, Dhaka</li>
// //             <li>exclusive@gmail.com</li>
// //             <li>+88015-88888-9999</li>
// //           </ul>
// //         </div>
        
// //         <div>
// //           <h3 className="text-xl font-bold mb-4">Account</h3>
// //           <ul className="space-y-2">
// //             <li><Link href="/account">My Account</Link></li>
// //             <li><Link href="/login">Login / Register</Link></li>
// //             <li><Link href="/cart">Cart</Link></li>
// //             <li><Link href="/wishlist">Wishlist</Link></li>
// //           </ul>
// //         </div>
        
// //         <div>
// //           <h3 className="text-xl font-bold mb-4">Quick Links</h3>
// //           <ul className="space-y-2">
// //             <li><Link href="/privacy">Privacy Policy</Link></li>
// //             <li><Link href="/terms">Terms of Use</Link></li>
// //             <li><Link href="/faq">FAQ</Link></li>
// //             <li><Link href="/contact">Contact</Link></li>
// //           </ul>
// //         </div>
// //       </div>
      
// //       <div className="container mx-auto mt-8 pt-8 border-t border-gray-800">
// //         <div className="flex justify-between items-center">
// //           <p>© 2024 Exclusive. All rights reserved.</p>
// //           <div className="flex gap-4">
// //             {/* Add social media icons here */}
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // // Layout.js
// // import { Header } from './Header';
// // import { Navbar } from './Navbar';
// // import { Footer } from './Footer';

// // export const Layout = ({ children }) => {
// //   return (
// //     <div className="min-h-screen flex flex-col">
// //       <Header />
// //       <Navbar />
// //       <main className="flex-grow">
// //         {children}
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // };









import React from 'react'

const page = () => {
  return (
    <div>
     

     
    </div>
  )
}

export default page
