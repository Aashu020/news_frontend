import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // optional: install lucide-react for icons

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-[3rem] py-3 flex justify-between items-center">
        {/* Logo / Site Name */}
        <a className="text-2xl font-bold tracking-wide" href='/'>NewsNow</a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center text-sm font-medium">
          <li className="hover:text-blue-400 transition"><a href="#hero">Home</a></li>
          <li className="hover:text-blue-400 transition"><a href="#latest">Latest</a></li>
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={toggleMenu}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-gray-800 px-4 py-3 space-y-3 text-sm font-medium">
          <li><a href="#hero" onClick={toggleMenu} className="block hover:text-blue-400">Home</a></li>
          <li><a href="#latest" onClick={toggleMenu} className="block hover:text-blue-400">Latest</a></li>
        </ul>
      )}
    </nav>
  );
}
