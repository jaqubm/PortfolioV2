import React from 'react'

function Navbar() {
  return (
    <div className='w-full flex flex-row justify-center space-x-4 my-3 text-base font-bold'>
      <div className='cursor-pointer hover:underline'>
        Home
      </div>
      <div className='cursor-pointer hover:underline'>
        About me
      </div>
      <div className='cursor-pointer hover:underline'>
        Projects
      </div>
      <div className='cursor-pointer hover:underline'>
        Contact me
      </div>
    </div>
  )
}

export default Navbar