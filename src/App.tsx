//Imports
import Hero from "./components/pages/Hero"
import BorderBox from "./components/BorderBox"

function App() {
  return (
    <>
    <div className="w-screen text-text flex justify-center">
      <div className="w-full lg:block hidden max-w-[1100px] mx-10">
        <div className="flex flex-col justify-center">

          <Hero />

          <div className="flex space-x-10">

            <div className="flex-1">
              <BorderBox>
                Left
              </BorderBox>
            </div>

            <div className="flex-1">
              <BorderBox>
                Right
              </BorderBox>
            </div>

          </div>

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
