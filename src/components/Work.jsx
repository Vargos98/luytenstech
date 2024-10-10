import React, { useEffect, useState } from 'react';
import One from '../assets/Static/1.png';
import Two from '../assets/Static/2.png';
import Three from '../assets/Static/3.png';
import Four from '../assets/Static/4.png';
import Five from '../assets/Static/5.png';
import Six from '../assets/Static/6.png';

const Work = () => {
  // State for triggering the animation
  const [animateText, setAnimateText] = useState(false);

  // Trigger animation after the component mounts
  useEffect(() => {
    setAnimateText(true);
  }, []);

  // Images data
  const images = [
    { url: One, top: '50%', left: '50%', isActive: true },
    { url: Two, top: '56%', left: '44%', isActive: false },
    { url: Three, top: '45%', left: '56%', isActive: false },
    { url: Four, top: '60%', left: '53%', isActive: false },
    { url: Five, top: '43%', left: '47%', isActive: false },
    { url: Six, top: '65%', left: '55%', isActive: false },
  ];

  return (
    <div className="w-full relative mt-28 lg:mt-3 bg-zinc-900 mb-64 lg:mb-52">
      {/* Text area */}
      <div className="max-w-screen-xl mx-auto bg-zinc-900 text-center leading-none relative">
        {/* First paragraph with animation */}
        <p
          className={` text-[12vw] sm:text-[6vw] lg:text-[5vw] xl:text-[5.5vw] leading-none tracking-tight transition-all duration-[1500ms] ${animateText ? 'translate-x-[-36%] translate-y-[95%] opacity-80' : 'translate-x-[-36%] opacity-0'
            }`}
        >
          Let's
        </p>
        <h1 className={`text-[40vw] sm:text-[30vw] leading-none font-medium select-none tracking-tight transition-all duration-[3000ms] ease-in-out`}>work</h1>
        <p
          className={`text-[12vw] sm:text-[6vw] lg:text-[5vw] xl:text-[5.5vw] leading-none tracking-tight transition-all text-orange-500 duration-[1500ms] ease-in-out ${animateText ? 'lg:translate-x-[35%] translate-x-[25%] translate-y-[-40%] opacity-100' : 'translate-x-[100%] translate-y-[-50%] opacity-0'
            }`}
        >
          Together.
        </p>

      </div>

      {/* Images rendering */}
      <div className="w-full h-full absolute top-0">
        {images.map(
          (elem, index) =>
            elem.isActive && (
              <img
                key={index}
                src={elem.url}
                alt={elem.url}
                className="w-[30vw] sm:w-[16vw] rounded-md absolute transition-all duration-[1500ms] ease-in-out"
                style={{
                  top: elem.top,
                  left: elem.left,
                  transform: 'translate(-50%, -50%)', // Center the image
                }}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Work;
