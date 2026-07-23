import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Faculty = () => {

  useEffect(()=>{
      window.scrollTo(0,0);
    }, []);

  const [activeDepartment, setActiveDepartment] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Faculty data
  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Principal & Head of English',
      department: 'english',
      image: '👩‍🏫',
      qualification: 'Ph.D. in English Literature',
      experience: '22 years',
      email: 'sarah.johnson@school.com',
      bio: 'Passionate educator with expertise in curriculum development and educational leadership.',
      subjects: ['English Literature', 'Creative Writing'],
      achievements: ['Best Teacher Award 2020', 'Published Author'],
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      role: 'Academic Director & Mathematics Head',
      department: 'mathematics',
      image: '👨‍🏫',
      qualification: 'M.Sc. in Mathematics',
      experience: '18 years',
      email: 'michael.chen@school.com',
      bio: 'Dedicated to making mathematics accessible and enjoyable for all students.',
      subjects: ['Algebra', 'Calculus', 'Statistics'],
      achievements: ['Mathematics Olympiad Coach', 'Innovation in Teaching Award'],
    },
    {
      id: 3,
      name: 'Ms. Emily Rodriguez',
      role: 'Head of Arts',
      department: 'arts',
      image: '🎨',
      qualification: 'M.F.A. in Fine Arts',
      experience: '15 years',
      email: 'emily.rodriguez@school.com',
      bio: 'Award-winning artist and educator passionate about nurturing creativity.',
      subjects: ['Visual Arts', 'Art History', 'Sculpture'],
      achievements: ['National Art Exhibition Winner', 'Artist-in-Residence Program'],
    },
    {
      id: 4,
      name: 'Mr. David Kim',
      role: 'Sports Director',
      department: 'sports',
      image: '🏅',
      qualification: 'B.Sc. in Physical Education',
      experience: '12 years',
      email: 'david.kim@school.com',
      bio: 'Former national athlete dedicated to promoting health and fitness.',
      subjects: ['Physical Education', 'Sports Science'],
      achievements: ['National Champion', 'Sports Coach of the Year'],
    },
    {
      id: 5,
      name: 'Dr. Lisa Thompson',
      role: 'Head of Science',
      department: 'science',
      image: '🔬',
      qualification: 'Ph.D. in Biology',
      experience: '20 years',
      email: 'lisa.thompson@school.com',
      bio: 'Research scientist turned educator inspiring the next generation of scientists.',
      subjects: ['Biology', 'Chemistry', 'Environmental Science'],
      achievements: ['Research Grant Recipient', 'Science Fair Mentor'],
    },
    {
      id: 6,
      name: 'Prof. James Wilson',
      role: 'Head of Languages',
      department: 'languages',
      image: '📚',
      qualification: 'M.A. in Linguistics',
      experience: '16 years',
      email: 'james.wilson@school.com',
      bio: 'Multilingual educator passionate about language acquisition and cultural exchange.',
      subjects: ['Spanish', 'French', 'English'],
      achievements: ['Language Program Developer', 'Study Abroad Coordinator'],
    },
    {
      id: 7,
      name: 'Ms. Rachel Green',
      role: 'Technology Coordinator',
      department: 'technology',
      image: '💻',
      qualification: 'M.Sc. in Computer Science',
      experience: '10 years',
      email: 'rachel.green@school.com',
      bio: 'Tech enthusiast committed to integrating technology in education.',
      subjects: ['Computer Science', 'Robotics', 'Digital Literacy'],
      achievements: ['Google Certified Educator', 'EdTech Innovator'],
    },
    {
      id: 8,
      name: 'Dr. Mark Davis',
      role: 'Head of Social Sciences',
      department: 'social-sciences',
      image: '🌍',
      qualification: 'Ph.D. in History',
      experience: '19 years',
      email: 'mark.davis@school.com',
      bio: 'History expert who brings the past to life through engaging storytelling.',
      subjects: ['World History', 'Geography', 'Economics'],
      achievements: ['Published Historian', 'Model UN Advisor'],
    },
    {
      id: 9,
      name: 'Ms. Jennifer Park',
      role: 'Music Director',
      department: 'arts',
      image: '🎵',
      qualification: 'M.Mus in Music Education',
      experience: '14 years',
      email: 'jennifer.park@school.com',
      bio: 'Classically trained musician inspiring students through music.',
      subjects: ['Music Theory', 'Choir', 'Instrumental Music'],
      achievements: ['Choir Competition Winner', 'Music Festival Organizer'],
    },
  ];

  // Department filters
  const departments = [
    { id: 'all', label: 'All Departments' },
    { id: 'english', label: 'English' },
    { id: 'mathematics', label: 'Mathematics' },
    { id: 'science', label: 'Science' },
    { id: 'arts', label: 'Arts' },
    { id: 'sports', label: 'Sports' },
    { id: 'languages', label: 'Languages' },
    { id: 'technology', label: 'Technology' },
    { id: 'social-sciences', label: 'Social Sciences' },
  ];

  // Filter faculty based on department and search
  const filteredFaculty = facultyMembers.filter((member) => {
    const matchesDepartment = activeDepartment === 'all' || member.department === activeDepartment;
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesDepartment && matchesSearch;
  });

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
            Our Faculty
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Dedicated educators committed to excellence in teaching and student development
          </p>
        </div>
      </div>

      {/* Faculty Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-700">{facultyMembers.length}+</div>
              <div className="text-xs md:text-sm text-gray-600">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-700">15:1</div>
              <div className="text-xs md:text-sm text-gray-600">Student-Teacher Ratio</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-700">16+</div>
              <div className="text-xs md:text-sm text-gray-600">Years Avg. Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-700">95%</div>
              <div className="text-xs md:text-sm text-gray-600">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Grid Section */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveDepartment(dept.id)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    activeDepartment === dept.id
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  {dept.label}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search faculty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              />
              <svg
                className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Faculty Grid */}
          {filteredFaculty.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No Faculty Found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredFaculty.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-center">
                    <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {member.image}
                    </div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-white/90 text-sm font-medium">{member.role}</p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-semibold text-gray-700 w-24">Qualification:</span>
                          <span>{member.qualification}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-semibold text-gray-700 w-24">Experience:</span>
                          <span>{member.experience}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-semibold text-gray-700 w-24">Email:</span>
                          <span className="text-indigo-600 truncate">{member.email}</span>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1">
                          {member.subjects.map((subject, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>

                      {member.achievements && (
                        <div className="border-t border-gray-100 pt-3">
                          <p className="text-xs font-semibold text-gray-700 mb-1">Achievements:</p>
                          <div className="flex flex-wrap gap-1">
                            {member.achievements.map((achievement, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 bg-yellow-50 text-yellow-700 rounded-full text-xs"
                              >
                                🏆 {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Why Our Faculty Section */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Our Faculty Stands Out
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Committed to nurturing the next generation of leaders
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: '🎓',
                title: 'Highly Qualified',
                description: 'All faculty members hold advanced degrees in their respective fields with years of teaching experience.',
              },
              {
                icon: '❤️',
                title: 'Student-Centered',
                description: 'Dedicated to personalized attention and creating a supportive learning environment for every student.',
              },
              {
                icon: '💡',
                title: 'Innovative Teaching',
                description: 'Embracing modern teaching methodologies and technology to enhance the learning experience.',
              },
              {
                icon: '🌍',
                title: 'Global Perspective',
                description: 'Many faculty members have international experience and bring diverse perspectives to the classroom.',
              },
              {
                icon: '🏆',
                title: 'Award-Winning',
                description: 'Our faculty has received numerous awards for excellence in teaching and contributions to education.',
              },
              {
                icon: '🤝',
                title: 'Lifelong Learning',
                description: 'Committed to continuous professional development and staying current with educational research.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-indigo-50 transition-colors duration-300"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Our Team Section */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Join Our Team
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of a passionate community of educators making a difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/admission"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;