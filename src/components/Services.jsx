
import React, { useEffect, useState } from 'react';
import Service from './Service'

const Services = () => {
  const [animateText, setAnimateText] = useState(false);

  // Trigger animation after the component mounts
  useEffect(() => {
    setAnimateText(true);
  }, []);
  var services = [
    { title: "Staffing", description: "Matching top talent with the perfect opportunity, our staffing solutions drive success for both businesses and professionals. Experience the difference of a seamless and tailored hiring process with us.", live: true,  },
    {
      title: "Web And Cloud Solutions", description: "Transforming businesses with innovative web and cloud solutions, empowering them to thrive in the digital era. Experience the power of seamless integration and scalability for your online success."
      , live: true, },
    { title: "Mobility Solutions", description: "Unleashing the potential of mobility for businesses, our solutions drive innovation and efficiency on the go. Experience seamless connectivity and enhanced productivity with our mobility solutions.", live: true, },
    { title: "Digital Marketing", description: "Amplify your brand's presence and engage your audience with our data-driven digital marketing strategies. Experience growth, visibility, and success in the digital landscape with our expert solutions.", live: true, },
  ]

  return (
    <div>
    <h1 className={`text-[5vw] mb-20 leading-none tracking-tight transition-all duration-[1500ms] underline underline-offset-4 decoration-2 ${animateText ? 'translate-x-[10%] translate-y-[15%] opacity-100' : 'translate-x-[-36%] opacity-0'
            }`}>Services</h1>
    {services.map((elem, index)=>{
      return <Service data={elem}  key={index}/>
    })}
  
    </div>
  )
}

export default Services