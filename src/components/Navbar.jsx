import React from 'react'

function Navbar() {
  return (
    <div className='w-full flex flex-row justify-center space-x-4 my-3 text-base font-bold'>
      <div className='cursor-pointer [text-shadow:_1px_2px_0_rgb(0_255_157_/_100%)] lg:hover:[text-shadow:_1.5px_2.5px_0_rgb(0_255_157_/_100%)]'>
        Home
      </div>
      <div className='cursor-pointer [text-shadow:_1px_2px_0_rgb(0_255_157_/_100%)] lg:hover:[text-shadow:_1.5px_2.5px_0_rgb(0_255_157_/_100%)]'>
        About me
      </div>
      <div className='cursor-pointer [text-shadow:_1px_2px_0_rgb(0_255_157_/_100%)] lg:hover:[text-shadow:_1.5px_2.5px_0_rgb(0_255_157_/_100%)]'>
        Projects
      </div>
      <div className='cursor-pointer [text-shadow:_1px_2px_0_rgb(0_255_157_/_100%)] lg:hover:[text-shadow:_1.5px_2.5px_0_rgb(0_255_157_/_100%)]'>
        Contact me
      </div>
    </div>
  )
}

export default Navbar