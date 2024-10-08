// import React from 'react'
import Logo from '../assets/Static/Logo_Luytens.png';
import { Button } from './Button';

const Navbar = () => {
  return (
    <div className="max-w-screen-xl py-6 bg-zinc-900 mx-auto flex items-center justify-between border-b-[1px] border-zinc-700 text-white">
      <div className='flex items-center'>
        <img className="w-10 lg:w-20  rounded-full cursor-pointer " src={Logo} alt="" />
        <p className='text-[3.5vw] lg:text-[1.5vw] text-wrap cursor-pointer'>Luytens Technology Solutions</p>
      </div>
      <div className='hidden lg:flex gap-12 mr-10 items-center'>
        <div className='w-[1px] h-10 bg-zinc-700'></div>
        <a href="/Home" className='hover:text-gray-400'><span className='inline-block w-2 h-2 bg-green-500 rounded-full flex-nowrap' style={{ boxShadow: "0 0 0.65em #00ff19" }}></span> Home</a>
        <a href="/Home" className='hover:text-gray-400 transition-all duration-[300ms] ease-in-out'>About</a>
        <a href="/Home" className='hover:text-gray-400 transition-all duration-[300ms] ease-in-out'>Services</a>
        <a href="/Home" className='hover:text-gray-400 transition-all duration-[300ms] ease-in-out'>Careers</a>
        <a href="/Home" className='hover:text-gray-400 transition-all duration-[300ms] ease-in-out'>Contact</a>
      </div>
      <div>
        <Button title="Job Genee"/>
      </div>
    </div>
  )
}

export default Navbar