// import React from 'react'
import One from '../assets/1.png';
import Two from '../assets/2.png';
import Three from '../assets/3.png';
import Four from '../assets/4.png';
import Five from '../assets/5.png';
import Six from '../assets/6.png';

const Work = () => {

  // Images data
  const images = [
    { url: One, top: "50%", left: "50%", isActive: true },
    { url: Two, top: "56%", left: "44%", isActive: false },
    { url: Three, top: "45%", left: "56%", isActive: false },
    { url: Four, top: "60%", left: "53%", isActive: false },
    { url: Five, top: "43%", left: "47%", isActive: false },
    { url: Six, top: "65%", left: "55%", isActive: false },
  ];

  return (
    <div className="w-full relative">
      {/* Text area */}
      <div className="max-w-screen-xl mx-auto bg-zinc-900 text-center leading-none relative">
        <p className="text-[5vw] translate-x-[-40%] translate-y-[130%] opacity-80 leading-none tracking-tight">Let's</p>
        <h1 className="text-[30vw] leading-none font-medium select-none tracking-tight">work</h1>
        <p className="text-[5vw] translate-x-[40%] translate-y-[-50%] opacity-80 leading-none tracking-tight">Together.</p>
      </div>

      {/* Images rendering */}
      <div className='w-full h-full absolute top-0'>
        {images.map((elem, index) => (elem.isActive && (<img 
              key={index} 
              src={elem.url} 
              alt={elem.url} 
              className='w-[15vw] rounded-md absolute' 
              style={{ 
                top: elem.top, 
                left: elem.left, 
                transform: 'translate(-50%, -50%)' // Center the image
              }} 
            />) ) )}
      </div>
    </div>
  );
}

export default Work;
