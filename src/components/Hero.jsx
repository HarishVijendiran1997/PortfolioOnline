import React from 'react'
import heroImage from "../assets/HeroImage.png"
import { TypeAnimation } from "react-type-animation"

const Hero = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-0 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>

            {/*Hero Image */}
            <div className='col-span-1 sm:px-5 md:px-0 my-auto mx-auto w-[300px] h-auto md:w-[250px] lg:w-[300px]'>
                <img src={heroImage} alt='hero-image' className='object-cover w-full h-full rounded-[60px] shadow-[4px_-4px_10px_rgb(236,72,153),-4px_4px_10px_rgb(96,165,250)] hover:shadow-[4px_-4px_10px_rgb(96,165,250),-4px_4px_10px_rgb(236,72,153)] transition-all duration-1000' />
            </div>

            <div className='col-span-2 px-5'>

                {/*Hero Text */}
                <h1 className='md:mt-15 text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='bg-gradient-to-r text-transparent bg-clip-text from-blue-500  to-pink-500'>
                        I'm a
                    </span><br />
                    <TypeAnimation
                        sequence={[
                            "Front-end Developer",
                            1000,
                            "Back-end Developer",
                            1000,
                            "Administrator",
                            1000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>

                {/*Hero Description */}
                <p className='text-white md:w-3/4 sm:text-lg my-6 lg:text-xl'>
                    I'm a passionate web developer who loves crafting sleek, user-friendly experiences and dreams big, both in code and life
                </p>

                {/*Hero Download CV */}
                <div className='my-8'>
                    <a href='/HarishVijendiranResume.pdf' download="HarishVijendiranResume.pdf" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-blue-500 to-pink-500 text-white hover:from-blue-600 hover:to-pink-600'>
                        Download CV
                    </a>

                    {/*Takes user to contact section*/}
                    <a href='/#contact' className='px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-blue-400 to-pink-400 text-white hover:border-none transition-all duration-300'>
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero