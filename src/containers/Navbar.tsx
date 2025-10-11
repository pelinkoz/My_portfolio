import React from 'react' 

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <a className='flex'>
                    <img className="h-5 w-auto" src="images/logo.png" alt="Logo" />
                    <span className="text-white text-2xl font-bold ml-2">Portfolio</span>
                </a>
                <div className='flex space-x-4'>
                    <a className="text-white hover:bg-gray-900 rounded-md px-3 py-2" href="/add-job.html">Home</a>
                    <a className="text-white hover:bg-gray-900 rounded-md px-3 py-2" href="/index.html">About</a>
                    <a className="text-white hover:bg-gray-900 rounded-md px-3 py-2" href="/index.html">Projects</a>
                    <a className="text-white hover:bg-gray-900 rounded-md px-3 py-2" href="/jobs.html">Contact</a>
                </div>
            </div>   
        </div>
    </nav>  
  )
};

export default Navbar
