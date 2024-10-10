import React, { useEffect, useState } from 'react';
import { Button } from './Button';

const AboutUs = () => {
  const [animateText, setAnimateText] = useState(false);

  // Trigger animation after the component mounts
  useEffect(() => {
    setAnimateText(true);
  }, []);

  return (
    <>
      {/* Desktop View */}
      <div className='hidden lg:block w-full h-screen bg-zinc-900 max-w-screen-xl mx-auto py-40'>
        <h1
          className={`text-[12vw] xl:text-[5vw] leading-none text-nowrap -mt-20 lg:mb-20 tracking-tight transition-all duration-[1500ms] ${
            animateText
              ? 'translate-x-[2%] translate-y-[-30%] opacity-100'
              : 'translate-x-[-36%] opacity-0'
          }`}
        >
          Who <span className='text-orange-500 font-sans font-semibold'>we</span> are ?
        </h1>
        <div className='flex gap-2'>
          <div className='w-[65%] bg-purple-800 h-auto rounded-2xl hover:bg-violet-700 hover:scale-105 transition-all duration-300 ease-in-out'>
            <h1 className='text-[2.5vw] text-wrap p-4 text-zinc-100 font-semibold tracking-tighter'>
              Connecting <span className='text-orange-500 font-sans font-semibold '>You</span> with Exceptional Talent and Ideal Matches.
            </h1>
            <div className='w-[90%] p-5'>
              <p className='text-[1.5vw] ml-5 font-sans font-medium'>
                At <span className='text-orange-500 font-sans font-bold'>Luytens Technology Solutions</span>, we understand that finding the right talent is crucial for any organization's success. With our extensive network and in-depth industry expertise, we are committed to delivering tailored solutions that precisely match the unique requirements of our clients. Whether you are a multinational corporation seeking skilled professionals or a startup in search of dynamic talent, we have the expertise to fulfill your hiring needs.
              </p>
            </div>
          </div>

          <div className='w-[35%] bg-zinc-800 h-auto rounded-2xl hover:bg-orange-500 hover:scale-105 transition-all duration-300 ease-in-out hover:text-zinc-900 hover:font-semibold'>
            <h1 className='text-[2.5vw] text-wrap p-4 text-zinc-100 font-semibold tracking-tighter'>
              Why Choose <span className='text-blue-500'>us</span>?
            </h1>
            <div className='w-[90%] p-5'>
              <div className='text-[1.9vw] ml-5 mt-5 tracking-tight font-regular'>
                <p>1. Vast Talent Pool</p>
                <p>2. Tailored Solutions</p>
                <p>3. Fast and Efficient</p>
                <p>4. Quality Candidates</p>
                <p>5. Lasting Partnerships</p>
              </div>
              <div className='w-1/2 mx-auto mt-5'>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className='lg:hidden w-full h-auto bg-zinc-900 p-10 flex flex-col gap-4'>
        <h1
          className={`text-[12vw] leading-none text-nowrap -mt-5 tracking-tight transition-all duration-[1500ms] ${
            animateText
              ? 'translate-x-[2%] translate-y-[-30%] opacity-100'
              : 'translate-x-[-36%] opacity-0'
          }`}
        >
          Who <span className='text-orange-600 font-sans font-semibold'>we</span> are ?
        </h1>

        <div className='w-full bg-purple-800 rounded-2xl hover:bg-violet-700 hover:scale-105 transition-all duration-300 ease-in-out p-4'>
          <h1 className='text-[6vw] font-semibold mb-3'>
            Connecting <span className='text-orange-600'>You</span> with Exceptional Talent.
          </h1>
          <p className='text-[4vw] font-medium'>
            At <span className='text-orange-600 font-bold'>Luytens Technology Solutions</span>, we understand that finding the right talent is crucial for success. We are committed to delivering tailored solutions for unique client requirements.
          </p>
        </div>

        <div className='w-full bg-zinc-700 rounded-2xl hover:bg-orange-600 hover:scale-105 transition-all duration-300 ease-in-out p-4'>
          <h1 className='text-[6vw] font-semibold mb-3'>
            Why Choose <span className='text-blue-400'>us</span>?
          </h1>
          <ul className='text-[4vw] font-semibold list-disc list-inside'>
            <li>Vast Talent Pool</li>
            <li>Tailored Solutions</li>
            <li>Fast and Efficient</li>
            <li>Quality Candidates</li>
            <li>Lasting Partnerships</li>
          </ul>
          <div className='w-full flex justify-center mt-4'>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
