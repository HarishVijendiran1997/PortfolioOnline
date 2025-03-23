import React, { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [onSuccess, SetOnSuccess] = useState(false)
    const { name, email, message } = data

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = [
            [name, email, message]
        ]
        try {
            const response = await fetch(import.meta.env.VITE_GOOGLE_FORM_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            }
            )
            const result = await response.json();
            console.log(result);
            SetOnSuccess(true)
            setTimeout(() => SetOnSuccess(false), 5000)
            setData({ ...data, name: "", email: "", message: "", })
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className='max-w-[1200px] mx-auto sm:pt-20 sm:pb-18 p-5 scroll-smooth' id='contact'>

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
                                        <input type='text' name='name' id='' value={name} onChange={handleChange} required placeholder='Your Name' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-blue-600 rounded-md focus:outline-none focus:border-pink-600' />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <div className='mt-2.5'>
                                        <input type='email' name='email' id='' value={email} onChange={handleChange} required placeholder='Your Email' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-blue-600 rounded-md focus:outline-none focus:border-pink-600' />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className='sm:col-span-2'>
                                    <div className='mt-2.5'>
                                        <textarea name='message' id='' value={message} onChange={handleChange} placeholder='Your Message' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-blue-600 rounded-md focus:outline-none focus:border-pink-600' />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className='sm:col-span-2'>
                                    <button type='submit' className="text-xl w-full p-4 mt-2 text-white bg-gradient-to-r from-blue-500 to-pink-500 rounded-md cursor-pointer hover:from-blue-600 hover:to-pink-600">Send</button>
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