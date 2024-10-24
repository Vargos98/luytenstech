import React, { useEffect, useState } from 'react';
import Service from './Service';
import Construction from '../assets/Dynamic/Construction.mp4';
import DigitalMarketing from '../assets/Dynamic/DigitalMarketing.mp4';
import Staffing from '../assets/Dynamic/Staffing.mp4';
import web from '../assets/Dynamic/web.mp4';

const Services = () => {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    setAnimateText(true);
  }, []);

  const services = [
    { 
      title: "Staffing", 
      description: "Matching top talent with the perfect opportunity, our staffing solutions drive success for both businesses and professionals. Experience the difference of a seamless and tailored hiring process with us.", 
      live: true, 
      video: Staffing, 
      color: 'bg-gradient-to-r from-cyan-500 to-blue-500' 
    },
    {
      title: "Web And Cloud Solutions", 
      description: "Transforming businesses with innovative web and cloud solutions, empowering them to thrive in the digital era. Experience the power of seamless integration and scalability for your online success.",
      live: true, 
      video: web,
      color:'bg-gradient-to-r from-sky-500 to-indigo-500'
    },
    { 
      title: "Mobility Solutions", 
      description: "Unleashing the potential of mobility for businesses, our solutions drive innovation and efficiency on the go. Experience seamless connectivity and enhanced productivity with our mobility solutions.", 
      live: true, 
      video: Construction,
      color:'bg-gradient-to-r from-violet-500 to-fuchsia-500'
    },
    { 
      title: "Digital Marketing", 
      description: "Amplify your brand's presence and engage your audience with our data-driven digital marketing strategies. Experience growth, visibility, and success in the digital landscape with our expert solutions.", 
      live: true,  
      video: DigitalMarketing ,
      color:'bg-gradient-to-r from-purple-500 to-pink-500'
    },
  ];

  return (
    <div>
      <h1 className={`text-[12vw] text-center xl:text-[5vw] mt-20 lg:mt-52 -mb-2 lg:mb-32 leading-none  transition-all duration-[1500ms] ${animateText ? ' xl:translate-x-[-30%] translate-y-[15%] opacity-100' : 'translate-x-[-36%] opacity-0'}`}>
        Ser<span className='text-orange-500'>vices</span>
      </h1>
      {services.map((elem, index) => (
        <Service data={elem} key={index} />
      ))}
    </div>
  );
};

export default Services;
