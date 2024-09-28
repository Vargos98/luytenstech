// import React from 'react'
import { IoMdReturnRight } from "react-icons/io";
export const Button = () => {
  return (
    <div className="min-w-40 px-4 py-2 bg-zinc-900 text-zinc-100 border rounded-full flex items-center justify-between  hover:bg-zinc-400 hover:text-black">
      <span className="text-sm font-medium ">Get Started </span>
      <IoMdReturnRight className="text-2xl"/>
    </div>
  )
}
