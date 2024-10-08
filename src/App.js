// src/App.js
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import AboutUs from './components/AboutUs';
import Loader from './components/Loader';
import Services from './components/Services';
import Marquees from './components/Marquees';

const App = () => {
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
          
         
          <Marquees />
        </>
      )}
    </div>
  );
};

export default App;
