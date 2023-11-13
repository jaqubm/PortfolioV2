import React from 'react'

import TestImage from './assets/space_05.svg'

import './App.css'

function App() {
  return (
    <div className='h-screen w-screen flex flex-col flex-wrap content-center justify-center bg-background text-center'>
      <img src={ TestImage } className='h-[500px]' />
      <h1 className='text-5xl font-bold text-text'>
        BE RIGHT BACK SOON
      </h1>
    </div>
  )
}

export default App
