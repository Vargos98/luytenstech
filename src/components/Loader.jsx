// src/Loader.js
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Navbar from './Navbar';
import Work from './Work';
import Stripes from './Stripes';
import AboutUs from './AboutUs';


const Loader = ({ onLoaderComplete }) => {
  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline();

    tl.from(".line h1", {
      y: 150,
      stagger: 0.25,
      duration: 0.6,
      delay: 0.5,
    });

    tl.from('#line1-part1, .line h2', {
      opacity: 0,
      onStart: function () {
        const h5timer = document.querySelector("#line1-part1 h5");
        let grow = 0;
        const interval = setInterval(() => {
          if (grow < 99) {
            h5timer.innerHTML = grow < 10 ? `0${grow}` : grow; // Show leading zero
            grow++;
          } else {
            clearInterval(interval); // Stop when we reach 100
          }
        }, 35);
      }
    });

    tl.to('#loader', {
      opacity: 0,
      duration: 0.2,
      delay: 4,
      onComplete: () => {
        setLoaderVisible(false); // Hide loader
        onLoaderComplete(); // Call the callback function
      },
    });
  }, [onLoaderComplete]);

  return (
    <>
      {loaderVisible && (
        <div id="loader" className="fixed z-50 w-full h-full bg-black flex flex-col items-center justify-center p-10">
          <div className="line flex items-center justify-start gap-3">
            <div id="line1-part1" className="flex items-center gap-3 ml-10 opacity-80">
              <h5 className="text-white text-[3vw] font-bold">00</h5>
              <h6 className="text-white text-[3vw] font-bold">- 100</h6>
            </div>
            <h1 className="text-white text-[6.5vw] font-bold uppercase ml-[-140%] mt-[-50%]">Your</h1>
          </div>
          <div className="line">
            <h1 className="text-white text-[6.5vw] font-bold uppercase ml-[-10%] mt-[-10%]">Web Experiences</h1>
          </div>
          <div className="line">
            <h1 className="text-white text-[6.5vw] font-bold uppercase mt-[-5%]">is loading right</h1>
            <h2 className="text-white text-[6vw] font-bold uppercase animate-fade ml-[105%] mt-10">Now</h2>
          </div>
        </div>
      )}
      {!loaderVisible && (
        <div className="main-content pop-out-animation ease-in "> {/* Main content here */}
          {/* Place your main application components here */}
          
          <Navbar/>
          <Work/>
          <Stripes/>
          <AboutUs />
        </div>
      )}
    </>
  );
};

export default Loader;
