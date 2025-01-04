import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white fixed w-full z-20 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        <div className="text-3xl font-extrabold tracking-wide">
          <Link to="/" className="hover:text-yellow-300 transition duration-300">
            Tondra.
          </Link>
        </div>

       
        <nav className="hidden md:flex gap-10 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-300 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/skills"
            className="hover:text-yellow-300 transition duration-300"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="hover:text-yellow-300 transition duration-300"
          >
            Projects
          </Link>
        </nav>

       
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-yellow-400 text-gray-900 font-semibold px-5 py-2 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
          >
            Contact
          </Link>
        </div>

       
        <button
          className="md:hidden flex items-center text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white">
          <nav className="flex flex-col items-center py-6 gap-6 text-lg font-medium">
            <Link
              to="/"
              className="hover:text-yellow-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/skills"
              className="hover:text-yellow-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className="hover:text-yellow-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="bg-yellow-400 text-gray-900 font-semibold px-5 py-2 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
