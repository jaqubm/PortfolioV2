import React from 'react'
import ReactTyped from 'react-typed'
import HeroImage from '../assets/heroImage.svg'

function HeroSection() {

  const content = [
    "Software Engineer",
    "C# / .NET Developer",
  ]

  return(
    <div className='w-full flex sm:flex-row flex-col-reverse justify-center items-center'>

      <div className='flex-auto w-8/12 flex flex-col items-start'>

        <div className='lg:text-7xl text-5xl font-black [text-shadow:_10px_12px_0_rgb(169_133_255_/_100%)]'>
          Hey,
        </div>

        <div className='lg:text-5xl text-3xl font-black text-left'>
          I'm Jakub Matuszak
        </div>
        
        <div className='flex lg:text-2xl text-xl'>
          <div>
            I'm a&nbsp;
          </div>
          <div className='font-bold text-primary'>
            {""}
            <ReactTyped
              strings={ content } 
              typeSpeed={ 65 }
              backSpeed={ 20 }
              showCursor={ true }
              loop/>
          </div>
        </div>

        <div className='flex lg:flex-row flex-col lg:items-center items-start lg:space-x-4'>

          <a href='https://www.linkedin.com/in/jaqubm/' target='_blank' className='lg:text-5xl text-2xl font-black lg:[text-shadow:_5px_7px_0_rgb(0_255_157_/_100%)] lg:hover:[text-shadow:_8px_10px_0_rgb(0_255_157_/_100%)] [text-shadow:_3px_4px_0_rgb(0_255_157_/_100%)]'>
            LinkedIn
          </a>

          <a href='https://github.com/jaqubm' target='_blank' className='lg:text-5xl text-2xl font-black lg:[text-shadow:_5px_7px_0_rgb(0_255_157_/_100%)] lg:hover:[text-shadow:_8px_10px_0_rgb(0_255_157_/_100%)] [text-shadow:_3px_4px_0_rgb(0_255_157_/_100%)]'>
            GitHub
          </a>
        </div>
      </div>

      <div className='basis-1/2'>
        <img src={ HeroImage } className='w-full'/>
      </div>
    </div>
  )
}

export default HeroSection