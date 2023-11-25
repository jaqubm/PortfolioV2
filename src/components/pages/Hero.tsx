import HeroDecorations from "../../assets/HeroDecorations.svg"

const Hero = () => (
  <div className="flex flex-col justify-center mt-10 mb-20 pt-20 text-center relative">

    <img src={ HeroDecorations } className="opacity-[.03] absolute m-auto top-0 left-0 right-0" />

    <div className="text-9xl font-black [text-shadow:_3px_12px_0px_rgba(10,_255,_157,_0.25);]">
      Jakub
    </div>
    <div className="mt-[-32px] mb-14 text-primary text-9xl font-black [text-shadow:_3px_12px_0px_rgba(255,_255,_255,_0.25);]">
      Matuszak
    </div>

    <div className="text-5xl font-bold relative">
      Software Engineer

      <div className="text-[64px] opacity-[.03] font-black absolute m-auto top-4 left-0 right-0">
        Software Engineer
      </div>
    </div>

  </div>
)

export default Hero