import NavBar from "./components/NavBar"
import Hero from "./components/Hero"


import { lazy, Suspense } from "react"
import WeatherMessage from "./components/WeatherMessage";

// Lazy loading components
const Skills = lazy(() => import("./components/Skills"));
const About = lazy(() => import("./components/About"));
const Project = lazy(() => import("./components/Project"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {

  return (
    <>
      <NavBar />
      <WeatherMessage />
      <Hero />
      <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </Suspense>
    </>
  )
}

export default App
