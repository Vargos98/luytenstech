import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const Card = () => {
  return (
    <div className='w-1/2 bg-zinc-800 p-5 rounded-xl'>

      <div className='w-full'>
        <div className='w-full flex justify-between items-center'>
          <h1>Who we are ?</h1>
          <FaArrowRight />
        </div>
      </div>
    </div>
  )
}

export default Card