//Imports
import Hero from "./components/pages/Hero"
import AboutMe from "./components/pages/AboutMe"
import SkillsList from "./components/pages/SkillsList"

function App() {
  return (
    <>
    <div className="w-screen text-text flex justify-center">
      <div className="w-full lg:block hidden max-w-[1100px] mx-10 mb-10">
        <div className="flex flex-col justify-center">

          <Hero />

          <div className="flex space-x-10">

            <div className="flex-1 flex flex-col space-y-10">
              <AboutMe />
              <SkillsList />
            </div>

            <div className="flex-1 flex flex-col space-y-10">
              Right
            </div>

          </div>

        </div>
      </div>

      <div className="w-full lg:hidden block max-w-[340px] mx-6 mb-6">
        <div className="flex flex-col justify-center">
          <Hero />

          <div className="space-y-4">
            <AboutMe />
            <SkillsList />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
