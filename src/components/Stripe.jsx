import React, { useEffect, useRef, useState } from 'react';

const Stripe = ({ val }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  // Use the IntersectionObserver API to observe when the image is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);  // Optional: Stop observing once visible
          }
        });
      },
      {
        threshold: 0.1,  // Trigger when 10% of the image is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`min-[16.66%] px-[2.5vw] py-[1.5vh]  border-b-[1.2px] border-zinc-700 flex justify-between items-center overflow-hidden transition-all duration-[1000ms] ease-linear transform  ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <img
        className='w-46 h-10 object-contain hover:scale-125 transition-all ease-in-out duration-300 cursor-pointer'
        src={val}
        alt="Company logo"
      />                 
    </div>
  );
};

export default Stripe;
