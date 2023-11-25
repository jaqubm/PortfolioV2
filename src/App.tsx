//Imports

function App() {
  return (
    <>
      <div className="leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">

        <div className="lg:flex lg:justify-between lg:gap-4">

          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <Hero />
            <AboutMe />

            Skills + Links
          </div>

          <div className="pt-24 lg:w-1/2 lg:py-24">
            Work experience + Projects + Footer
          </div>

        </div>

      </div>
    </>
  )
}

export default App
