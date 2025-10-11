import React from 'react'

const Hero = () => {
  return (
    <div id="home" className="h-[calc(100vh-80px)] flex items-center justify-center bg-gray-100 rounded-sm">
        <div className="text-center text-black">
            <h1 className="text-5xl font-bold">Hi, I’m Pelin</h1>
            <p className="text-xl mt-4">Frontend Developer</p>
            <div className='flex space-x-4'>
                <button className="mt-6 px-6 py-3 bg-indigo-700 text-white rounded-lg shadow">My Projects</button>
                <button className='mt-6 px-6 py-3 bg-white border-2 border-indigo-700 text-indigo-700 rounded-lg shadow'>Get in Contact</button>
            </div>
        </div>
    </div>


  )
}

export default Hero
