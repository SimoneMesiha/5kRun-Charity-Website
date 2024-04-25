import React from 'react'
import logo from "../assets/home_image.jpg";
import logo2 from "../assetsPhotos/BibleLens_2019_05_12_20_54_41_9010.jpg"
import logo3 from "../assetsPhotos/IMG_3852_Original-preview.jpg";
import { NavLink } from 'react-router-dom';

const Hero = () => {
   return (
     <div
       className="relative bg-cover bg-center h-screen text-white"
       style={{ backgroundImage: `url(${logo3})` }}
     >
       <div className="flex flex-col justify-center items-center h-full bg-opacity-50 bg-black">
         <h1 className="text-5xl font-bold">CYHH 5K RUN</h1>
         <p className="mt-4 text-xl">4th Annual Run the Race Keep the Faith 5K</p>
         <NavLink
           to="/about"
           className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-block text-center"
         >
           Learn More
         </NavLink>
       </div>
     </div>
   );
}

export default Hero