import React from 'react'

function Navbar() {
  return (
    <div className='w-full flex flex-row justify-center space-x-4 mt-3 text-base font-bold'>
      <div className='cursor-pointer hover:text-primary'>
        Home
      </div>
      <div className='cursor-pointer hover:text-primary'>
        About me
      </div>
      <div className='cursor-pointer hover:text-primary'>
        Projects
      </div>
      <div className='cursor-pointer hover:text-primary'>
        Contact me
      </div>
    </div>
  )
}

export default Navbar