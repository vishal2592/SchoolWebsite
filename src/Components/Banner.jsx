import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Animated background shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold tracking-wide animate-fade-in">
              🎓 Welcome to SchoolName
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block">Building the</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-200 to-white">
                Future Leaders
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Empowering young minds with quality education, innovative learning, and a nurturing environment for holistic development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/admission"
                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Apply Now</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0 pt-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-white/80">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-white/80">Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">10+</div>
                <div className="text-sm text-white/80">Awards</div>
              </div>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-full max-w-md">
              {/* Decorative circles */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-300 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
              
              {/* Main illustration card */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-yellow-300 rounded-lg flex items-center justify-center text-2xl">
                      📚
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Quality Education</h3>
                      <p className="text-white/80 text-sm">Modern curriculum</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-300 rounded-lg flex items-center justify-center text-2xl">
                      🏫
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Safe Environment</h3>
                      <p className="text-white/80 text-sm">Secure campus</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center text-2xl">
                      🎯
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Extra Activities</h3>
                      <p className="text-white/80 text-sm">Sports & arts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" fill="white">
          <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </div>
  );
};

export default Banner;