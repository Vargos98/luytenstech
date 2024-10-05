// src/Loader.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Loader = ({ onLoaderComplete }) => {
  useEffect(() => {
    // GSAP animations
    var tl = gsap.timeline();

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
        setInterval(() => {
          if (grow < 100) {
            h5timer.innerHTML = grow++;
          }
        }, 35);
      }
    });

    tl.to('#loader', {
      opacity: 0,
      duration: 0.1,
      delay: 4,
      onComplete: onLoaderComplete, // Call the callback function
    });
  }, [onLoaderComplete]);

  return (
    <div id="loader" className="fixed z-50 w-full h-full bg-black flex flex-col items-center justify-center p-10">
      <div className="line flex items-center justify-start gap-3">
        <div id="line1-part1" className="flex items-center gap-3">
          <h5 className="text-white text-[3vw] font-light">00</h5>
          <h6 className="text-white text-[3vw] font-light">- 100</h6>
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
  );
};

export default Loader;
