import React from 'react';
import { Button } from './Button';
import one from '../assets/Static/1.png';

const Service = ({ data }) => {
  const { title, description, live } = data;

  return (
    <div className='w-full py-20 text-white transition-all duration-[1500ms] ease-in-out '>
      {/* Desktop View */}
      <div className='hidden lg:flex max-w-screen-xl mx-auto items-center justify-between from-zinc-900 to-zinc-800'>
        <h1 className='text-[4vw] capitalize font-medium opacity-80'>{title}</h1>
        <div className='w-1/3'>
          <p className='mb-10'>{description}</p>
          {live && <Button />}
        </div>
      </div>

      {/* Mobile View */}
      <div className='block lg:hidden w-[90%] mx-auto py-5 bg-gradient-to-t from-zinc-900 to-zinc-800 rounded-xl -mb-20'>
        <div className='text-center'>
          <h1 className='text-[8vw] capitalize font-medium mb-10 underline underline-offset-4 decoration-2 opacity-80'>
            {title}
          </h1>
          <img className='w-[90%] mx-auto rounded-lg' src={one} alt={title} />
          <div className='p-4 mt-10'>
            <p className='mb-10 text-start text-[3.5vw]'>{description}</p>
            {live && (
              <div className='w-1/2 mx-auto'>
                <Button />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
