import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CampusLife = () => {

  useEffect(()=>{
      window.scrollTo(0,0);
    }, []);

  const [activeTab, setActiveTab] = useState('facilities');

  // Facilities data
  const facilities = [
    {
      name: 'Library',
      icon: '📚',
      description: 'A modern library with over 10,000 books, digital resources, and quiet study areas.',
      features: ['10,000+ Books', 'Digital Resources', 'Study Rooms', 'Reading Corner'],
    },
    {
      name: 'Science Labs',
      icon: '🔬',
      description: 'State-of-the-art laboratories for physics, chemistry, biology, and computer science.',
      features: ['Physics Lab', 'Chemistry Lab', 'Biology Lab', 'Computer Lab'],
    },
    {
      name: 'Sports Complex',
      icon: '🏟️',
      description: 'World-class sports facilities including indoor and outdoor courts, fields, and a swimming pool.',
      features: ['Basketball Court', 'Football Field', 'Swimming Pool', 'Tennis Court'],
    },
    {
      name: 'Art Studio',
      icon: '🎨',
      description: 'Creative spaces for visual arts, painting, sculpture, and digital design.',
      features: ['Painting Studio', 'Sculpture Workshop', 'Digital Art Lab', 'Exhibition Space'],
    },
    {
      name: 'Music Room',
      icon: '🎵',
      description: 'Fully equipped music rooms with instruments and recording facilities.',
      features: ['Instruments', 'Recording Studio', 'Practice Rooms', 'Performance Hall'],
    },
    {
      name: 'Cafeteria',
      icon: '🍽️',
      description: 'Healthy and nutritious meals served in a clean and welcoming environment.',
      features: ['Healthy Meals', 'Snack Bar', 'Dining Area', 'Special Dietary Options'],
    },
    {
      name: 'Auditorium',
      icon: '🎭',
      description: 'A 500-seat auditorium for school events, performances, and assemblies.',
      features: ['500 Seats', 'Stage', 'Sound System', 'Lighting Equipment'],
    },
    {
      name: 'Playground',
      icon: '🌳',
      description: 'Spacious outdoor playground for recreational activities and physical education.',
      features: ['Play Equipment', 'Green Space', 'Track', 'Sitting Areas'],
    },
  ];

  // Activities data
  const activities = [
    {
      title: 'Sports & Athletics',
      icon: '⚽',
      description: 'Comprehensive sports program including basketball, soccer, swimming, athletics, and more.',
      items: ['Basketball', 'Soccer', 'Swimming', 'Track & Field', 'Tennis', 'Volleyball'],
    },
    {
      title: 'Arts & Culture',
      icon: '🎭',
      description: 'Rich arts program with drama, music, dance, and visual arts opportunities.',
      items: ['Drama Club', 'School Band', 'Dance Classes', 'Art Exhibitions', 'Music Concerts'],
    },
    {
      title: 'Clubs & Societies',
      icon: '🌟',
      description: 'Wide range of student-led clubs and societies for every interest.',
      items: ['Debate Club', 'Science Club', 'Book Club', 'Environment Club', 'Chess Club', 'Robotics Club'],
    },
    {
      title: 'Community Service',
      icon: '🤝',
      description: 'Opportunities to give back to the community through various service projects.',
      items: ['Volunteer Programs', 'Charity Events', 'Environmental Projects', 'Community Outreach'],
    },
    {
      title: 'Academic Competitions',
      icon: '🏆',
      description: 'Participation in local, national, and international academic competitions.',
      items: ['Math Olympiad', 'Science Fair', 'Spelling Bee', 'Debate Competitions', 'Model UN'],
    },
    {
      title: 'Wellness Programs',
      icon: '🧘',
      description: 'Programs focused on mental health, well-being, and personal development.',
      items: ['Yoga Classes', 'Mindfulness Sessions', 'Counseling Services', 'Health Workshops'],
    },
  ];

  // Events data
  const upcomingEvents = [
    {
      title: 'Annual Sports Day',
      date: 'March 15, 2026',
      time: '9:00 AM - 4:00 PM',
      location: 'Sports Complex',
      description: 'A day of athletic competition and team spirit with students from all grades.',
      type: 'sports',
    },
    {
      title: 'Art Exhibition',
      date: 'March 20, 2026',
      time: '10:00 AM - 6:00 PM',
      location: 'Art Studio',
      description: 'Showcasing student artwork including paintings, sculptures, and digital art.',
      type: 'arts',
    },
    {
      title: 'Science Fair',
      date: 'April 5, 2026',
      time: '9:00 AM - 3:00 PM',
      location: 'Science Labs',
      description: 'Students present innovative science projects and experiments.',
      type: 'academic',
    },
    {
      title: 'Music Concert',
      date: 'April 15, 2026',
      time: '6:00 PM - 8:00 PM',
      location: 'Auditorium',
      description: 'Annual music concert featuring the school band, choir, and solo performers.',
      type: 'arts',
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Emma Thompson',
      role: 'Grade 10 Student',
      image: '👩‍🎓',
      text: 'The campus life at our school is amazing! I love the variety of activities and the supportive environment. The sports facilities are top-notch, and I\'ve made so many friends through the clubs.',
    },
    {
      name: 'James Rodriguez',
      role: 'Parent',
      image: '👨‍👧',
      text: 'My daughter has flourished here. The extracurricular programs have helped her develop confidence and discover her passion for art. The campus is safe and well-maintained.',
    },
    {
      name: 'Dr. Michael Lee',
      role: 'Alumni (Class of 2018)',
      image: '🎓',
      text: 'My time here shaped who I am today. The teachers, facilities, and opportunities prepared me well for university and beyond. I\'m grateful for the holistic education I received.',
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
            Campus Life
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Experience a vibrant community where learning extends beyond the classroom
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-700">30+</div>
              <div className="text-xs md:text-sm text-gray-600">Clubs & Activities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-700">15+</div>
              <div className="text-xs md:text-sm text-gray-600">Sports Programs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-700">50+</div>
              <div className="text-xs md:text-sm text-gray-600">Annual Events</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-700">95%</div>
              <div className="text-xs md:text-sm text-gray-600">Student Participation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section - Facilities & Activities */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('facilities')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'facilities'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <span className="mr-2">🏛️</span>
              Facilities
            </button>
            <button
              onClick={() => setActiveTab('activities')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'activities'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <span className="mr-2">⚡</span>
              Activities
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            {activeTab === 'facilities' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-4xl mb-3">{facility.icon}</div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                      {facility.name}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                      {facility.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {facility.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-4xl mb-3">{activity.icon}</div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                      {activity.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {activity.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-white rounded-full text-xs font-medium text-gray-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Upcoming Events
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay connected with our vibrant campus community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl">
                      {event.type === 'sports' && '⚽'}
                      {event.type === 'arts' && '🎨'}
                      {event.type === 'academic' && '🔬'}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{event.title}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>📅 {event.date}</p>
                      <p>🕐 {event.time}</p>
                      <p>📍 {event.location}</p>
                      <p className="text-gray-700 mt-2">{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Gallery Preview */}
      <div className="py-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Campus Gallery
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A glimpse into campus life through the lens
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { emoji: '🏫', label: 'Campus View' },
              { emoji: '📚', label: 'Library' },
              { emoji: '🏟️', label: 'Sports' },
              { emoji: '🎨', label: 'Art Class' },
              { emoji: '🔬', label: 'Science Lab' },
              { emoji: '🎵', label: 'Music Room' },
              { emoji: '🌳', label: 'Playground' },
              { emoji: '🎭', label: 'Auditorium' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="text-4xl mb-2">{item.emoji}</div>
                <p className="text-sm font-medium text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View Full Gallery
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Community Says
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real experiences from students, parents, and alumni
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-3">{testimonial.image}</div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
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
            Experience Campus Life
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Visit our campus and see for yourself what makes our community special
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Schedule a Visit
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/admission"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusLife;