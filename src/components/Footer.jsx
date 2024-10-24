import React from 'react';
import Logo from '../assets/Static/Logo_Luytens.png';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-zinc-900'>

      <div className='max-w-screen-xl mx-auto py-10 px-4 flex flex-col lg:flex-row gap-10 lg:gap-32 mt-20 transition-all duration-[1500ms] ease-in-out'>
        {/* Left Div */}
        <div className='flex flex-col lg:flex-row lg:basis-1/2 items-center lg:items-start'>
          <img className='w-32 lg:w-44 mb-4 lg:mb-0' src={Logo} alt="Luytens Logo" />
          <h1 className='text-3xl lg:text-6xl font-medium tracking-tight text-wrap opacity-90 leading-none text-center lg:text-left'>
            Luytens Technology Solutions.
          </h1>
        </div>

        {/* Right Div */}
        <div className='lg:basis-1/2 w-full h-fit mt-4 lg:mt-10'>
          <ul className='flex flex-col gap-4'>
            <li className='flex items-center text-2xl lg:text-4xl hover:text-violet-500 transition-all duration-[300ms] ease-in-out lg:hover:scale-110 '>
             <a href="https://www.linkedin.com/company/luytens-technology-solutions/mycompany/" className='flex gap-4'><FaLinkedinIn className='text-[#1d4ed8] mr-2' /> LinkedIn</a> 
            </li>
            <li className='flex items-center text-2xl lg:text-4xl hover:text-blue-500 transition-all duration-[300ms] ease-in-out lg:hover:scale-110'>
              <a href="/" className='flex gap-4'><FaTwitter className='text-blue-400 mr-2' /> Twitter</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom div */}
      <div className='bg-zinc-800 py-4'>
        <div className='flex flex-col md:flex-row gap-2 md:gap-5 max-w-screen-xl mx-auto mb-2 items-center justify-center'>
          <p className='text-sm text-zinc-100 hover:text-white cursor-pointer'>
            2024 Luytens Technology Solutions.
          </p>
          <p className='text-sm text-zinc-100 hover:text-white cursor-pointer'>
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
