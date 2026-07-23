import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
    }, []);
    
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState([]);

  // Toggle FAQ item
  const toggleItem = (id) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // FAQ data
  const faqData = [
    {
      id: 1,
      category: 'admissions',
      question: 'What is the admission process?',
      answer: 'The admission process includes filling out an online application form, submitting required documents (birth certificate, previous school records, transfer certificate, parent/guardian ID proof, passport size photos, and medical records), and attending a personal interview and academic assessment with our admissions team.',
    },
    {
      id: 2,
      category: 'admissions',
      question: 'What is the age requirement for admission?',
      answer: 'For Pre-K, children should be 3-4 years old. For Kindergarten, 5 years old. For Grade 1-5, ages 6-10 years. For Grade 6-10, ages 11-15 years. Age requirements are as of June 1st of the academic year.',
    },
    {
      id: 3,
      category: 'admissions',
      question: 'Is there an admission test?',
      answer: 'Yes, we conduct a simple assessment to understand the student\'s academic level and learning needs. This helps us ensure proper placement and support. The assessment covers basic skills in mathematics, language arts, and general knowledge.',
    },
    {
      id: 4,
      category: 'admissions',
      question: 'When is the application deadline?',
      answer: 'The application deadline for the upcoming academic year is March 31, 2026. However, we accept applications throughout the year for mid-term admissions subject to seat availability.',
    },
    {
      id: 5,
      category: 'academics',
      question: 'What curriculum does the school follow?',
      answer: 'Our school follows a comprehensive curriculum that integrates national education standards with international best practices. We offer a balanced program covering core subjects, arts, sports, and technology.',
    },
    {
      id: 6,
      category: 'academics',
      question: 'What are the school hours?',
      answer: 'School hours are from 8:00 AM to 3:00 PM, Monday through Friday. The office remains open until 5:00 PM for administrative work. After-school activities run from 3:00 PM to 5:00 PM.',
    },
    {
      id: 7,
      category: 'academics',
      question: 'Do you offer extracurricular activities?',
      answer: 'Yes, we offer a wide range of extracurricular activities including sports (basketball, soccer, swimming, athletics), arts (music, drama, painting), clubs (debate, science, robotics, chess), and community service programs.',
    },
    {
      id: 8,
      category: 'academics',
      question: 'What is the student-teacher ratio?',
      answer: 'We maintain a student-teacher ratio of 15:1 to ensure personalized attention and support for each student. Our classes are limited to a maximum of 25 students.',
    },
    {
      id: 9,
      category: 'fees',
      question: 'What is the fee structure?',
      answer: 'Our fee structure is designed to be affordable while maintaining high educational standards. Fees include tuition, books, activities, and transportation (optional). Please contact our admissions office for a detailed fee breakdown.',
    },
    {
      id: 10,
      category: 'fees',
      question: 'Are there any scholarships available?',
      answer: 'Yes, we offer merit-based scholarships for academically outstanding students and need-based financial assistance for deserving families. Scholarship applications are reviewed annually.',
    },
    {
      id: 11,
      category: 'fees',
      question: 'What is the payment schedule?',
      answer: 'Fees can be paid annually, semi-annually, or quarterly. We accept payments through bank transfers, credit/debit cards, and online payment portals. Detailed payment schedules are provided at the time of admission.',
    },
    {
      id: 12,
      category: 'facilities',
      question: 'What facilities does the school have?',
      answer: 'Our school features modern facilities including a library with 10,000+ books, science laboratories, computer labs, sports complex with basketball court, football field, swimming pool, art studio, music room, auditorium, and cafeteria.',
    },
    {
      id: 13,
      category: 'facilities',
      question: 'Is there a school bus service?',
      answer: 'Yes, we provide school bus transportation for students living within a 10 km radius of the school. Our buses are GPS-tracked and have trained attendants to ensure student safety. Bus routes are planned based on student locations.',
    },
    {
      id: 14,
      category: 'facilities',
      question: 'Does the school have a cafeteria?',
      answer: 'Yes, our cafeteria serves healthy and nutritious meals prepared in-house. We offer breakfast, lunch, and snack options. Special dietary requirements and preferences are accommodated upon request.',
    },
    {
      id: 15,
      category: 'facilities',
      question: 'Is there a medical facility on campus?',
      answer: 'We have a well-equipped medical room with a qualified nurse on duty during school hours. Regular health check-ups are conducted for all students, and we have partnerships with nearby hospitals for emergencies.',
    },
    {
      id: 16,
      category: 'general',
      question: 'What is the school\'s vision and mission?',
      answer: 'Our mission is to provide a transformative educational experience that empowers students to become lifelong learners, critical thinkers, and responsible global citizens. Our vision is to be a beacon of educational excellence recognized globally for our innovative approach to learning.',
    },
    {
      id: 17,
      category: 'general',
      question: 'How can parents get involved?',
      answer: 'We welcome parent involvement through our Parent-Teacher Association (PTA), volunteering opportunities, classroom support, and school events. Parents can also participate in parent-teacher conferences, workshops, and school celebrations.',
    },
    {
      id: 18,
      category: 'general',
      question: 'What is the school\'s discipline policy?',
      answer: 'We follow a positive discipline approach that emphasizes mutual respect, responsibility, and self-discipline. Our code of conduct focuses on creating a safe and supportive learning environment for all students.',
    },
    {
      id: 19,
      category: 'general',
      question: 'Does the school organize field trips?',
      answer: 'Yes, we organize educational field trips throughout the year to enhance learning beyond the classroom. These include museum visits, science center trips, cultural excursions, and nature explorations.',
    },
  ];

  // Categories
  const categories = [
    { id: 'all', label: 'All Questions', icon: '❓' },
    { id: 'admissions', label: 'Admissions', icon: '📝' },
    { id: 'academics', label: 'Academics', icon: '📚' },
    { id: 'fees', label: 'Fees & Scholarships', icon: '💰' },
    { id: 'facilities', label: 'Facilities', icon: '🏫' },
    { id: 'general', label: 'General', icon: '🌟' },
  ];

  // Filter FAQs based on category and search
  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get category icon
  const getCategoryIcon = (category) => {
    const icons = {
      admissions: '📝',
      academics: '📚',
      fees: '💰',
      facilities: '🏫',
      general: '🌟',
    };
    return icons[category] || '❓';
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
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Find answers to commonly asked questions about our school
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-700">{faqData.length}</div>
              <div className="text-xs md:text-sm text-gray-600">Total Questions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-700">5</div>
              <div className="text-xs md:text-sm text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-700">100%</div>
              <div className="text-xs md:text-sm text-gray-600">Answered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-700">4.8⭐</div>
              <div className="text-xs md:text-sm text-gray-600">Helpful Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Main Section */}
      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
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
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search questions..."
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

          {/* FAQ List */}
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-xl">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No Questions Found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-start justify-between text-left focus:outline-none group"
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{getCategoryIcon(faq.category)}</span>
                        <span className="text-xs font-medium text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">
                          {categories.find(c => c.id === faq.category)?.label}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-200">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                          openItems.includes(faq.id) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openItems.includes(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 border-t border-gray-100">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Still Have Questions */}
          <div className="mt-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 md:p-10 text-center">
            <div className="text-4xl mb-3">🤔</div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? We're here to help. Contact us directly for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contact Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:+911234567890"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-all duration-200"
              >
                📞 Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Questions Section */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Popular Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Most frequently asked questions by our community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {faqData.slice(0, 6).map((faq) => (
              <div
                key={faq.id}
                className="bg-gray-50 rounded-xl p-6 hover:bg-indigo-50 transition-colors duration-300 cursor-pointer"
                onClick={() => {
                  setActiveCategory(faq.category);
                  setSearchTerm('');
                  // Scroll to FAQ section
                  document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{getCategoryIcon(faq.category)}</span>
                  <span className="text-xs font-medium text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">
                    {categories.find(c => c.id === faq.category)?.label}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-gray-800 mb-2 line-clamp-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {faq.answer}
                </p>
                <div className="mt-3 text-indigo-600 text-sm font-medium">
                  Click to view →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="py-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Quick Links
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore other helpful resources
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: '📝', label: 'Admissions', link: '/admissions' },
              { icon: '📚', label: 'Academics', link: '/academics' },
              { icon: '👨‍🏫', label: 'Faculty', link: '/faculty' },
              { icon: '📸', label: 'Gallery', link: '/gallery' },
              { icon: '📰', label: 'News & Events', link: '/news-events' },
              { icon: '🏫', label: 'Campus Life', link: '/campus-life' },
              { icon: '📞', label: 'Contact', link: '/contact' },
              { icon: '📧', label: 'Newsletter', link: '/contact' },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="bg-white rounded-xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-50"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Need More Information?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is ready to assist you with any questions or concerns
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
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;