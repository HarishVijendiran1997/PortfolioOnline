import { FaRobot } from 'react-icons/fa'

const ChatMessage = ({ chat }) => {
    return (
        !chat.hideInChat && (
            <div className={`flex gap-2.5 ${chat.role === "model" ? "justify-start" : "justify-end"} items-end`}>
                {/* Show "Bot" label for bot messages */}
                {chat.role === "model" && <span className="rounded-full text-white bg-gradient-to-br from-blue-500 to-pink-500 cursor-pointer hover:from-blue-600 hover:to-pink-600 p-2 font-bold"><FaRobot size={16} /></span>}

                {chat.isError ? (
                    <p className="px-3 text-s break-words whitespace-pre-wrap py-2 md:max-w-[75%] max-w-[90%] bg-red-600 text-white rounded-br-xl rounded-tl-xl rounded-tr-xl">
                        {chat.text}
                    </p>
                ) : (
                    <p className={`px-3 text-s break-words whitespace-pre-wrap py-2 md:max-w-[75%] max-w-[90%]
                ${chat.role === "model"
                            ? "bg-purple-700 hover:shadow-lg text-white rounded-br-xl rounded-tl-xl rounded-tr-xl"
                            : "bg-pink-700 hover:shadow-lg text-white rounded-bl-xl rounded-tl-xl rounded-tr-xl"}
            `}>
                        {!chat.isError && chat.text === "Thinking..." ? (
                            <span className="animate-[pulse_1.5s_infinite]">Thinking<span className="animate-[bounce_1.5s_infinite]">.</span><span className="animate-[bounce_1.7s_infinite]">.</span><span className="animate-[bounce_1.9s_infinite]">.</span></span>
                        ) : (
                            chat.text
                        )}
                    </p>
                )}
            </div>
        )
    );
};

export default ChatMessage;
