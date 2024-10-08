// import React from 'react'
import { IoMdReturnRight } from "react-icons/io";
export const Button = ({title ="Get Started"}) => {
  return (
    <div className="px-2 p-1 lg:min-w-40 lg:px-4 lg:py-2 gap-2 bg-zinc-900 text-zinc-100 border transition-all ease-in duration-300 rounded-full flex items-center justify-between  hover:bg-zinc-400 hover:text-black  ">
      <span className="text-[12px] lg:text-sm font-medium ease-in">{title}</span>
      <IoMdReturnRight className="text-sm lg:text-2xl"/>
    </div>
  )
}
