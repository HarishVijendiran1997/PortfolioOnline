import { lazy, Suspense } from "react";
const Proj1 = lazy(() => import("../projects/Proj1"));
const Proj2 = lazy(() => import("../projects/Proj2"));
const Proj3 = lazy(() => import("../projects/Proj3"));
const Proj4 = lazy(() => import("../projects/Proj4"));
const Proj5 = lazy(() => import("../projects/Proj5"));
const Proj6 = lazy(() => import("../projects/Proj6"));

const Project = () => {
  return (
    <div className='scroll-smooth max-w-[1200px] mx-auto p-5' id='project'>

      {/* Project Title */}
      <div className='pb-8'>
        <p className='text-4xl mb-3 font-bold bg-gradient-to-r bg-pink-500 text-transparent bg-clip-text from-blue-500  to-pink-500  inline-block'>Project</p>
        <p className='text-gray-400'>Check out some of my recent project</p>
      </div>

      {/* Project Grid */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

        {/* Projects */}
        <Suspense fallback={<div className="text-white">Loading...</div>}>
        <Proj1 />
        <Proj2 />
        <Proj3/>
        <Proj4/>
        <Proj5/>
        <Proj6/>
        {/* Add more projects here */}
        </Suspense>
        

      </div>
    </div>
  )
}

export default Project