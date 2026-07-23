import React from 'react';
import { Link } from 'react-router-dom';

const GallerySection = () => {
  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      title: 'School Campus',
      category: 'Campus',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Library',
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Science Lab',
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Sports Day',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
    },
    {
      id: 5,
      title: 'Art Exhibition',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600&h=400&fit=crop',
    },
    {
      id: 6,
      title: 'Classroom Learning',
      category: 'Students',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
            Our Gallery
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">
            Capturing School Moments
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">
            A glimpse into the vibrant life and activities at our school
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {galleryImages.map((image) => (
            <Link
              key={image.id}
              to="/gallery"
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden bg-gray-200">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-indigo-700 shadow-md">
                  {image.category}
                </div>

                {/* Title on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white text-base sm:text-lg font-bold">{image.title}</h4>
                  <p className="text-white/80 text-xs sm:text-sm">Click to view gallery →</p>
                </div>

                {/* View Gallery Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-indigo-700 font-semibold rounded-lg shadow-lg text-sm">
                    View Gallery
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-6">
          <Link
            to="/gallery"
            className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View Full Gallery
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Gallery Stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 md:p-5 text-center hover:shadow-lg transition-shadow">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-700">100+</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Photos</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 md:p-5 text-center hover:shadow-lg transition-shadow">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-700">4</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Categories</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 md:p-5 text-center hover:shadow-lg transition-shadow">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-700">2026</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Latest Year</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 md:p-5 text-center hover:shadow-lg transition-shadow">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-700">50+</div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1">Events Covered</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-5 sm:p-6 md:p-8 text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
            Visit Our Campus
          </h3>
          <p className="text-white/90 text-xs sm:text-sm md:text-base mb-4">
            See our beautiful campus and vibrant community in person
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 bg-white text-indigo-700 text-sm sm:text-base font-semibold rounded-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Schedule a Tour
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-white/30 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;