import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  }, []);
  // Team members data
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Principal',
      image: '👩‍🏫',
      bio: '20+ years of educational leadership experience',
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Academic Director',
      image: '👨‍🏫',
      bio: 'Curriculum development specialist',
    },
    {
      name: 'Ms. Emily Rodriguez',
      role: 'Head of Arts',
      image: '🎨',
      bio: 'Award-winning art educator',
    },
    {
      name: 'Mr. David Kim',
      role: 'Sports Director',
      image: '🏅',
      bio: 'Former national athlete & coach',
    },
  ];

  // Core values data
  const coreValues = [
    {
      icon: '🌟',
      title: 'Excellence',
      description: 'Striving for the highest standards in education and personal development.',
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Building character through honesty, respect, and ethical behavior.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Embracing creativity and modern teaching methodologies.',
    },
    {
      icon: '🌍',
      title: 'Community',
      description: 'Fostering a supportive and inclusive learning environment.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About Our School
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Dedicated to nurturing young minds and building a brighter future since 1995
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🎯</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              To provide a transformative educational experience that empowers students 
              to become lifelong learners, critical thinkers, and responsible global citizens. 
              We are committed to fostering academic excellence, character development, 
              and holistic growth in a supportive and inclusive environment.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">👁️</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              To be a beacon of educational excellence, recognized globally for our 
              innovative approach to learning, our commitment to student well-being, 
              and our contribution to building a more equitable and sustainable world. 
              We envision a future where every student discovers their unique potential.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at our school
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-indigo-50 transition-colors duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* School History Section */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Rich History
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                Founded in 1995 with just 50 students and 5 teachers, our school has grown 
                into a thriving educational institution with over 500 students and 50 dedicated 
                faculty members. Throughout our journey, we have maintained our commitment to 
                academic excellence and holistic development.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Over the years, we have expanded our campus, introduced innovative programs, 
                and established partnerships with leading educational institutions worldwide. 
                Our alumni have gone on to achieve remarkable success in various fields.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-indigo-100 rounded-lg px-4 py-2">
                  <span className="font-bold text-indigo-700">1995</span>
                  <span className="text-gray-600 text-sm ml-2">Founded</span>
                </div>
                <div className="bg-purple-100 rounded-lg px-4 py-2">
                  <span className="font-bold text-purple-700">500+</span>
                  <span className="text-gray-600 text-sm ml-2">Students</span>
                </div>
                <div className="bg-pink-100 rounded-lg px-4 py-2">
                  <span className="font-bold text-pink-700">50+</span>
                  <span className="text-gray-600 text-sm ml-2">Teachers</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold">25+</div>
                    <div className="text-sm text-white/80">Years of Excellence</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-sm text-white/80">Pass Rate</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold">30+</div>
                    <div className="text-sm text-white/80">Clubs & Activities</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold">100+</div>
                    <div className="text-sm text-white/80">Awards Won</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Dedicated professionals committed to your child's success
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
              >
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-center">
                  <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-white/90 text-sm">{member.role}</p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Join Our School Community
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Give your child the gift of quality education and a bright future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Apply Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;