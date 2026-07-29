import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Navigation links matching your 10 pages
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Admissions', path: '/admission' },
    { name: 'Academics', path: '/academics' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Campus Life', path: '/campuslife' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News & Events', path: '/newsevents' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg
                  className="w-5 h-5 sm:w-7 sm:h-7 text-indigo-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-white font-bold text-base sm:text-xl tracking-tight">
                SchoolName
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - hidden on smaller screens */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-2.5 py-1.5 rounded-md text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-white/20 text-white shadow-lg scale-105'
                      : 'text-white/80 hover:bg-white/10 hover:text-white hover:scale-105'
                  }`
                }
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right side - Login Button */}
          <div className="flex items-center space-x-2 sm:space-x-3 ">
            {/* Login Button - visible on all screens */}
            <Link
              to="/login"
              className="hidden lg:inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-200 shadow-md text-xs sm:text-sm"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Login
            </Link>

            {/* Mobile menu button - Always shows three lines, never transforms */}
            <button
              onClick={toggleMenu}
              type="button"
              className="xl:hidden inline-flex items-center justify-center p-1.5 sm:p-2 rounded-md text-white hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50 transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Three lines icon - always visible, never changes */}
              <svg
                className="w-7 h-7 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Slide from left to right */}
      <div
        className={`xl:hidden fixed inset-0 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        id="mobile-menu"
      >
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMenu}
        ></div>

        {/* Sidebar Menu */}
        <div className="fixed top-0 left-0 h-full w-64 sm:w-80 bg-white shadow-2xl overflow-y-auto">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-indigo-600 to-purple-600">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg
                  className="w-5 h-5 text-indigo-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg">SchoolName</span>
            </div>
            {/* Close button - only visible inside the sidebar */}
            <button
              onClick={closeMenu}
              className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <div className="p-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border-l-4 border-indigo-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
                  }`
                }
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            ))}
            
            {/* Divider */}
            <div className="my-4 border-t border-gray-200"></div>
            
            {/* Mobile Login Button */}
            <Link
              to="/login"
              onClick={closeMenu}
              className="block px-4 py-3 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md"
            >
              <svg
                className="w-4 h-4 inline mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;