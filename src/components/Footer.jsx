import React from 'react';
import Logo from '../assets/Static/Logo_Luytens.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full '>
     
      <div className='max-w-screen-xl mx-auto py-10 flex gap-32 mt-20  transition-all duration-[1500ms] ease-in-out'>
       {/* Left Div */}
        <div className='basis-1/2 flex items-center'>
          <img className='lg:w-44 xl:w-44' src={Logo} alt="Luytens Logo" />
          <h1 className='text-6xl font-semibold tracking-tight text-wrap opacity-90 leading-none'>
            Luytens Technology Solutions.
          </h1>
        </div>

        <div className='basis-1/2'>
          <div>
            <ul className='flex flex-col gap-8 text-xl text-zinc-100 cursor-pointer transition-all duration-[300ms] ease-in-out  '>
              <li className='hover:text-zinc-300 transition-all duration-[300ms] ease-in-out hover:scale-110'>Home</li>
              <li className='hover:text-zinc-300 transition-all duration-[300ms] ease-in-out hover:scale-110'>About</li>
              <li className='hover:text-zinc-300 transition-all duration-[300ms] ease-in-out hover:scale-110 '>Services</li>
              <li className='hover:text-zinc-300 transition-all duration-[300ms] ease-in-out hover:scale-110'>Work</li>
              <li className='hover:text-zinc-300 transition-all duration-[300ms] ease-in-out hover:scale-110'>Contact</li>
            </ul>
          </div>
          <div className='ml-28'>
            <ul className='flex gap-8 text-lg text-zinc-100 cursor-pointer'>
              <li className='flex items-center hover:text-blue-300 transition-all duration-[300ms] ease-in-out hover:scale-110'>
                <FaFacebookF className='text-blue-600 mr-2 ' /> Facebook
              </li>
              <li className='flex items-center hover:text-pink-300 transition-all duration-[300ms] ease-in-out hover:scale-110'>
                <FaInstagram className='text-pink-500 mr-2 ' /> Instagram
              </li>
              <li className='flex items-center hover:text-violet-500 transition-all duration-[300ms] ease-in-out hover:scale-110'>
                <FaLinkedinIn className='text-[#1d4ed8] mr-2' /> LinkedIn
              </li>
              <li className='flex items-center hover:text-blue-500 transition-all duration-[300ms] ease-in-out hover:scale-110'>
                <FaTwitter className='text-blue-400 mr-2' /> Twitter
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom div */}
      <div>
        <div className='flex gap-5 max-w-screen-xl mx-auto mb-2 items-center'>
          <p className='text-sm text-zinc-100 hover:text-white cursor-pointer'>
            2024 Luytens Technology Solutions.
          </p>
          <p className='text-sm text-zin-100 hover:text-white cursor-pointer'>
            All rights reserved.
          </p>
          <p className='text-sm text-zinc-100 hover:text-white cursor-pointer'>
            Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
