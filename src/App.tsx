import Hero from "./components/pages/Hero"

import AboutMe from "./components/pages/AboutMe"
import Skills from "./components/pages/Skills"
import Certifications from "./components/pages/Certifications"

import WorkExperience from "./components/pages/WorkExperience"
import Projects from "./components/pages/Projects"

import Footer from "./components/pages/Footer"

function App() {

  document.addEventListener('contextmenu', event => {
    event.preventDefault();
  });

  return (
    <>
      <div className="w-full text-text flex flex-col justify-center items-center cursor-default">
        <div className="w-full lg:block hidden max-w-[1100px] mx-10 mb-5">
          <div className="flex flex-col justify-center">

            <Hero />

            <div className="flex space-x-10">

              <div className="flex-1 flex flex-col space-y-10">

                <AboutMe />
                <Skills />
                <Certifications />

              </div>

              <div className="flex-1 flex flex-col space-y-10">
                
                <WorkExperience />
                <Projects />

              </div>

            </div>

          </div>
        </div>

        <div className="w-full lg:hidden block max-w-[340px] mx-6 mb-3">
          <div className="flex flex-col justify-center">

            <Hero />

            <div className="space-y-4">

              <AboutMe />
              <Skills />
              <WorkExperience />
              <Projects />
              <Certifications />

            </div>
          </div>
        </div>

        <div className="w-full flex justify-center lg:mb-5 mb-3">
          <Footer />
        </div>

      </div>
    </>
  )
}

export default App
