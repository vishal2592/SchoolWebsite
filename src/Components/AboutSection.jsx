import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
            About Our School
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">
            Welcome to SchoolName
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">
            Since 1995, we have been dedicated to nurturing young minds through quality education 
            and holistic development.
          </p>
        </div>

        {/* Left Content - Right Image Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-10 sm:mb-12">
          {/* Left Content */}
          <div className="order-2 lg:order-1 px-4 sm:px-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              Building Future Leaders
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              Founded in 1995 with just 50 students, our school has grown into a thriving 
              institution with over 500 students and 50 dedicated faculty members. We are 
              committed to academic excellence and holistic development.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Our innovative approach to education combines traditional values with modern 
              teaching methodologies, preparing students for success in the 21st century.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="bg-indigo-100 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2">
                <span className="font-bold text-indigo-700 text-sm sm:text-base">1995</span>
                <span className="text-gray-600 text-xs sm:text-sm ml-1 sm:ml-2">Founded</span>
              </div>
              <div className="bg-purple-100 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2">
                <span className="font-bold text-purple-700 text-sm sm:text-base">500+</span>
                <span className="text-gray-600 text-xs sm:text-sm ml-1 sm:ml-2">Students</span>
              </div>
              <div className="bg-pink-100 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2">
                <span className="font-bold text-pink-700 text-sm sm:text-base">50+</span>
                <span className="text-gray-600 text-xs sm:text-sm ml-1 sm:ml-2">Teachers</span>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Learn More About Us
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 px-4 sm:px-0">
            <div className="relative">
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-indigo-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-purple-200 rounded-full opacity-50"></div>
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop"
                  alt="School Campus"
                  className="w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 sm:p-6">
                  <div className="text-white">
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">SchoolName</h4>
                    <p className="text-white/80 text-xs sm:text-sm">Excellence in Education Since 1995</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section Below with Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-0">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="h-36 sm:h-40 md:h-44 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=200&fit=crop"
                alt="Quality Education"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-3 sm:p-4 text-center">
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">Quality Education</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Comprehensive curriculum with modern teaching methods</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="h-36 sm:h-40 md:h-44 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=200&fit=crop"
                alt="Expert Faculty"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-3 sm:p-4 text-center">
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">Expert Faculty</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Dedicated teachers with years of experience</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="h-36 sm:h-40 md:h-44 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=200&fit=crop"
                alt="Modern Facilities"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-3 sm:p-4 text-center">
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">Modern Facilities</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">State-of-the-art labs, library, and sports complex</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="h-36 sm:h-40 md:h-44 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=400&h=200&fit=crop"
                alt="Holistic Growth"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-3 sm:p-4 text-center">
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">Holistic Growth</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Focus on academics, arts, sports, and character</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 sm:mt-6 mx-4 sm:mx-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-5 sm:p-6 md:p-8 text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
            Ready to Join Our School?
          </h3>
          <p className="text-white/90 text-xs sm:text-sm md:text-base mb-4">
            Give your child the gift of quality education and a bright future
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/admission"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 bg-white text-indigo-700 text-sm sm:text-base font-semibold rounded-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Apply Now
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-white/30 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;