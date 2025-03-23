import React from 'react'

//This helper function used to create a new instance of skills or technologies
const Tech = ({ srcPath, srcAlt, srcName, width, height, outerSmallScreenW, outerLargeScreenW }) => {
    return (
        <div className={`flex flex-col items-center m-4 sm:my-0 w-[${outerSmallScreenW}] md:w-[${outerLargeScreenW}]`}>
            <img src={srcPath} alt={srcAlt} width={width} height={height} />
            <p className='mt-2'>{srcName}</p>
        </div>
    )
}

export default Tech