import React from 'react'
import { Github, Linkedin, Mail } from "lucide-react"

const Hero = () => {
  const handleClick=(id:any,e:any)=>{
    const place = document.getElementById(id);
    console.log("Tıklama eventi:", e); 
    if(place){
      place.scrollIntoView({behavior:'smooth'});
    }
  }
  return (
    <div id="home" className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#1e1b4b] via-[#581c87] via-[#6b21a8] to-[#1e1b4b] text-white">
        <div className="text-center">
            <h1 className="text-5xl md:text-6xl text-white font-bold">Hi,<span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>I’m Pelin</span> </h1>
            <p className="text-xl mt-4 text-white">Frontend Developer</p>
            <div className='flex space-x-4'>
                <button className="glow mt-6 px-8 py-3 bg-gradient-to-r from-[#a855f7] to-[#9333ea] text-white rounded-lg shadow-lg hover:from-transparent hover:to-transparent hover:bg-purple-700 hover:scale-105 transition-all duration-300" onClick={(e)=>handleClick("projects",e)}>My Projects</button>
                <button className='mt-6 px-6 py-3 bg-purple-500/0 border-2 border-purple-400 text-white rounded-lg hover:bg-purple-500/20 transition-all duration-300' onClick={(e)=>handleClick("contact",e)}>Get in Contact</button>
            </div>
            <div className='flex items-center justify-center space-x-6 mt-10 '>
              <a href="https://github.com/pelinkoz" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition"> <Github size={28} /></a>
              <a href="https://www.linkedin.com/in/pelin-koz-5a2874222/" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition"> <Linkedin size={28}/></a>
              <a href="mailto:pel0652@gmail.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition"> <Mail size={28}/></a>

            </div>
        </div>
    </div>


  )
}

export default Hero
