import rice from '../images/rice.jpg';
import bigdata from '../images/bigdata.jpeg';
import portfolyo from '../images/portfolyo.jpeg';
import skin from '../images/skin.jpeg';
import { ExternalLink } from "lucide-react";

const projects = [
  {
    image: skin,
    title: 'Skinalyzer',
    description: 'A deep learning–based desktop app for skin cancer detection with secure image handling and visual risk analysis.',
    used: ['Python', 'PySide6', 'Deep Learning', 'TensorFlow'],
    view: 'https://github.com/CankayaUniversity/ceng-407-408-2024-2025-Skinalyzer'
  },
  {
    image: bigdata,
    title: 'LinkedIn Project Bigdata',
    description: 'A big data streaming project using PySpark and Kafka, focusing on job posting data cleaning, processing, and real-time analysis.',
    used: ['PySpark', 'Kafka', 'Python', 'Big Data'],
    view: 'https://github.com/pelinkoz/LinkedInProject_Bigdata'
  },
  {
    image: rice,
    title: 'Rice Classification CNN',
    description: 'A CNN-based image classification project for identifying different rice types.',
    used: ['Python', 'TensorFlow', 'CNN', 'Image Processing'],
    view: 'https://github.com/pelinkoz/Rice_classification_CNN'
  },
  {
    image: portfolyo,
    title: 'My Portfolio',
    description: 'A React and TypeScript–based personal portfolio with responsive design and project showcase.',
    used: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    view: 'https://github.com/pelinkoz/My_portfolio'
  }
];

const MyProjects = () => {
  return (
    <div className='bg-gradient-to-r from-black to-slate-900 py-20 min-h-screen'>

      <div className='text-center px-4'>
        <h1 className='mb-5 text-3xl sm:text-4xl md:text-5xl font-bold text-purple-400'>My Projects</h1>
        <p className='text-gray-400 mb-10 text-sm sm:text-base md:text-lg'>
          Here are some of my recent works. Each project represents a unique challenge and solution.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className='w-full h-full rounded-2xl text-white bg-slate-800 border-2 border-gray-600 hover:scale-105 hover:border-purple-400 transition-all duration-300 flex flex-col'
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-60 object-cover rounded-t-2xl"
              />

              <h2 className='font-bold px-6 py-2 text-white text-lg'>{project.title}</h2>

              <p className='text-sm px-6 text-gray-400 flex-1'>{project.description}</p>

              <div className="flex flex-wrap gap-2 px-6 py-2">
                {project.used.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs text-purple-300 border border-purple-400 rounded-full bg-transparent hover:bg-purple-500/20 transition-colors"
                  >
                    {tech}
                  </span>    
                ))}
              </div>

              <a 
                href={project.view} 
                target="_blank" 
                rel="noreferrer" 
                className='flex items-center px-6 py-2 gap-2 text-purple-400 hover:text-purple-300 transition mt-auto mb-4'
              >
                View Project
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyProjects;
