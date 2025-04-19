import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-md text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qCreqkTZL0F0bF9kZctFE1XVFocO__70kw&s"
            className="w-12 h-12 object-cover rounded"
            alt="Logo"
          />
        </a>

        <div className="hidden md:flex items-center space-x-10">
          <a href="#home" className="hover:text-gray-400 transition">Home</a>
          <a href="#pricing" className="hover:text-gray-400 transition">Pricing</a>
          <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
              </div>
              
        <div className="hidden md:flex items-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">GitHub</a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">Discord</a>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-3 pb-4">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#pricing" className="hover:text-gray-400">Pricing</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Discord</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


