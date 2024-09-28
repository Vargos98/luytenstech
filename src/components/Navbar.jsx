// import React from 'react'
import Logo from '../assets/Logo_Luytens.png';
import { Button } from './Button';

const Navbar = () => {
  return (
    <div className="max-w-screen-xl py-6 bg-zinc-900 mx-auto flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className='flex items-center'>
        <img className="w-20" src={Logo} alt="" />
        <p className='text-2xl'>Luytens Technology Solutions</p>
      </div>
      <div className='flex gap-12 mr-10 items-center'>
        <div className='w-[1px] h-10 bg-zinc-700'></div>
        <a href="/Home"><span className='inline-block w-2 h-2 bg-green-500 rounded-full flex-nowrap' style={{ boxShadow: "0 0 0.65em #00ff19" }}></span> Home</a>
        <a href="/Home">About</a>
        <a href="/Home">Services</a>
        <a href="/Home">Careers</a>
        <a href="/Home">Contact</a>
      </div>
      <div>
        <Button/>
      </div>
    </div>
  )
}

export default Navbar