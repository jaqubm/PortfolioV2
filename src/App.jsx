import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/heroSection'

import './App.css'

function App() {
  return (
    <div className='flex justify-center'>
      <div className='w-full max-w-5xl text-center text-text'>
        <Navbar />
        <HeroSection />
      </div>
    </div>
  )
}

export default App
