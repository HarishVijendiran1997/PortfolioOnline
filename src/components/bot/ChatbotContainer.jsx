import React, { useEffect, useRef, useState } from 'react'
import ChatForm from '../ChatForm'
import ChatMessage from '../ChatMessage'
import { FaRobot } from 'react-icons/fa'
import { FaComments } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
// import { myInfo } from '../../myInfo'
// import { FaArrowDown } from "react-icons/fa"
export const myInfo = `
    Introduction:
    Hi, I’m Harish, a frontend-focused full-stack developer with experience in React, TailwindCSS, Node.js, and MongoDB. I’m passionate about building scalable web applications with great UI/UX. I also have backend knowledge in Spring Boot and PostgreSQL.

    Looking for:
    I’m actively seeking frontend or full-stack developer roles where I can contribute my skills in React, JavaScript, and API integrations while growing as a developer.

    Current Work:
    - Integrated a chatbot into my portfolio using the Gemini API.
    - Developing an NPM package for coding problems to use in a Vite React project.

    Projects:
    - **WorkoutX App** – A workout management app using Node.js, Express.js, MongoDB, authentication, and a fake payment system for learning purposes.
    - **Portfolio Website** – Showcasing my skills and projects. (Check it out: [Portfolio Link](https://portfolio-online-eight.vercel.app/))
    - **CRUD App** – Developed using Spring Boot and MySQL.

    Skills:
    - **Frontend:** React, TailwindCSS, JavaScript
    - **Backend:** Node.js, Express.js, Spring Boot
    - **Databases:** MongoDB, MySQL, PostgreSQL
    - **Other:** Git, API integration, Chatbot development (Gemini API)

    Future Goals:
    - Master advanced frontend techniques and explore system design.
    - Learn Golang for backend development.
    - Build more projects, contribute to open-source, and eventually start a business.

    Stay Connected:
    - LinkedIn: https://www.linkedin.com/in/harish-v-4a674b223/
    - GitHub: https://github.com/HarishVijendiran1997
    - Email: Harish.vijendiran@gmail.com
`;


const ChatbotContainer = () => {

    const [chatHistory, setChatHistory] = useState([
        {
            hideInChat: true,
            role: "model",
            text: myInfo
        }
    ])
    const [showChatBot, setShowChatBot] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [isBouncing, setIsBouncing] = useState(false)
    const chatBodyRef = useRef()

    const generateBotResponse = async (history) => {

        //Helper function to update chat history
        const updateHistory = (text, isError = false) => {
            setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), { role: "model", text, isError }])
        }


        //formatting the history for API requests
        history = history.map(({ role, text }) => ({ role, parts: [{ text }] }))
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ contents: history })
        }

        try {
            const response = await fetch(import.meta.env.VITE_GOOGLE_API_URL, requestOptions)
            const data = await response.json()
            if (!response.ok) throw new Error(data.error.message || "Something went wrong")
            // Extract the bot response and format it for display
            const botMessage = data?.candidates?.[0]?.content?.parts?.[0]?.text?.replace(/\*\*(.*?)\*\*/g, "$1").trim() || "I couldn't understand that.";

            // Add the bot message to the chat history
            updateHistory(botMessage, false)
        } catch (error) {
            updateHistory(error.message, true)
            // console.log(error);
        }
    }

    useEffect(() => {
        chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" })
    }, [chatHistory])

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true)
            setTimeout(() => {
                setIsBouncing(true)
                setTimeout(() => {
                    setIsBouncing(false)
                }, 2000)
            }, 1800)
        }, 1800);

    }, [])

    return (
        <div className="container w-full flex overflow-hidden flex-col items-center">

            {/* Chat Toggle */}
            <button onClick={() => setShowChatBot(prev => !prev)} id='chat-toggle' className={`transition-all duration-1000 text-white fixed md:bottom-8 md:right-9 bottom-[15px] right-5 z-50 h-12 w-12 flex items-center justify-center ${showChatBot ? "border rounded-xl border-gray-700" : "rounded-full bg-gradient-to-br from-blue-500 to-pink-500 p-2"} ${isVisible ? "translate-x-0" : "translate-x-50"} ${isBouncing ? "animate-ping" : ""}`}>
                {showChatBot ? (<span className='absolute rotate-180 transition-all duration-200'>
                    <FaTimes size={24} />
                </span>) : (<span className='absolute  transition-all duration-200'>
                    <FaComments size={24} />
                </span>
                )}
            </button>


            {/* Chatbot Container */}
            <div className={`container shadow-[4px_-4px_10px_rgb(236,72,153),-4px_4px_10px_rgb(96,165,250)]  bg-black/70 backdrop-blur-md w-[400px] transition-all duration-500 ease-in-out ${showChatBot ? "translate-x-0 translate-y-0 scale-100 opacity-100 pointer-events-auto" : "translate-x-50 translate-y-80 scale-0 opacity-0 pointer-events-none"} rounded-bl-2xl rounded-tr-2xl rounded-tl-2xl fixed z-10 md:bottom-1/7 bottom-1/10 md:right-1/40`}>
                {/* Header */}
                <div className="border border-b-gray-700 bg-black my-auto mx-auto flex items-center p-4 z-20 justify-between rounded-t-2xl">


                    {/* Bot Info */}
                    <div className="flex gap-2.5 items-center">
                        <span className="rounded-md text-white bg-gradient-to-br from-blue-500 to-pink-500 p-2 font-bold"><FaRobot size={16} /></span>
                        <h2 className="text-white text-lg font-semibold">Harish AI Assistant</h2>
                    </div>


                    {/* Close Button */}
                    {/* <button onClick={() => setShowChatBot(prev => !prev)} className="text-white p-2 hover:bg-gradient-to-br border border-gray-700 cursor-pointer hover:from-blue-600 hover:to-pink-600 rounded-full"><FaTimes size={18} /></button> */}

                </div>

                {/* Chat Messages */}
                <div ref={chatBodyRef} className="md:h-[300px] h-[460px] overflow-y-auto px-6 py-5 space-y-3" style={{ scrollbarWidth: "thin", scrollbarColor: "#333 transparent" }}>
                    {/* Bot Message */}
                    <div className="flex gap-2.5 items-end">
                        <p className="rounded-full text-white bg-gradient-to-br from-blue-500 to-pink-500 p-2 font-bold"><FaRobot size={16} /></p>
                        <p className="px-3 text-s break-words whitespace-pre-wrap py-2 max-w-[75%] bg-purple-700 text-white rounded-br-xl rounded-tl-xl rounded-tr-xl">
                            Hi, Harish here. How can I help you?
                        </p>
                    </div>
                    {/* renders the chat history dynamically*/}
                    {chatHistory.map((chat, index) => (
                        <ChatMessage key={index} chat={chat} />
                    ))}
                </div>

                {/* Footer / Input Field */}
                <div className="p-4 border-t-gray-700 border bg-black rounded-b-2xl">
                    <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
                </div>
            </div>
        </div>

    )
}

export default ChatbotContainer