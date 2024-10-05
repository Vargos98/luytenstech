import React from 'react'

import Navbar from "./components/Navbar"
import Work from "./components/Work"
import Stripes from "./components/Stripes"
import AboutUs from './components/AboutUs'

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white overflow-x-hidden">
      <Navbar />
      <Work />
      <Stripes />
      <AboutUs/>
    </div>
  )
}

export default App