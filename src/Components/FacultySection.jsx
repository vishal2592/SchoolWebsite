import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FacultySection = () => {
  // Faculty data
  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Principal & Head of English',
      department: 'English',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
      qualification: 'Ph.D. in English Literature',
      experience: '22 years',
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      role: 'Academic Director & Mathematics Head',
      department: 'Mathematics',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      qualification: 'M.Sc. in Mathematics',
      experience: '18 years',
    },
    {
      id: 3,
      name: 'Ms. Emily Rodriguez',
      role: 'Head of Arts',
      department: 'Arts',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&h=400&fit=crop&crop=face',
      qualification: 'M.F.A. in Fine Arts',
      experience: '15 years',
    },
    {
      id: 4,
      name: 'Mr. David Kim',
      role: 'Sports Director',
      department: 'Sports',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      qualification: 'B.Sc. in Physical Education',
      experience: '12 years',
    },
  ];

  const [activeDepartment, setActiveDepartment] = useState('all');

  // Filter faculty based on department
  const filteredFaculty = activeDepartment === 'all' 
    ? facultyMembers 
    : facultyMembers.filter(member => member.department.toLowerCase() === activeDepartment.toLowerCase());

  // Department filters
  const departments = [
    { id: 'all', label: 'All Faculty' },
    { id: 'english', label: 'English' },
    { id: 'mathematics', label: 'Mathematics' },
    { id: 'arts', label: 'Arts' },
    { id: 'sports', label: 'Sports' },
  ];

  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
            Our Faculty
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">
            Meet Our Dedicated Teachers
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">
            Our experienced faculty members are committed to providing quality education and nurturing young minds
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 md:p-5 text-center hover:shadow-lg transition-shadow">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-700">50+</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Faculty Members</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 md:p-5 text-center hover:shadow-lg transition-shadow">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-700">15:1</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Student-Teacher Ratio</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 md:p-5 text-center hover:shadow-lg transition-shadow">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-700">16+</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Years Experience</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 md:p-5 text-center hover:shadow-lg transition-shadow">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-700">95%</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Student Satisfaction</div>
          </div>
        </div>

        {/* Department Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveDepartment(dept.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeDepartment === dept.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {dept.label}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {filteredFaculty.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <p className="text-xs font-medium">{member.qualification}</p>
                    <p className="text-xs text-white/80">{member.experience} experience</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-0.5">
                  {member.name}
                </h4>
                <p className="text-indigo-600 text-xs sm:text-sm font-medium mb-2">
                  {member.role}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                    {member.department}
                  </span>
                </div>
                <Link
                  to="/faculty"
                  className="text-indigo-600 text-sm font-semibold hover:text-indigo-800 transition-colors duration-200 inline-flex items-center"
                >
                  View Profile
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-6">
          <Link
            to="/faculty"
            className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View All Faculty Members
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-6">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Why Choose Our Faculty?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Our teachers are the heart of our school community
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl sm:text-4xl mb-3">🎓</div>
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">Highly Qualified</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Advanced degrees in their fields</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl sm:text-4xl mb-3">❤️</div>
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">Student-Centered</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Personalized attention and support</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl sm:text-4xl mb-3">💡</div>
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">Innovative Teaching</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Modern teaching methodologies</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl sm:text-4xl mb-3">🏆</div>
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">Award-Winning</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Recognized for teaching excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;