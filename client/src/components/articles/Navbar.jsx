import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 1, title: 'Home Page', path: '/home' }, // Updated path to match App.js
    { id: 3, title: 'Currencies', path: '/cr' },
    { id: 4, title: 'About', path: '/a' },
  ];

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    closed: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-4 px-6 flex justify-between items-center shadow-2xl rounded-lg sticky top-0 z-50"
    >
      {/* Brand Logo */}
      <Link to="/home" className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 hover:text-cyan-300 transition duration-300">
        Flash News
      </Link>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="text-lg font-medium hover:bg-white hover:text-indigo-900 px-3 py-2 rounded-lg transition-all duration-300"
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Search Input */}
      <div className="flex items-center relative">
        <input
          type="text"
          placeholder="Search Headlines..."
          className="px-4 py-2 rounded-l-lg bg-indigo-800/50 border border-purple-500 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 w-full md:w-64 transition-all duration-300"
        />
        <button className="bg-gradient-to-r from-pink-600 to-purple-600 px-4 py-2 rounded-r-lg text-white font-medium hover:from-pink-500 hover:to-purple-500 transition-all duration-300 flex items-center gap-2">
          <AiOutlineSearch size={20} />
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white focus:outline-none"
          aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          variants={mobileMenuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="absolute top-16 left-0 w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 shadow-lg md:hidden rounded-b-lg"
        >
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white hover:bg-white hover:text-indigo-900 px-4 py-2 rounded-lg transition-all duration-300"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <button className="bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-2 rounded-lg text-white font-medium hover:from-pink-500 hover:to-purple-500 transition-all duration-300">
                Search
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
