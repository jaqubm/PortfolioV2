//Imports
import Hero from "./components/pages/Hero"

function App() {
  return (
    <>
    <div className="w-screen text-text flex justify-center">
      <div className="w-full lg:block hidden max-w-[1100px] mx-10">
        <div className="flex flex-col justify-center">
          <Hero />

          Desktop
        </div>
      </div>

      <div className="w-full lg:hidden block max-w-[320px] mx-7">
        <div className="flex flex-col justify-center">
          <Hero />

          Mobile
        </div>
      </div>
    </div>
    </>
  )
}

export default App
