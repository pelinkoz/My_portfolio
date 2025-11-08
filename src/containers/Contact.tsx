import React from 'react'
import { Github, Linkedin, Mail } from "lucide-react"

const Contact = () => {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen py-20 bg-gradient-to-br from-[#1e1b4b] via-[#581c87] to-[#1e1b4b] text-white">

    <div className="text-center mb-10">
      <h1 className="font-bold text-5xl mb-4 bg-gradient-to-br from-purple-200 to-purple-400 bg-clip-text text-transparent">Get In Touch</h1>
      <p className="text-gray-300">Have a project in mind or want to collaborate? I'd love to hear from you!</p>
    </div>
  
    <div className="w-11/12 md:w-2/3 lg:w-1/2 bg-slate-800 rounded-xl border-2 border-gray-600 p-10">
      <form className="w-full space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-200 mb-2">Your Name</label>
          <input type="text" placeholder="John Doe" className="w-full rounded-md bg-[#0f1623] border border-purple-500 focus:ring-2 focus:ring-purple-500 text-gray-200 px-4 py-3 transition duration-300"/>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-200 mb-2">Your Email</label>
          <input type="text" placeholder="john@example.com" className="w-full rounded-md bg-[#0f1623] border border-purple-500 focus:ring-2 focus:ring-purple-500 text-gray-200 px-4 py-3 transition duration-300"/>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-200 mb-2">Your Message</label>
          <textarea placeholder="Tell me about your project..." className="w-full h-40 rounded-md bg-[#0f1623] border border-purple-500 focus:ring-2 focus:ring-purple-500 text-gray-200 px-4 py-3 transition duration-300 resize-none"></textarea>
        </div>
        <button type='button' className="w-full h-12 bg-purple-600 text-white rounded-md mt-4 hover:bg-purple-700 transition">Send Message</button>
      </form>
    </div>
  
    <div className="flex justify-center items-center space-x-8 mt-10">
      <a href="#" className="hover:text-purple-400 transition"><Github size={28} /></a>
      <a href="#" className="hover:text-purple-400 transition"><Linkedin size={28} /></a>
      <a href="#" className="hover:text-purple-400 transition"><Mail size={28} /></a>
    </div>
  
  </div>
  
  )
}

export default Contact
