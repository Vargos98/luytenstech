// import React from 'react'
import Logo from '../assets/Static/Logo_Luytens.png';
import { Button } from './Button';

const Navbar = () => {
  return (
    <>
      <div className="max-w-screen-xl py-6 bg-zinc-900 mx-auto flex items-center justify-between border-b-[1px] border-zinc-700 text-white ">
        {/* Left */}
        <div className='flex items-center'>
          <img className="w-10 lg:w-20  rounded-full cursor-pointer " src={Logo} alt="" />
          <p className='text-[3.5vw] lg:text-[1.5vw] text-wrap cursor-pointer'>Luytens Technology Solutions</p>
        </div>
        {/* Right */}
        <div>
          <Button title="Job Genee" />
        </div>
      </div>
      {/* Lower Navbar */}
      <div className='max-w-screen-xl mx-auto flex items-center gap-4 justify-around  py-4 text-sm lg:text-xl'>
        <a href="/Home" className='hover:text-gray-400'><span className='inline-block w-2 h-2 bg-green-500 rounded-full flex-nowrap' style={{ boxShadow: "0 0 0.65em #00ff19" }}></span> Home</a>
        <a href="/Home" className='hover:text-gray-400 transition-all duration-[300ms] ease-in-out'>About</a>
        <a href="/Home" className='hover:text-gray-400 transition-all duration-[300ms] ease-in-out'>Services</a>

        <a href="/Home" className='hover:text-gray-400 transition-all duration-[300ms] ease-in-out'>Contact</a>
      </div>
    </>
  )
}

export default Navbar