//Imports
import Hero from "./components/pages/Hero"
import AboutMe from "./components/pages/AboutMe"

function App() {
  return (
    <>
    <div className="w-screen text-text flex justify-center">
      <div className="w-full lg:block hidden max-w-[1100px] mx-10">
        <div className="flex flex-col justify-center">

          <Hero />

          <div className="flex space-x-10">

            <div className="flex-1">
              <AboutMe />
            </div>

            <div className="flex-1">
              Right
            </div>

          </div>

        </div>
      </div>

      <div className="w-full lg:hidden block max-w-[340px] mx-6">
        <div className="flex flex-col justify-center">
          <Hero />

          <AboutMe />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
