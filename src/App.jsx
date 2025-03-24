import NavBar from "./components/NavBar"
import Hero from "./components/Hero"


import { lazy, Suspense } from "react"

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
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
      <Skills />
        <Project />
        <About />
        <Contact />
        <Footer />
      </Suspense>
    </>
  )
}

export default App
