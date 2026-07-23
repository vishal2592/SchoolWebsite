import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Gallery data with school-related images
  const galleryItems = [
    // Campus & Facilities
    {
      id: 1,
      title: 'School Campus',
      category: 'campus',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop',
      description: 'Beautiful view of our school campus with modern architecture and green surroundings.',
      date: 'January 2026',
    },
    {
      id: 2,
      title: 'School Library',
      category: 'campus',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop',
      description: 'Our state-of-the-art library with extensive collection and comfortable study spaces.',
      date: 'December 2025',
    },
    {
      id: 3,
      title: 'Science Laboratory',
      category: 'campus',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
      description: 'Fully equipped science labs for hands-on learning and experiments.',
      date: 'November 2025',
    },
    {
      id: 4,
      title: 'Sports Facilities',
      category: 'campus',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      description: 'World-class sports facilities including indoor and outdoor courts.',
      date: 'October 2025',
    },
    {
      id: 5,
      title: 'Art Classroom',
      category: 'campus',
      image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=600&h=400&fit=crop',
      description: 'Creative spaces for visual arts, painting, and sculpture.',
      date: 'September 2025',
    },
    {
      id: 6,
      title: 'Music Room',
      category: 'campus',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop',
      description: 'Fully equipped music rooms with instruments and recording facilities.',
      date: 'August 2025',
    },

    // Events
    {
      id: 7,
      title: 'Sports Day 2026',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
      description: 'Students participating in various athletic events and competitions.',
      date: 'March 2026',
    },
    {
      id: 8,
      title: 'Science Fair 2026',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
      description: 'Innovative science projects and experiments by our talented students.',
      date: 'February 2026',
    },
    {
      id: 9,
      title: 'Art Exhibition 2026',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600&h=400&fit=crop',
      description: 'Showcasing student artwork including paintings and sculptures.',
      date: 'January 2026',
    },
    {
      id: 10,
      title: 'Annual Day Celebration',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&fit=crop',
      description: 'Cultural performances and awards ceremony for academic excellence.',
      date: 'December 2025',
    },
    {
      id: 11,
      title: 'School Concert',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop',
      description: 'School band and choir performances for the school community.',
      date: 'November 2025',
    },
    {
      id: 12,
      title: 'Graduation Ceremony',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&h=400&fit=crop',
      description: 'Celebrating the achievements of our graduating students.',
      date: 'June 2025',
    },

    // Students
    {
      id: 13,
      title: 'Classroom Learning',
      category: 'students',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
      description: 'Interactive learning sessions in our modern classrooms.',
      date: 'February 2026',
    },
    {
      id: 14,
      title: 'Group Study Session',
      category: 'students',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
      description: 'Students collaborating and learning together.',
      date: 'January 2026',
    },
    {
      id: 15,
      title: 'Art Class Activity',
      category: 'students',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop',
      description: 'Students expressing creativity through various art forms.',
      date: 'December 2025',
    },
    {
      id: 16,
      title: 'Sports Practice',
      category: 'students',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=400&fit=crop',
      description: 'Students training and practicing for sports competitions.',
      date: 'November 2025',
    },
    {
      id: 17,
      title: 'Music Practice Session',
      category: 'students',
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop',
      description: 'Students practicing musical instruments and vocals.',
      date: 'October 2025',
    },
    {
      id: 18,
      title: 'Debate Club Meeting',
      category: 'students',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
      description: 'Students engaging in lively debates and discussions.',
      date: 'September 2025',
    },

    // Achievements
    {
      id: 19,
      title: 'Sports Championship Win',
      category: 'achievements',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=400&fit=crop',
      description: 'Our students winning the inter-school sports championship.',
      date: 'March 2026',
    },
    {
      id: 20,
      title: 'Academic Excellence Awards',
      category: 'achievements',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop',
      description: 'Recognizing students for outstanding academic performance.',
      date: 'February 2026',
    },
    {
      id: 21,
      title: 'Art Competition Winners',
      category: 'achievements',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop',
      description: 'Students winning awards in national art competitions.',
      date: 'January 2026',
    },
    {
      id: 22,
      title: 'Science Olympiad',
      category: 'achievements',
      image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=600&h=400&fit=crop',
      description: 'Students representing our school at the Science Olympiad.',
      date: 'December 2025',
    },
    {
      id: 23,
      title: 'Community Service Award',
      category: 'achievements',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
      description: 'Recognition for outstanding community service initiatives.',
      date: 'November 2025',
    },
    {
      id: 24,
      title: 'Debate Competition',
      category: 'achievements',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
      description: 'Our debate team competing and winning at various competitions.',
      date: 'October 2025',
    },
  ];

  // Categories
  const categories = [
    { id: 'all', label: 'All Photos', icon: '📸' },
    { id: 'campus', label: 'Campus', icon: '🏫' },
    { id: 'events', label: 'Events', icon: '🎭' },
    { id: 'students', label: 'Students', icon: '👨‍🎓' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' },
  ];

  // Filter items based on category
  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  // Open lightbox
  const openLightbox = (item) => {
    setSelectedImage(item);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Navigate lightbox
  const navigateLightbox = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const newIndex = (currentIndex + direction + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[newIndex]);
  };

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
            Photo Gallery
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Capturing moments of learning, growth, and community spirit
          </p>
        </div>
      </div>

      {/* Gallery Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-700">{galleryItems.length}</div>
              <div className="text-xs md:text-sm text-gray-600">Total Photos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-700">4</div>
              <div className="text-xs md:text-sm text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-700">2026</div>
              <div className="text-xs md:text-sm text-gray-600">Latest Year</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-700">100+</div>
              <div className="text-xs md:text-sm text-gray-600">Happy Moments</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-200 ${activeCategory === category.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No Photos Found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item)}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden bg-gray-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                        <span className="text-white text-sm font-semibold bg-black/50 px-4 py-2 rounded-full">
                          View Photo
                        </span>
                      </div>
                      {/* Category Badge */}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-indigo-700 shadow-md">
                        {categories.find(c => c.id === item.category)?.label}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-semibold text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                      <p className="text-xs text-gray-400 mt-2">{item.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Lightbox Content */}
            <div>
              <div className="relative h-[50vh] md:h-[60vh] bg-gray-900">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                  {selectedImage.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span>📅 {selectedImage.date}</span>
                  <span>🏷️ {categories.find(c => c.id === selectedImage.category)?.label}</span>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => navigateLightbox(-1)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                  >
                    ← Previous
                  </button>
                  <p className="text-sm text-gray-500">
                    {filteredItems.findIndex(item => item.id === selectedImage.id) + 1} of {filteredItems.length}
                  </p>
                  <button
                    onClick={() => navigateLightbox(1)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Capture Every Moment
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our gallery showcases the vibrant life and achievements of our school community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: '📸',
                title: 'High Quality Photos',
                description: 'Professional photos capturing the best moments of school life.',
              },
              {
                icon: '🔄',
                title: 'Regular Updates',
                description: 'New photos added regularly to keep you connected.',
              },
              {
                icon: '🏷️',
                title: 'Easy Navigation',
                description: 'Browse by categories to find what you\'re looking for.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-indigo-50 transition-colors duration-300"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Visit Our Campus
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Come see our beautiful campus and vibrant community in person
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Schedule a Tour
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

export default Gallery;