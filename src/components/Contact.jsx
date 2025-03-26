import { useState, useEffect, useRef } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [onSuccess, SetOnSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const { name, email, message } = data

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const formData = [
            [name, email, message, new Date().toLocaleString()]
        ]
        try {
            const response = await fetch("https://v1.nocodeapi.com/harishvijendiran/google_sheets/NHEqIhmqLvOSmmMP?tabId=Sheet1", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            }
            )
            const result = await response.json();
            SetOnSuccess(true)
            setTimeout(() => SetOnSuccess(false), 5000)
            setLoading(false)
            setData({ ...data, name: "", email: "", message: "", })
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

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
        <div ref={sectionRef} className={`max-w-[1200px] mx-auto sm:pt-20 sm:pb-18 p-5 scroll-smooth transition-all duration-1000 ease-out 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} id='contact'>
            
            {/* Contact Title */}
            <div className='text-center'>
                <h2 className='text-4xl font-bold leading-tight bg-gradient-to-r text-transparent bg-clip-text from-blue-500  to-pink-500 inline-block'>Contact Me</h2>
            </div>

            <div className='max-w-[800px] mx-auto'>
                <div className='mt-6 bg-[#161616] rounded-xl'>
                    <div className='p-10'>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} method='POST'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>

                                {/* Name */}
                                <div>
                                    <div className='mt-2.5'>
                                        <input aria-label='Enter Name here' type='text' name='name' id='' value={name} onChange={handleChange} required placeholder='Your Name' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-blue-600 rounded-md focus:outline-none focus:border-pink-600' />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <div className='mt-2.5'>
                                        <input aria-label='Enter Email here' type='email' name='email' id='' value={email} onChange={handleChange} required placeholder='Your Email' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-blue-600 rounded-md focus:outline-none focus:border-pink-600' />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className='sm:col-span-2'>
                                    <div className='mt-2.5'>
                                        <textarea aria-label='Enter Message here' name='message' id='' value={message} onChange={handleChange} placeholder='Your Message' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-blue-600 rounded-md focus:outline-none focus:border-pink-600' />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className='sm:col-span-2'>
                                    <button disabled={loading} aria-label='send button' type='submit' className={`text-xl w-full p-4 mt-2 text-white ${loading ? "bg-gray-800" : "bg-gradient-to-r from-blue-500 to-pink-500 rounded-md cursor-pointer hover:from-blue-600 hover:to-pink-600"}`}>Send</button>
                                </div>

                            </div>

                            {/* Success Message */}
                            {onSuccess && <div className='text-center mt-4 font-semibold text-green-500'>Message Sent Successfully!</div>}
                        </form>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact