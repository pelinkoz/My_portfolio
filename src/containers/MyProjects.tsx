import rice from '../images/rice.jpg';
import bigdata from '../images/bigdata.jpeg';
import portfolyo from '../images/portfolyo.jpeg';
import skin from '../images/skin.jpeg'
import { ExternalLink } from "lucide-react";

const projects= [
  {
    image:skin,
    title:'Skinalyzer',
    description:'A deep learning–based desktop app for skin cancer detection with secure image handling and visual risk analysis.',
    used:['Python', 'PySide6', 'Deep Learning', 'TensorFlow'],
    view:'https://github.com/CankayaUniversity/ceng-407-408-2024-2025-Skinalyzer'
  },
  {
    image: bigdata,
    title:'LinkedIn Project Bigdata',
    description:'A big data streaming project using PySpark and Kafka, focusing on job posting data cleaning, processing, and real-time analysis.',
    used:['PySpark', 'Kafka', 'Python', 'Big Data'],
    view:'https://github.com/pelinkoz/LinkedInProject_Bigdata'
  },
  {
    image:rice,
    title:'Rice Classification CNN',
    description:'A CNN-based image classification project for identifying different rice types.',
    used:['Python', 'TensorFlow', 'CNN', 'Image Processing'],
    view:'https://github.com/pelinkoz/Rice_classification_CNN'
  },
  {
    image:portfolyo ,
    title:'My Portfolio',
    description:'A React and TypeScript–based personal portfolio with responsive design and project showcase.',
    used:['React', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    view:'https://github.com/pelinkoz/My_portfolio'
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
          <div key={index} className='w-140 h-115 rounded-2xl text-white bg-slate-800 border-2 border-gray-600 hover:scale-105 hover:border-purple-400 transition-all duration-300'>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-60 object-cover rounded-tr-xl rounded-tl-xl mb-4"/>

            <h1 className='font-bold px-6 py-2 text-white text-lg'>{project.title}</h1>
            <p className='text-sm px-6 text-gray-400'>{project.description}</p>
            <div className="flex flex-wrap gap-3 px-6 py-4">
              {project.used.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 text-sm text-purple-300 border border-purple-400 rounded-full bg-transparent hover:bg-purple-500/20 transition-colors">
                  {tech}
                </span>    
              ))}
           </div>
            <a href={project.view} target="_blank" rel="noreferrer" className='flex items-center px-7 gap-1 text-purple-400 hover:text-purple-300 transition'>
              View Project
              <ExternalLink size={16} />
            </a>
          </div>
        )}
      </div>
      
    </div>
  )
}

export default MyProjects
