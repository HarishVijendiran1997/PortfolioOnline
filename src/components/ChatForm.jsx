import React, { useRef } from 'react'
import { FaPaperPlane } from "react-icons/fa";

const chatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {

  const inputRef = useRef()

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userMessage = inputRef.current.value.trim()
    if (!userMessage) return
    inputRef.current.value = ""

    //Update the chat history with the user message
    setChatHistory((history) => [...history, { role: 'user', text: userMessage }])

    setTimeout(() => {
      // Simulate the model's response after 600ms as thinking
      setChatHistory((history) => [...history, { role: 'model', text: "Thinking..." }])

      // Generate the bot's response
      generateBotResponse([...chatHistory, { role: 'user', text: `Using the  details provided above, please address this query: ${userMessage}` }])
    }, 600)
    console.log(userMessage)

  }


  return (
    <div className='relative w-full'>

      <form className="flex gap-2 items-center" onSubmit={handleFormSubmit}>
        <input
          ref={inputRef}
          type="text"
          className="flex-1 px-2 py-2 placeholder-gray-400 text-white border-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-800"
          placeholder="Message here..."
          required
        />
        <button
          type="submit"
          className=" flex items-center justify-center text-xl rounded-md text-white bg-gradient-to-br from-blue-500 to-pink-500 p-2 font-bold transition-all duration-300">
          <FaPaperPlane size={18} />
        </button>
      </form>

    </div>
  )
}

export default chatForm