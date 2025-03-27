import { useEffect, useState } from "react"
import heroImage from "../assets/HeroImage.webp"
import { TypeAnimation } from "react-type-animation"

const Hero = () => {
    const [isPicVisible, setIsPicVisible] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [isBtnVisible, setIsBtnVisible] = useState(false)
    const [isBtn2Visible, setIsBtn2Visible] = useState(false)
    const [isTypingVisible, setIsTypingVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsTypingVisible(true)
        }, 2400);
        setTimeout(() => {
            setIsBtn2Visible(true)
        }, 1600);
        setTimeout(() => {
            setIsBtnVisible(true)
        }, 1200);
        setTimeout(() => {
            setIsVisible(true)
        }, 800);
        setTimeout(() => {
            setIsPicVisible(true)
        }, 500);
    }, [])
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-0 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black`}>

            {/*Hero Image */}
            <div role='img' className={`col-span-1 sm:px-5 md:px-0 my-auto mx-auto w-[300px] h-auto md:w-[250px] lg:w-[300px] transition-all duration-1000 ease-out 
        ${isPicVisible ? "opacity-100 translate-y-0 md:translate-x-0" : "opacity-0 translate-y-10 md:translate-x-20 md:translate-y-0 "}`}>

                <img aria-label='portrait of Harish Vijendiran' src={heroImage} alt='portrait of Harish Vijendiran' className='object-cover w-full h-full rounded-[60px] shadow-[4px_-4px_10px_rgb(236,72,153),-4px_4px_10px_rgb(96,165,250)] hover:shadow-[4px_-4px_10px_rgb(96,165,250),-4px_4px_10px_rgb(236,72,153)] transition-all duration-1000' />
            </div>

            <div className={`col-span-2 px-5 transition-all duration-1000 ease-out 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

                {/*Hero Text */}
                <h1 aria-label='I`m a front-end developer' className='md:mt-15 text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='bg-gradient-to-r text-transparent bg-clip-text from-blue-500  to-pink-500'>
                        I'm a
                    </span><br />
                    {isTypingVisible ? (<TypeAnimation
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
                    />) : (<span>Front-end Developer</span>)}
                </h1>

                {/*Hero Description */}
                <p className='text-white md:w-3/4 sm:text-lg my-6 lg:text-xl'>
                    I'm a passionate web developer who loves crafting sleek, user-friendly experiences and dreams big, both in code and life
                </p>

                {/*Hero Download CV */}
                <div className='my-8'>
                    <a href='/HarishVijendiranResume.pdf' download="HarishVijendiranResume.pdf" className={`px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-blue-500 to-pink-500 text-white hover:from-blue-600 hover:to-pink-600 text-center transition-all duration-1000 ease-out 
        ${isBtnVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        Download CV
                    </a>

                    {/*Takes user to contact section*/}
                    <a href='/#contact' className={`px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-blue-400 to-pink-400 text-white hover:border-none transition-all duration-1000 ease-out 
        ${isBtn2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-x-10"}`}>
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero