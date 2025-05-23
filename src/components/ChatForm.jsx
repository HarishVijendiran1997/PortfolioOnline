import React, { useRef, useState } from 'react'
import { FaPaperPlane } from "react-icons/fa";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const [canSend, setCanSend] = useState(false);
  const inputRef = useRef();

  const handleInputChange = () => {
    const userMessage = inputRef.current.value.trim();
    setCanSend(userMessage.length > 0);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userMessage = inputRef.current.value.trim();
  
    if (!userMessage) return;
  
    inputRef.current.value = "";
    setCanSend(false);
  
    // Add user message to chat
    const updatedHistory = [...chatHistory, { role: 'user', text: userMessage }];
    setChatHistory(updatedHistory);
  
    // Simulate delay then call bot (add "Thinking..." inside generateBotResponse)
    setTimeout(() => {
      // Add "Thinking..." temporarily
      setChatHistory(prev => [...prev, { role: 'model', text: "Thinking..." }]);
  
      generateBotResponse([
        ...updatedHistory,
        {
          role: 'user',
          text: `Use the user's profile information above to answer the following question as accurately as possible:\n${userMessage}`
        }
      ]);
    }, 600);
  };
  

  return (
    <div className='relative w-full'>
      <form className="flex gap-2 items-center relative" onSubmit={handleFormSubmit}>
        <div className="relative w-full">
          <input
            ref={inputRef}
            type="text"
            className="w-full px-2 pr-12 py-2 placeholder-gray-400 text-white border-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-800"
            placeholder="Message here..."
            onChange={handleInputChange}
          />
          <button
            type="submit"
            disabled={!canSend}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center text-xl rounded-md p-2 font-bold transition-all duration-300 text-white 
        ${canSend
                ? 'bg-gradient-to-br from-blue-500 to-pink-500'
                : 'cursor-not-allowed bg-gradient-to-br from-blue-500/30 to-pink-500/30'}`}
          >
            <FaPaperPlane size={18} />
          </button>
        </div>
      </form>

    </div>
  );
};

export default ChatForm;
