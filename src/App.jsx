import React, { Suspense } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

const Background = React.lazy(() => import('./components/Background'))

import './App.css'

function App() {
  return (
    <>
      <div className='w-full'>
        <Navbar />
      </div>

      <div className='flex justify-center cursor-default'>
        <div className='w-full max-w-7xl text-center text-text'>

          <HeroSection />
          <AboutMe />
          <Skills />

        </div>
      </div>

      <Suspense>
        <Background />
      </Suspense>
    </>
  )
}

export default App
