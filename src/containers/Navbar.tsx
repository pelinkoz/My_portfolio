import React from 'react' 

const Navbar = () => {
    const scrollSection=(id:any)=>{
        const section = document.getElementById(id);
        if (section){
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

  return (
    <nav className="bg-slate-900/80 border-b border-purple-500/20 fixed top-0 w-full z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                <button className='flex' onClick={()=>scrollSection("home")}>
                    <img className="h-5 w-auto" src="images/logo.png" alt="Logo" />
                    <span className="text-white text-2xl font-bold ml-2">Portfolio</span>
                </button>
                <div className='flex space-x-4'>
                    <button className="text-white hover:text-purple-400 rounded-md px-3 py-2" onClick={() => scrollSection("home")}>Home</button>
                    <button className="text-white hover:text-purple-400 rounded-md px-3 py-2" onClick={() => scrollSection("about")}>About</button>
                    <button className="text-white hover:text-purple-400 rounded-md px-3 py-2" onClick={() => scrollSection("projects")}>Projects</button>
                    <button className="text-white hover:text-purple-400 rounded-md px-3 py-2" onClick={() => scrollSection("contact")}>Contact</button>
                </div>
            </div>   
        </div>
    </nav>  
  )
};

export default Navbar
