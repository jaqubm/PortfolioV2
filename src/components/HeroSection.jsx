import React from 'react';
import ReactTyped from 'react-typed';
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
      </div>

      <div className='basis-1/2'>
        <img src={ HeroImage } className='w-full'/>
      </div>
    </div>
  )
}

export default HeroSection