import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); 
    }
  };

  return (
    <nav className="bg-slate-900/80 border-b border-purple-500/20 fixed top-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          <button onClick={() => scrollSection("home")} className="flex items-center">
            <span className="text-white text-2xl font-bold ml-2">Portfolio</span>
          </button>

          <div className="hidden sm:flex space-x-4">
            <button className="text-white hover:text-purple-400 px-3 py-2" onClick={() => scrollSection("home")}>Home</button>
            <button className="text-white hover:text-purple-400 px-3 py-2" onClick={() => scrollSection("about")}>About</button>
            <button className="text-white hover:text-purple-400 px-3 py-2" onClick={() => scrollSection("projects")}>Projects</button>
            <button className="text-white hover:text-purple-400 px-3 py-2" onClick={() => scrollSection("contact")}>Contact</button>
          </div>

          <button className="sm:hidden text-white" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden flex flex-col bg-slate-900/90 px-4 py-4 space-y-2">
          <button className="text-white hover:text-purple-400 px-3 py-2" onClick={() => scrollSection("home")}>Home</button>
          <button className="text-white hover:text-purple-400 px-3 py-2" onClick={() => scrollSection("about")}>About</button>
          <button className="text-white hover:text-purple-400 px-3 py-2" onClick={() => scrollSection("projects")}>Projects</button>
          <button className="text-white hover:text-purple-400 px-3 py-2" onClick={() => scrollSection("contact")}>Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
