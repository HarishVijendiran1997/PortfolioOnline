import React from 'react'
import Proj1 from '../projects/Proj1'
import Proj2 from '../projects/Proj2'
import Proj3 from '../projects/Proj3'
import Proj4 from '../projects/Proj4'
import Proj5 from '../projects/Proj5'
import Proj6 from '../projects/Proj6'

const project = () => {
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
        <Proj1 />
        <Proj2 />
        <Proj3/>
        <Proj4/>
        <Proj5/>
        <Proj6/>
        
        {/* Add more projects here */}

      </div>
    </div>
  )
}

export default project