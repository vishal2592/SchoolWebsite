import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Quick links data
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Admissions', path: '/admission' },
    { name: 'Academics', path: '/academics' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Campus Life', path: '/campuslife' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News & Events', path: '/newsevents' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  // Contact info
  const contactInfo = [
    { icon: '📍', text: '123 School Street, Education City, EC 12345, India' },
    { icon: '📞', text: '+91 12345 67890' },
    { icon: '✉️', text: 'info@schoolname.edu' },
    { icon: '🕐', text: 'Mon-Fri: 8:00 AM - 5:00 PM' },
  ];

  // Social media links
  const socialMedia = [
    { name: 'Facebook', icon: '📘', url: '#', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: '🐦', url: '#', color: 'hover:bg-sky-500' },
    { name: 'Instagram', icon: '📸', url: '#', color: 'hover:bg-pink-600' },
    { name: 'YouTube', icon: '▶️', url: '#', color: 'hover:bg-red-600' },
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'hover:bg-blue-700' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold">SchoolName</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Empowering young minds with quality education, innovative learning, 
              and a nurturing environment for holistic development since 1995.
            </p>
            <div className="flex space-x-3">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 ${social.color}`}
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(0, 6).map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    <span className="mr-2 text-indigo-400">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              {quickLinks.slice(6).map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    <span className="mr-2 text-indigo-400">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start text-sm">
                  <span className="text-indigo-400 mr-3 flex-shrink-0">{item.icon}</span>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-gray-800 rounded-lg">
              <p className="text-xs text-gray-400">
                📧 Subscribe to our newsletter for updates
              </p>
              <div className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-1.5 text-sm bg-gray-700 border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
                />
                {/* <button className="px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-r-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
                  Subscribe
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {currentYear} SchoolName. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;