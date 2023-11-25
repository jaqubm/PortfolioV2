import Hero from "./components/pages/Hero"

import AboutMe from "./components/pages/AboutMe"
import SkillsList from "./components/pages/SkillsList"
import Courses from "./components/pages/Courses"

import WorkExperience from "./components/pages/WorkExperience"

function App() {

  document.addEventListener('contextmenu', event => {
    event.preventDefault();
  });

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
              <Courses />

            </div>

            <div className="flex-1 flex flex-col space-y-10">
              
              <WorkExperience />

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
            <Courses />
            <WorkExperience />

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
