import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen py-20 bg-gradient-to-br from-[#1e1b4b] via-[#581c87] via-[#6b21a8] to-[#1e1b4b] text-white'>
        <div className='text-center'>
            <h1 className='font-bold mb-15 text-5xl'><span className='bg-gradient-to-br from-purple-200 to-purple-400 bg-clip-text text-transparent'>Get In Touch</span></h1>
            <p className='text-gray-300 mb-6'>Have a project in mind or want to collaborate? I'd love to hear from you!</p>
        </div>
        <div className='flex flex-wrap gap-6 items-start justify-center'>
            <div className='w-11/12 md:w-2/3 lg:w-1/2 h-128 bg-slate-800 rounded-2xl border-2 border-gray-600'>

            </div>
        </div>
      
    </div>
  )
}

export default Contact
