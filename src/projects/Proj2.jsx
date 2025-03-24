import React, { useState } from 'react'
import proj2 from '../assets/proj2.png'

//! Portfolio 

const Proj2 = () => {

  const [menu, setMenu] = useState(false)

  const handleClick = () => {
    setMenu(!menu)
    console.log(menu)
  }

  return (
    <div onClick={handleClick} className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>

      
      <img src={proj2} alt="" />

      {/* Menu for larger screens (shown on hover) */}
      <div className="hidden md:flex opacity-0 group-hover:opacity-100 bg-[gray]/60 absolute inset-0 flex-col justify-center items-center transition-opacity duration-300">
        <span className="text-2xl font-bold text-white tracking-wider"></span>
        <div className="pt-8 text-center">
          <a href="https://github.com/HarishVijendiran1997/Portfolio" target="_blank">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Github</button>
          </a>
          <a href="https://portfolio-online-eight.vercel.app/" target="_blank">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
          </a>
        </div>
      </div>

      {/* Menu for smaller screens (shown on click) */}
      {menu && (<div className='opacity-100 bg-[gray]/60 absolute inset-0 flex flex-col justify-center items-center'>
        <span className='text-2xl font-bold text-white tracking-wider'></span>
        <div className='pt-8 text-center'>
          <a href='https://github.com/HarishVijendiran1997/Portfolio' target='_blank'>
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
          </a>
          <a href='https://portfolio-online-eight.vercel.app/' target='_blank'>
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
          </a>
        </div>
      </div>)}


    </div>
  )
}

export default Proj2