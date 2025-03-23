import React from 'react'
import aboutImg from '../assets/about.jpg'

const About = () => {
    return (
        <div className='scroll-smooth text-white max-w-[1200px] mx-auto my-12' id='about'>

            <div className='md:grid md:grid-cols-2 sm:py-16'>

                {/* About Text */}
                <div className='mt-4 md:mt-0 text-left flex'>
                    <div className='my-auto mx-6'>
                        <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r text-transparent bg-clip-text from-blue-500  to-pink-500  inline-block'>About me</h2>
                        <p className='text-base lg:text-lg'>Hey, I’m Harish. I love turning ideas into clean, functional, and user-friendly applications. I’m always exploring new technologies, solving problems, and refining my skills to build better digital experiences. I enjoy both the creative and logical sides of coding, and I’m constantly learning. I also love gaming, experimenting with new ideas, and finding ways to build or invent something unique, whether in code or life.</p>
                    </div>
                </div>

                {/* About Image */}
                <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300} />
            </div>
        </div>
    )
}

export default About