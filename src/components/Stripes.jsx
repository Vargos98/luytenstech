import React from 'react';
import Stripe from '../components/Stripe';
import birla from '../assets/Static/Stripe/birlasoft.png';
import cisco from '../assets/Static/Stripe/cisco.png';
import google from '../assets/Static/Stripe/google.png';
import HCL from '../assets/Static/Stripe/HCL.png';
import infosys from '../assets/Static/Stripe/infosys.png';
import logitech from '../assets/Static/Stripe/logitech.png';
import TCS from '../assets/Static/Stripe/tcs.png';
import techMahindra from '../assets/Static/Stripe/tecchMahindra.png';
import wipro from '../assets/Static/Stripe/wipro.png';
import zensar from '../assets/Static/Stripe/zensar.png';

const Stripes = () => {
  const data = [
    { url: birla },
    { url: cisco },
    { url: google },
    { url: HCL },
    { url: infosys },
    { url: TCS },
    { url: logitech },
    { url: techMahindra },
    { url: wipro },
    { url: zensar },
  ];

  return (
    <div className='flex items-center bg-white opacity-70 '>
      {data.map((elem, index) => (
        <Stripe key={index} val={elem.url} />
      ))}
    </div>
  );
};

export default Stripes;
