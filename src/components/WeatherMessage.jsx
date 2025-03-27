'use client'

import React, { useEffect, useState } from 'react'

const WeatherMessage = () => {
    const [message, setMessage] = useState("checking fo the weather")
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const getLocation = async () => {
            try {
                let response = await fetch("https://ipinfo.io/json?token=2fe29a33f152d4");
                let data = await response.json();
                return data.region;
            } catch (error) {
                return null;
            }
        }

        const getWeather = async (cityName) => {
            const API_KEY = "2cc0505380c69952ae1ed2d7337bc39c"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;

            try {
                let response = await fetch(url)
                let data = await response.json();
                return data.main?.temp || null;
            } catch (error) {
                return null;
            }
        }

        const displayCity = async () => {


            const [cityName, temp] = await Promise.all([getLocation(), getLocation().then(getWeather)]);

            if (!cityName || temp === null) return;

            const getMessage = (temp, cityName) => {
                const hotMessages = [
                    `🔥 It's scorching in ${cityName}! Cool down & say hi! 🍉`,
                    `☀️ So hot in ${cityName}! Let's chill & chat! ❄️`,
                    `🥵 Feels like an oven in ${cityName}! Let's talk!`,
                    `🌞 Too warm? Let's grab a drink & connect!`
                ];

                const warmMessages = [
                    `😎 Perfect weather in ${cityName}! Let's chat!`,
                    `🌤️ Breezy in ${cityName}! Fancy a convo?`,
                    `🌞 Nice day in ${cityName}! Let's talk!`,
                    `🍃 The weather’s just right! Let's connect!`
                ];

                const coldMessages = [
                    `❄️ Chilly in ${cityName}! Grab a coffee & let's chat! ☕`,
                    `🥶 Cold vibes in ${cityName}! Let's warm up with a chat!`,
                    `🌬️ Stay cozy in ${cityName}! Let's talk! 🔥`,
                    `🧣 It's sweater weather! Let's connect! 📞`
                ];

                if (temp > 25) return hotMessages[Math.floor(Math.random() * hotMessages.length)];
                if (temp > 15) return warmMessages[Math.floor(Math.random() * warmMessages.length)];
                return coldMessages[Math.floor(Math.random() * coldMessages.length)];
            };

            // Inside displayCity function
            const newMessage = getMessage(temp, cityName);

            // Update message and show message for 1 second
            setMessage(newMessage);
            setTimeout(() => {
                setIsVisible(true);
            }, 1000);
        };

        displayCity();
    }, [])


    return (
        <div className='flex mt-2'>
            <div
                className={`text-white border md:border-gray-900 border-gray-800 md:rounded-b-5xl rounded-4xl mx-auto h-[60px] px-4 inline-flex justify-center items-center text-center transition-all duration-1000 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
            >
                {message}
            </div>
        </div>
    )
}

export default WeatherMessage