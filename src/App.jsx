import React from 'react'

import WorkInProgressSVG from './assets/workInProgress.svg'

import './App.css'

function App() {
  return (
    <div className='h-screen w-screen flex justify-center text-center'>
      <div className='w-11/12 flex flex-col flex-wrap justify-center'>
        <img src={ WorkInProgressSVG } className='h-[350px]' />
        <div className='text-3xl font-black'>
          BE RIGHT BACK SOON!
        </div>
        <div className='font-bold'>
          working on something amazing...
        </div>
      </div>
    </div>
  )
}

export default App
