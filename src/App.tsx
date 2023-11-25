//Imports
import Hero from "./components/pages/Hero"

function App() {
  return (
    <>
    <div className="w-screen text-text flex justify-center">
      <div className="w-full lg:block hidden max-w-[1100px]">
        <div className="flex flex-col justify-center">
          <Hero />

          Desktop
        </div>
      </div>

      <div className="lg:hidden block">
        <div>
          Mobile
        </div>
      </div>
    </div>
    </>
  )
}

export default App
