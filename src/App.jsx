import React from 'react'
import Background from './components/Background'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

import './App.css'

function App() {
  return (
    <>
      <div className='w-full'>
        <Navbar />
      </div>

      <div className='flex justify-center'>
        <div className='w-full max-w-7xl text-center text-text'>

          <HeroSection />
          <AboutMe />
          <Skills />

        </div>
      </div>

      <Background />
    </>
  )
}

export default App
