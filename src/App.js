// src/App.js
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import AboutUs from './components/AboutUs';
import Loader from './components/Loader';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
// import LocomotiveScroll from 'locomotive-scroll';





const App = () => {
  // const locomotiveScroll = new LocomotiveScroll();
  const [isLoading, setIsLoading] = useState(true); // State to control loader visibility

  // Function to handle loader completion
  const handleLoaderComplete = () => {
    setIsLoading(false); // Set loading to false when the loader completes
  };

  return (
    <div className="w-full h-screen bg-zinc-900 text-white overflow-x-hidden">
      {isLoading ? ( // Conditional rendering for the Loader first and then loading the remaining components
        <Loader onLoaderComplete={handleLoaderComplete} />
      ) : (
        <>
          <Navbar />
          <Work />
          
          <AboutUs />
          <Services/>
          <Stripes />
          <Contact />
          <Footer/>

          
         
   
        </>
      )}
    </div>
  );
};

export default App;
