import React from 'react'
import { Button } from './Button'
import one from '../assets/Static/1.png'

const Service = ({ data, index }) => {
  const { title, description, live } = data;
  
  return (
    <div className='w-full py-20 text-white' index={index}>
      {/* The above section, visible only on screens larger than mobile */}
      <div className='hidden md:flex max-w-screen-xl mx-auto items-center justify-between transition-all duration-[1500ms] ease-in-out'>
        <h1 className='text-[4vw] capitalize font-medium transition-all duration-[1500ms] ease-in-out opacity-80'>{title}</h1>
        <div className='w-1/3'>
          <p className='mb-10'>{description}</p>
          {live && <Button />}
        </div>
      </div>

      {/* Card section only visible on mobile screens */}
      <div className='block md:hidden w-[90%] h-fit mx-auto py-20 text-white bg-zinc-800 rounded-xl'>
        <div className='flex flex-col w-full h-30 text-center transition-all duration-[1500ms] ease-in-out'>
          <h1 className='text-5xl capitalize font-medium mb-10 transition-all duration-[1500ms] ease-in-out underline underline-offset-4 decoration-2 opacity-80'>{title}</h1>
          <img className='w-[90%] mx-auto rounded-lg transition-all duration-[1500ms] ease-in-out' src={one} alt="" />
          <div className='p-4 mt-10'>
            <p className='mb-10 text-start text-[3.5vw] transition-all duration-[1500ms] ease-in-out'>{description}</p>
            <div className='w-1/3 mx-auto'>
              {live && <Button />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
