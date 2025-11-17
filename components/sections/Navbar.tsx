import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-75 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-xl font-bold">My Portfolio</a>
        <div className="hidden md:flex space-x-4">
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#skills" className="text-gray-300 hover:text-white">Skills</a>
          <a href="#experience" className="text-gray-300 hover:text-white">Experience</a>
          <a href="#education" className="text-gray-300 hover:text-white">Education</a>
          <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
