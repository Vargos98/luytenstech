import React, { useEffect, useRef, useState } from 'react';
import { Button } from './Button';

const Service = ({ data }) => {
  const { title, description, live, video, color } = data;
  const videoRef = useRef(null); // Ref to access the video element
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const [bgColor, setBgColor] = useState('transparent'); // State for the background color

  useEffect(() => {
    // Use Intersection Observer to track when the video element enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Show video when in view
          observer.unobserve(entry.target); // Stop observing once it appears
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full py-20 text-white transition-all duration-[1500ms] ease-in-out">
      {/* Desktop View */}
      <div
        className="hidden lg:flex max-w-screen-xl mx-auto items-start justify-between space-x-20 transition-all duration-500 hover:scale-110 relative"
        style={{ backgroundColor: bgColor }} // Apply the dynamic background color
        onMouseEnter={() => setBgColor(color)} // Change background color on hover
        onMouseLeave={() => setBgColor('transparent')} // Reset to transparent on mouse leave
      >
        {/* Title */}
        <div className="flex-1 flex justify-start">
          <h1 className="text-[3vw] capitalize font-medium opacity-80">{title}</h1>
        </div>

        {/* Video */}
        <div className="flex-1 flex justify-center">
          <video
            ref={videoRef} // Attach the ref to the video element
            className={`w-[400px] h-[300px] rounded-lg object-cover transition-opacity  duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} absolute`} // Apply transition for fading in
            src={video}
            muted
            loop
            autoPlay
            playsInline // Enable inline playback on mobile devices
          ></video>
        </div>

        {/* Description */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="mb-10 text-start">{description}</p>
          {live && (
            <div className="flex justify-start">
              <Button />
            </div>
          )}
        </div>
        
      </div>
      <div className='hidden lg:block w-full bg-zinc-100 h-1 mt-10'></div>

      {/* Mobile View */}
      <div className="block lg:hidden w-[90%] mx-auto py-5 bg-gradient-to-t from-zinc-900 to-zinc-800 rounded-xl -mb-20 space-y-5">
        <div className="text-center">
          <h1 className="text-[8vw] capitalize font-medium mb-5 underline underline-offset-4 decoration-2 opacity-80">
            {title}
          </h1>

          {/* Video element for mobile */}
          <video
            className="w-full h-72 mx-auto rounded-lg object-cover"
            src={video}
            muted
            loop
            autoPlay
            playsInline
          ></video>

          {/* Description and button */}
          <div className="p-4 mt-5">
            <p className="mb-5 text-start text-[3.5vw]">{description}</p>
            {live && (
              <div className="w-1/2 mx-auto">
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
