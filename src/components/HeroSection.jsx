import React from 'react';
import ReactTyped from 'react-typed';
import HeroImage from '../assets/heroImage.svg'

function HeroSection() {
  return(
    <div className='w-full flex sm:flex-row flex-col-reverse justify-center items-center'>
      <div className='flex-1 flex flex-col items-start'>
        <div className='lg:text-5xl text-3xl font-black'>
          Hey, I'm Jakub
        </div>
        <div className='flex lg:text-2xl text-xl'>
          <div>
            I'm&nbsp;
          </div>
          <div className='font-bold text-primary'>
            {""}
            <ReactTyped
              strings={[
                "Software Engineer",
                "C# / .NET Developer",
                "just a person."
                ]} 
              typeSpeed={65}
              backSpeed={20}
              showCursor={true}
              loop/>
          </div>
        </div>
      </div>

      <div className='flex-1'>
        <img src={ HeroImage } className='w-full'/>
      </div>
    </div>
  )
}

export default HeroSection