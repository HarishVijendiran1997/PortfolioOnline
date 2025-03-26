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
                console.log(data.country);
                return data;
            } catch (error) {
                console.error("Error fetching location:", error);
                return null;
            }
        }

        const displayCity = async () => {
            const location = await getLocation();
            setMessage(location.city)
            setIsVisible(true)
        }
        displayCity();
    }, [])

    return (
        <div className={`text-4xl text-white bg-pink-500 text-center transition-all duration-1000 ease-out 
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>{message}</div>
    )
}

export default WeatherMessage