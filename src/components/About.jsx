import aboutImg from '../assets/about.webp'
import { useState, useEffect, useRef } from 'react'

const About = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting)
        }, { threshold: 0.3 })

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };

    }, [])
    return (
        <div ref={sectionRef} className={`scroll-smooth text-white max-w-[1200px] mx-auto my-6 transition-all duration-1000 ease-out 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} id='about'>

            <div className='md:grid md:grid-cols-2 sm:py-16'>

                {/* About Text */}
                <div className='mt-4 md:mt-0 text-left flex'>
                    <div className='my-auto mx-6'>
                        <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r text-transparent bg-clip-text from-blue-500  to-pink-500  inline-block'>About me</h2>
                        <p className='text-base lg:text-lg'>Hey, I’m Harish. I love turning ideas into clean, functional, and user-friendly applications. I’m always exploring new technologies, solving problems, and refining my skills to build better digital experiences. I enjoy both the creative and logical sides of coding, and I’m constantly learning. I also love gaming, experimenting with new ideas, and finding ways to build or invent something unique, whether in code or life.</p>
                    </div>
                </div>

                {/* About Image */}
                <img role='img' aria-label='Inspiration to explore' alt='Inspiration to explore' className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300} />
            </div>
        </div>
    )
}

export default About