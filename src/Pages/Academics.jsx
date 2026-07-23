import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Academics = () => {

  useEffect(()=>{
      window.scrollTo(0,0);
    }, []);
    
  const [activeTab, setActiveTab] = useState('elementary');

  // Academic programs data
  const programs = {
    elementary: {
      title: 'Elementary School (Grades 1-5)',
      description: 'Building strong foundations in core subjects while nurturing creativity and curiosity.',
      subjects: [
        'Mathematics',
        'English Language Arts',
        'Science',
        'Social Studies',
        'Art & Music',
        'Physical Education',
        'Computer Basics',
      ],
      features: [
        'Small class sizes (max 20 students)',
        'Personalized learning plans',
        'Hands-on activities and experiments',
        'Weekly library visits',
        'After-school enrichment programs',
      ],
    },
    middle: {
      title: 'Middle School (Grades 6-8)',
      description: 'Developing critical thinking and independent learning skills through a comprehensive curriculum.',
      subjects: [
        'Advanced Mathematics',
        'English Literature & Writing',
        'Physical Sciences',
        'World History & Geography',
        'Foreign Languages',
        'STEM Education',
        'Arts & Design',
        'Health & Wellness',
      ],
      features: [
        'Project-based learning',
        'STEM lab access',
        'Language immersion programs',
        'Sports and athletics',
        'Leadership development',
        'Career exploration',
      ],
    },
    high: {
      title: 'High School (Grades 9-10)',
      description: 'Preparing students for higher education with advanced courses and college readiness programs.',
      subjects: [
        'Advanced Mathematics (Algebra, Geometry, Calculus)',
        'English Language & Composition',
        'Biology, Chemistry, Physics',
        'World & US History',
        'Spanish/French',
        'Computer Science',
        'Economics & Business',
        'Psychology',
        'Art History & Studio Art',
      ],
      features: [
        'College preparatory curriculum',
        'Advanced Placement (AP) courses',
        'SAT/ACT preparation',
        'University counseling',
        'Internship opportunities',
        'Research projects',
        'Study abroad programs',
      ],
    },
  };

  // Department data
  const departments = [
    {
      name: 'Mathematics',
      icon: '📐',
      description: 'Building analytical and problem-solving skills through comprehensive math education.',
      teachers: 8,
    },
    {
      name: 'Science',
      icon: '🔬',
      description: 'Hands-on learning in biology, chemistry, physics, and environmental science.',
      teachers: 10,
    },
    {
      name: 'Languages',
      icon: '📚',
      description: 'Developing communication skills in English and foreign languages.',
      teachers: 12,
    },
    {
      name: 'Arts & Humanities',
      icon: '🎨',
      description: 'Fostering creativity through visual arts, music, drama, and literature.',
      teachers: 6,
    },
    {
      name: 'Physical Education',
      icon: '🏃',
      description: 'Promoting health, fitness, and teamwork through sports and activities.',
      teachers: 5,
    },
    {
      name: 'Technology',
      icon: '💻',
      description: 'Preparing students for the digital age with computer science and STEM.',
      teachers: 4,
    },
  ];

  // Academic achievements
  const achievements = [
    { number: '98%', label: 'Pass Rate' },
    { number: '45+', label: 'Awards Won' },
    { number: '20+', label: 'Clubs & Activities' },
    { number: '15:1', label: 'Student-Teacher Ratio' },
    { number: '95%', label: 'Parent Satisfaction' },
    { number: '30+', label: 'National Competitions' },
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
            Academics
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Excellence in education through innovative teaching and comprehensive learning programs
          </p>
        </div>
      </div>

      {/* Academic Programs Tabs */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Academic Programs
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive education tailored to each stage of learning
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {[
              { id: 'elementary', label: 'Elementary' },
              { id: 'middle', label: 'Middle School' },
              { id: 'high', label: 'High School' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  {programs[activeTab].title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                  {programs[activeTab].description}
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Core Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {programs[activeTab].subjects.map((subject, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Program Features</h4>
                <ul className="space-y-3">
                  {programs[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-indigo-600 mr-3">✓</span>
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Achievements */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Academic Achievements
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Celebrating excellence and continuous improvement
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-2xl md:text-4xl font-bold text-indigo-700 mb-1">
                  {achievement.number}
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Departments Section */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Academic Departments
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Expert faculty dedicated to each discipline
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{dept.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                  {dept.name}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                  {dept.description}
                </p>
                <div className="flex items-center text-sm text-indigo-600">
                  <span className="font-semibold">{dept.teachers}</span>
                  <span className="ml-1">faculty members</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Programs Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Special Programs
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Enriching education beyond the classroom
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'STEM Program',
                icon: '🤖',
                description: 'Hands-on learning in science, technology, engineering, and mathematics with state-of-the-art labs and equipment.',
              },
              {
                title: 'Arts & Culture',
                icon: '🎭',
                description: 'Comprehensive arts education including visual arts, music, drama, and cultural exchange programs.',
              },
              {
                title: 'Sports Academy',
                icon: '⚽',
                description: 'Professional sports training with experienced coaches in various disciplines including basketball, soccer, and swimming.',
              },
              {
                title: 'Language Immersion',
                icon: '🌍',
                description: 'Full language immersion programs in Spanish, French, and Mandarin with native-speaking instructors.',
              },
              {
                title: 'Leadership Program',
                icon: '🌟',
                description: 'Developing future leaders through student council, debate clubs, and community service initiatives.',
              },
              {
                title: 'College Prep',
                icon: '🎓',
                description: 'Comprehensive college counseling, SAT/ACT preparation, and university application guidance.',
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{program.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Learning Resources
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                Our school provides state-of-the-art facilities and resources to support student learning and development.
              </p>
              <ul className="space-y-3">
                {[
                  '📚 Modern Library with Digital Resources',
                  '💻 Computer Labs with Latest Technology',
                  '🔬 Science Laboratories',
                  '🎨 Art & Design Studios',
                  '🏟️ Sports Facilities',
                  '🎵 Music & Performance Hall',
                ].map((resource, index) => (
                  <li key={index} className="text-gray-700 text-base">
                    {resource}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Link
                  to="/faculty"
                  className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                >
                  Meet Our Faculty →
                </Link>
                <Link
                  to="/campus-life"
                  className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                >
                  Campus Life →
                </Link>
                <Link
                  to="/gallery"
                  className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                >
                  View Gallery →
                </Link>
                <Link
                  to="/admissions"
                  className="block p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200 font-semibold"
                >
                  Apply Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Ready to Begin Your Academic Journey?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our school community and experience excellence in education
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

export default Academics;