import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewsEvent = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const [activeTab, setActiveTab] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // News data
    const newsItems = [
        {
            id: 1,
            title: 'School Wins National Science Olympiad Trophy',
            category: 'achievement',
            image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800&h=500&fit=crop',
            excerpt: 'Our talented students brought home the prestigious National Science Olympiad trophy after an outstanding performance.',
            content: 'The team of 10 students from grades 8-10 participated in the National Science Olympiad held in Delhi. They competed against 500+ schools from across the country and secured the first position in the robotics category and second in the physics category. The winning team was led by Dr. Lisa Thompson, Head of Science Department.',
            date: 'March 15, 2026',
            author: 'Dr. Lisa Thompson',
            readTime: '4 min read',
            tags: ['Science', 'Achievement', 'Olympiad'],
        },
        {
            id: 2,
            title: 'Annual Sports Day 2026 - A Grand Success',
            category: 'event',
            image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop',
            excerpt: 'The 25th Annual Sports Day was celebrated with great enthusiasm and competitive spirit.',
            content: 'Students from all grades participated in various athletic events including track and field, basketball, soccer, and swimming. The event was graced by former national athlete Mr. David Kim as the chief guest. The students showcased exceptional sportsmanship and team spirit throughout the day.',
            date: 'March 10, 2026',
            author: 'Mr. David Kim',
            readTime: '3 min read',
            tags: ['Sports', 'Event', 'Annual Day'],
        },
        {
            id: 3,
            title: 'New Art Exhibition Opens at School Gallery',
            category: 'news',
            image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&h=500&fit=crop',
            excerpt: 'A stunning collection of student artwork is now on display at the school gallery.',
            content: 'The "Colors of Creativity" exhibition features over 100 artworks including paintings, sculptures, and digital art created by students from grades 1-10. The exhibition was inaugurated by renowned artist Ms. Emily Rodriguez and will remain open for public viewing until April 15, 2026.',
            date: 'March 5, 2026',
            author: 'Ms. Emily Rodriguez',
            readTime: '2 min read',
            tags: ['Arts', 'Exhibition', 'Creativity'],
        },
        {
            id: 4,
            title: 'Parent-Teacher Conference Scheduled',
            category: 'announcement',
            image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop',
            excerpt: 'Annual parent-teacher conference to discuss student progress and development.',
            content: 'The annual parent-teacher conference will be held on March 25-26, 2026. Parents are requested to schedule appointments with their child\'s teachers. This is an important opportunity to discuss academic progress, social development, and future goals for each student.',
            date: 'March 1, 2026',
            author: 'Dr. Sarah Johnson',
            readTime: '2 min read',
            tags: ['Announcement', 'Parent-Teacher', 'Conference'],
        },
        {
            id: 5,
            title: 'Students Excel in International Debate Competition',
            category: 'achievement',
            image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop',
            excerpt: 'Our debate team secures top positions in the International Debate Competition.',
            content: 'The school debate team represented India at the International Youth Debate Competition held in Singapore. Our team secured the second position globally, with team captain Arjun Patel being named the "Best Speaker" of the competition.',
            date: 'February 25, 2026',
            author: 'Prof. James Wilson',
            readTime: '3 min read',
            tags: ['Debate', 'International', 'Achievement'],
        },
        {
            id: 6,
            title: 'Music Concert & Cultural Evening',
            category: 'event',
            image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=500&fit=crop',
            excerpt: 'Annual music concert featuring performances by students and guest artists.',
            content: 'The school choir, band, and orchestra will present a spectacular evening of music on April 10, 2026. The concert will feature classical, contemporary, and fusion music performances. Special guest artist Mr. A.R. Rahman will be attending the event.',
            date: 'February 20, 2026',
            author: 'Ms. Jennifer Park',
            readTime: '3 min read',
            tags: ['Music', 'Concert', 'Cultural'],
        },
        {
            id: 7,
            title: 'New STEM Lab Inaugurated',
            category: 'news',
            image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=500&fit=crop',
            excerpt: 'State-of-the-art STEM laboratory opened to enhance practical learning.',
            content: 'The newly inaugurated STEM lab is equipped with 3D printers, robotics kits, virtual reality systems, and advanced scientific equipment. This facility will enable students to engage in hands-on learning and innovative projects in science, technology, engineering, and mathematics.',
            date: 'February 15, 2026',
            author: 'Prof. Michael Chen',
            readTime: '3 min read',
            tags: ['STEM', 'Technology', 'Innovation'],
        },
        {
            id: 8,
            title: 'Summer School Registration Opens',
            category: 'announcement',
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop',
            excerpt: 'Registration for Summer School programs now open for all students.',
            content: 'Our Summer School program will run from June 1-30, 2026, offering enrichment courses, remedial classes, and fun activities. Students can choose from academic subjects, arts, sports, and technology courses. Early registration discounts are available until May 15, 2026.',
            date: 'February 10, 2026',
            author: 'Admissions Office',
            readTime: '2 min read',
            tags: ['Announcement', 'Summer School', 'Registration'],
        },
    ];

    // Categories
    const categories = [
        { id: 'all', label: 'All Posts', icon: '📰' },
        { id: 'news', label: 'News', icon: '📢' },
        { id: 'event', label: 'Events', icon: '🎪' },
        { id: 'achievement', label: 'Achievements', icon: '🏆' },
        { id: 'announcement', label: 'Announcements', icon: '📣' },
    ];

    // Featured post (latest news)
    const featuredPost = newsItems[0];

    // Filter items based on category and search
    const filteredItems = newsItems
        .filter(item => {
            const matchesCategory = activeTab === 'all' || item.category === activeTab;
            const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            return matchesCategory && matchesSearch;
        })
        .filter(item => item.id !== featuredPost.id); // Exclude featured post

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
                        News & Events
                    </h1>
                    <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
                        Stay updated with the latest happenings at our school
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-indigo-700">{newsItems.length}</div>
                            <div className="text-xs md:text-sm text-gray-600">Total Posts</div>
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
                            <div className="text-2xl md:text-3xl font-bold text-indigo-700">15+</div>
                            <div className="text-xs md:text-sm text-gray-600">Upcoming Events</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Post */}
            {featuredPost && (
                <div className="py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="relative h-64 md:h-80 lg:h-auto bg-gray-200">
                                    <img
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        Featured
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-2xl">{getCategoryIcon(featuredPost.category)}</span>
                                        <span className="text-sm font-semibold text-indigo-600 uppercase">
                                            {featuredPost.category}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                                        {featuredPost.title}
                                    </h2>
                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                                        {featuredPost.excerpt}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                        <span>📅 {featuredPost.date}</span>
                                        <span>✍️ {featuredPost.author}</span>
                                        <span>⏱️ {featuredPost.readTime}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {featuredPost.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => {/* Open full article */ }}
                                        className="mt-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl w-fit"
                                    >
                                        Read Full Story
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* News Grid */}
            <div className="py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Search and Filter */}
                    <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveTab(category.id)}
                                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${activeTab === category.id
                                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                                            : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                                        }`}
                                >
                                    <span className="mr-1">{category.icon}</span>
                                    {category.label}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-64">
                            <input
                                type="text"
                                placeholder="Search news..."
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

                    {/* News Grid */}
                    {filteredItems.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-4xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Posts Found</h3>
                            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {filteredItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                                >
                                    <div className="relative h-48 md:h-52 overflow-hidden bg-gray-200">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-indigo-700 shadow-md flex items-center gap-1">
                                            <span>{getCategoryIcon(item.category)}</span>
                                            <span className="capitalize">{item.category}</span>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                                            <span>📅 {item.date}</span>
                                            <span>•</span>
                                            <span>⏱️ {item.readTime}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                            {item.excerpt}
                                        </p>
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {item.tags.slice(0, 2).map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                            {item.tags.length > 2 && (
                                                <span className="text-xs text-gray-400">+{item.tags.length - 2}</span>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => {/* Open full article */ }}
                                            className="text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-colors duration-200 flex items-center"
                                        >
                                            Read More
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Upcoming Events Section */}
            <div className="bg-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Upcoming Events
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Mark your calendars for these exciting upcoming events
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                title: 'Annual Sports Day',
                                date: 'March 15, 2026',
                                time: '9:00 AM - 4:00 PM',
                                location: 'Sports Complex',
                                type: 'Sports',
                                icon: '⚽',
                            },
                            {
                                title: 'Art Exhibition',
                                date: 'March 20, 2026',
                                time: '10:00 AM - 6:00 PM',
                                location: 'Art Studio',
                                type: 'Arts',
                                icon: '🎨',
                            },
                            {
                                title: 'Science Fair',
                                date: 'April 5, 2026',
                                time: '9:00 AM - 3:00 PM',
                                location: 'Science Labs',
                                type: 'Academic',
                                icon: '🔬',
                            },
                            {
                                title: 'Music Concert',
                                date: 'April 10, 2026',
                                time: '6:00 PM - 8:00 PM',
                                location: 'Auditorium',
                                type: 'Cultural',
                                icon: '🎵',
                            },
                            {
                                title: 'Parent-Teacher Conference',
                                date: 'April 15-16, 2026',
                                time: '8:00 AM - 5:00 PM',
                                location: 'School Campus',
                                type: 'Meeting',
                                icon: '📅',
                            },
                            {
                                title: 'Graduation Ceremony',
                                date: 'June 5, 2026',
                                time: '5:00 PM - 8:00 PM',
                                location: 'Auditorium',
                                type: 'Celebration',
                                icon: '🎓',
                            },
                        ].map((event, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">{event.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h3>
                                        <div className="space-y-1 text-sm text-gray-600">
                                            <p>📅 {event.date}</p>
                                            <p>🕐 {event.time}</p>
                                            <p>📍 {event.location}</p>
                                            <p className="mt-2">
                                                <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                                                    {event.type}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="py-8 bg-gradient-to-br from-indigo-50 to-purple-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 text-center">
                        <div className="text-4xl mb-4">📧</div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                            Subscribe to Our Newsletter
                        </h2>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Get the latest news and events delivered directly to your inbox
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-gray-500 mt-4">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 py-12 md:py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                        Have an Event to Share?
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Contact us to share your news or event with the school community
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
                            to="/about"
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

export default NewsEvent;