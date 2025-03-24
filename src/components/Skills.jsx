import html from '../assets/html.webp'
import css from '../assets/css.webp'
import javascript from '../assets/javascript.webp'
import tailwind from '../assets/tailwind.webp'
import react from '../assets/react.webp'
import nodejs from '../assets/node-js.webp'
import express from '../assets/express.webp'
import mongodb from '../assets/mongodb.webp'
import mysql from '../assets/mysql.webp'
import jwt from '../assets/jwt.webp'
import Tech from '../helpers/Tech'

// Front-end Technologies
const frontendTech = [
    { src: html, alt: 'HTML skill', name: 'HTML' },
    { src: css, alt: 'CSS skill', name: 'CSS' },
    { src: javascript, alt: 'JavaScript language', name: 'JavaScript' },
    { src: tailwind, alt: 'Tailwind CSS tech', name: 'Tailwind' },
    { src: react, alt: 'React JS tech', name: 'React' }
];

// Back-end Technologies
const backendTech = [
    { src: nodejs, alt: 'Node.js language', name: 'Node.js' },
    { src: express, alt: 'Express language', name: 'Express' },
    { src: mongodb, alt: 'MongoDB tech', name: 'MongoDB' },
    { src: mysql, alt: 'MySQL tech', name: 'MySQL' },
    { src: jwt, alt: 'JWT tech', name: 'JWT' }
]


const Skills = () => {
    return (
        <>
        
            {/* Front-end Tech */}
            <div className='border border-gray-800 sm:my-5 bg-black text-gray-400 px-8 py-4 md:h-auto max-w-[100%] md:max-w-[1200px] md:rounded-t-4xl mx-auto flex flex-wrap justify-center items-center gap-6'>

                {/* Tech Title */}
                <div className='flex flex-col items-center w-full md:w-auto text-center'>
                    <h2 className='text-gray-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold md:m-5'>
                        My<br />Front-end<br />Stack
                    </h2>
                </div>

                {/* Frontend Technologies */}
                {frontendTech.map((tech, index) => (
                    <Tech key={index} srcPath={tech.src} srcAlt={tech.alt} srcName={tech.name} width={100} height={100} outerSmallScreenW='40px' outerLargeScreenW='100px' />
                ))}

            </div>

            {/* Back-end Tech*/}
            <div className='border border-gray-800 sm:my-5 bg-black text-gray-400 px-8 py-4 md:h-auto max-w-[100%] md:max-w-[1200px] md:rounded-b-4xl mx-auto flex flex-wrap justify-center items-center gap-6'>

                {/* Tech Title */}
                <div className='flex flex-col items-center w-full md:w-auto text-center'>
                    <h2 className='text-gray-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold md:m-5'>
                        My<br />Back-end<br />Stack
                    </h2>
                </div>

                {/* Map Backend Technologies */}
                {backendTech.map((tech, index) => (
                    <Tech key={index} srcPath={tech.src} srcAlt={tech.alt} srcName={tech.name} width={100} height={100} outerSmallScreenW='40px' outerLargeScreenW='100px' className={tech.bgColor || ''} />
                ))}

            </div>

        </>
    )
}

export default Skills