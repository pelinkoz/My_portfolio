import React from 'react'
import rice from '../images/rice.jpg';

const projects= [
  {
    image:rice,
    title:'Skinalyzer',
    description:'bla bla',
    used:['react', 'typecript', 'node.js'],
  },
  {
    image:rice,
    title:'LinkedInProject_Bigdata',
    description:'bla ',
    used:['react', 'typecript', 'node.js'],
  },
  {
    image:rice,
    title:'Rice_classification_CNN',
    description:'bla bla bla',
    used:['react', 'typecript', 'node.js'],
  },
  {
    image:rice,
    title:'My_portfolio',
    description:'bla bla bla bla',
    used:['react', 'typecript', 'node.js'],
  }
]

const MyProjects = () => {
  return (
    <div className='bg-gradient-to-r py-20 from-black to-slate-900 min-h-screen'>
      <div className='text-center'>
        <h1 className='mb-15 text-5xl font-bold text-purple-400'>My Projects</h1>
        <p className='text-gray-400 mb-10'>Here are some of my recent works. Each project represents a unique challenge and solution.</p>
      </div>
      <div className='flex flex-wrap gap-6 items-start justify-center'>
        {projects.map((project,index)=>
          <div key={index} className='w-128  rounded-2xl text-white bg-slate-800 border-2 border-gray-600 hover:scale-105 hover:border-purple-400 transition-all duration-300'>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover rounded-tr-xl rounded-tl-xl mb-4"/>

            <h1 className='font-bold px-6 py-2 text-white text-lg'>{project.title}</h1>
            <p className='text-sm px-6 py-2 text-gray-400'>{project.description}</p>
            <div className="flex flex-wrap gap-3 px-6 py-4">
              {project.used.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 text-sm text-purple-300 border border-purple-400 rounded-full bg-transparent hover:bg-purple-500/20 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
 

          </div>
        )}
      </div>
      
    </div>
  )
}

export default MyProjects
