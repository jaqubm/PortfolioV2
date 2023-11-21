import React from 'react'
import Gaming from '../assets/gaming.svg'

function AboutMe() {
  return (
    <div className='w-full flex sm:flex-row flex-col-reverse justify-center items-center'>

      <div className='basis-1/2'>
        <img src={ Gaming } className='w-full' />
      </div>

      <div className='lex-auto w-8/12 flex flex-col items-center'>

        <div className='lg:text-7xl text-5xl font-black [text-shadow:_10px_12px_0_rgb(169_133_255_/_100%)]'>
          About me
        </div>

        <div>
          Test
        </div>
      </div>
    </div>
  )
}

export default AboutMe