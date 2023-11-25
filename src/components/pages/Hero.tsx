import HeroDecorations from "../../assets/HeroDecorations.svg"

const Hero = () => (
  <div className="flex flex-col justify-center lg:mt-10 mt-4 lg:mb-20 mb-9 lg:pt-20 pt-9 text-center relative">

    <img src={ HeroDecorations } className="lg:max-w-none max-w-[540px] w-full opacity-5 absolute m-auto top-0 left-0 right-0" />

    <div className="lg:text-9xl text-6xl font-black lg:[text-shadow:_3px_12px_0px_rgba(10,_255,_157,_0.25);] [text-shadow:_1.3px_5.7px_0px_rgba(10,_255,_157,_0.25);]">
      Jakub
    </div>
    <div className="lg:-mt-8 -mt-2 lg:mb-14 mb-7 text-primary lg:text-9xl text-6xl font-black lg:[text-shadow:_3px_12px_0px_rgba(255,_255,_255,_0.25);] [text-shadow:_1.3px_5.7px_0px_rgba(255,_255,_255,_0.25);]">
      Matuszak
    </div>

    <div className="lg:text-5xl text-xl font-bold relative">
      Software Engineer

      <div className="lg:text-[64px] text-[27px] opacity-5 font-black absolute m-auto lg:top-4 top-2.5 left-0 right-0">
        Software Engineer
      </div>
    </div>

  </div>
)

export default Hero