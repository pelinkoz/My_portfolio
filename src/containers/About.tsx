import React from 'react'

const skills = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    gradient: 'from-purple-500 to-violet-600'
  },
  {
    title: 'Backend',
    items: ['Node.js', 'PostgreSQL', 'Express', 'REST APIs'],
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    title: 'Tools',
    items: ['Git', 'Docker', 'AWS', 'CI/CD'],
    gradient: 'from-pink-500 to-purple-600'
  },
  {
    title: 'Design',
    items: ['UI/UX', 'Figma', 'Responsive', 'Accessibility'],
    gradient: 'from-pink-500 to-violet-600'
  },
];

const About = () => {
  return (
    <div className='bg-slate-900 min-h-screen'>
      <div className='text-center text-black'>
        <h1 className='text-5xl py-20 font-bold'><span className='bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent'>About Me</span></h1>
      </div>

      <div className='flex'>
        <div className='w-1/2 flex flex-col ml-5 px-10 items-center justify-center'>
          <p className='text-[18px] text-white/80'>
          Hi! I’m Pelin Koz, a Computer Engineering graduate from Çankaya University. I’m passionate about developing efficient, user-focused software and exploring how technology can solve real-world problems. During my academic journey and internships, I gained experience with Python, React, and SQL, working on both frontend and backend development.
          </p>
          <p className='text-[18px] text-white/80'>
          I’m particularly interested in artificial intelligence and network cybersecurity, and I’m always eager to learn new technologies that push my creativity and technical skills further. I believe in continuous growth and enjoy turning complex ideas into simple, effective solutions.
          </p>
        </div>

        <div className='w-1/2 flex flex-wrap gap-6 items-start justify-center'>
          {skills.map((skill,index)=>
            <div
              key={index} className={`w-64 p-6 rounded-2xl text-white bg-gradient-to-br ${skill.gradient} shadow-lg transform transition-transform duration-300 hover:scale-105`}>
              <h2 className='text-lg font-bold mb-3'>{skill.title}</h2>
              <ul className='space-y-1 text-sm text-gray-100'>
                {skill.items.map((item,i)=>(
                  <li key={i}>• {item}</li>
                ))}  
              </ul>  
            </div>
          )}
            
        </div>

      </div>
      
    </div>
  )
}

export default About
