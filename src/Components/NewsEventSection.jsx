import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsEventSection = () => {
  // News data
  const newsItems = [
    {
      id: 1,
      title: 'School Wins National Science Olympiad Trophy',
      category: 'achievement',
      image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=600&h=400&fit=crop',
      excerpt: 'Our talented students brought home the prestigious National Science Olympiad trophy after an outstanding performance.',
      date: 'March 15, 2026',
      readTime: '4 min read',
      tags: ['Science', 'Achievement'],
    },
    {
      id: 2,
      title: 'Annual Sports Day 2026 - A Grand Success',
      category: 'event',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
      excerpt: 'The 25th Annual Sports Day was celebrated with great enthusiasm and competitive spirit.',
      date: 'March 10, 2026',
      readTime: '3 min read',
      tags: ['Sports', 'Event'],
    },
    {
      id: 3,
      title: 'New Art Exhibition Opens at School Gallery',
      category: 'news',
      image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600&h=400&fit=crop',
      excerpt: 'A stunning collection of student artwork is now on display at the school gallery.',
      date: 'March 5, 2026',
      readTime: '2 min read',
      tags: ['Arts', 'Exhibition'],
    },
    {
      id: 4,
      title: 'Parent-Teacher Conference Scheduled',
      category: 'announcement',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
      excerpt: 'Annual parent-teacher conference to discuss student progress and development.',
      date: 'March 1, 2026',
      readTime: '2 min read',
      tags: ['Announcement', 'Conference'],
    },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  // Get category icon
  const getCategoryIcon = (category) => {
    const icons = {
      news: '📢',
      event: '🎪',
      achievement: '🏆',
      announcement: '📣',
    };
    return icons[category] || '📰';
  };

  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      news: 'bg-blue-100 text-blue-700',
      event: 'bg-purple-100 text-purple-700',
      achievement: 'bg-green-100 text-green-700',
      announcement: 'bg-orange-100 text-orange-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  // Filter news based on category
  const filteredNews = activeCategory === 'all'
    ? newsItems
    : newsItems.filter(item => item.category === activeCategory);

  // Categories
  const categories = [
    { id: 'all', label: 'All Posts', icon: '📰' },
    { id: 'news', label: 'News', icon: '📢' },
    { id: 'event', label: 'Events', icon: '🎪' },
    { id: 'achievement', label: 'Achievements', icon: '🏆' },
    { id: 'announcement', label: 'Announcements', icon: '📣' },
  ];

  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
            News & Events
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">
            Latest Updates
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">
            Stay updated with the latest happenings and upcoming events at our school
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              <span className="mr-1">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {filteredNews.map((item) => (
            <Link
              key={item.id}
              to="/news-events"
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Category Badge */}
                <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold shadow-md ${getCategoryColor(item.category)}`}>
                  <span className="mr-1">{getCategoryIcon(item.category)}</span>
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </div>
                {/* Date Badge */}
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg text-white text-xs">
                  📅 {item.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <span>⏱️ {item.readTime}</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                  {item.excerpt}
                </p>
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="mt-3 text-indigo-600 text-sm font-semibold flex items-center group-hover:text-indigo-800 transition-colors duration-200">
                  Read More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-6">
          <Link
            to="/newsevents"
            className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View All News & Events
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Featured Event Card */}
        <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1 h-48 md:h-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop"
                alt="Featured Event"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-2 p-5 sm:p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                  🎪 Featured Event
                </span>
                <span className="text-xs text-gray-500">📅 April 10, 2026</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
                Annual Music Concert & Cultural Evening
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-3">
                The school choir, band, and orchestra will present a spectacular evening of music 
                featuring classical, contemporary, and fusion performances.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-gray-500">📍 Auditorium</span>
                <span className="text-sm text-gray-500">🕐 6:00 PM - 8:00 PM</span>
                <Link
                  to="/newsevents"
                  className="inline-flex items-center text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-colors duration-200"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 md:p-5 text-center hover:shadow-lg transition-shadow">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-700">15+</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">News Articles</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 md:p-5 text-center hover:shadow-lg transition-shadow">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-700">8+</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Upcoming Events</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 md:p-5 text-center hover:shadow-lg transition-shadow">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-700">12+</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Achievements</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 md:p-5 text-center hover:shadow-lg transition-shadow">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-700">5+</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Announcements</div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-5 sm:p-6 md:p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-3xl sm:text-4xl mb-3">📧</div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-white/90 text-xs sm:text-sm md:text-base mb-4">
              Get the latest news and events delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-lg border-0 focus:ring-2 focus:ring-white/50 text-sm text-gray-800 placeholder-gray-500"
              />
              <button className="px-6 py-2.5 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 transition-all duration-200 shadow-lg text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEventSection;