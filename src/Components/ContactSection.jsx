import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Handle form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
    console.log('Form submitted:', formData);
  };

  // Contact information
 
  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          {/* <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
            Contact Us
          </div> */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">
            Have questions or feedback? We'd love to hear from you. Reach out to us anytime.
          </p>
        </div>

      

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
              Send Us a Message
            </h3>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">✅</div>
                <h4 className="text-lg font-semibold text-green-800 mb-1">Message Sent!</h4>
                <p className="text-green-700 text-sm">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Write your message..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg text-sm"
                >
                  Send Message
                  <svg className="w-4 h-4 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Map & Social Media */}
          <div className="space-y-4 sm:space-y-6">
            {/* Google Maps */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 sm:h-56 md:h-64 bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509411!2d144.9537353153167!3d-37.8162799797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f5f5f5%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1647047200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="School Location"
                ></iframe>
              </div>
              <div className="p-3 bg-gray-50">
                <p className="text-xs sm:text-sm text-gray-600 text-center">
                  📍 123 School Street, Education City, EC 12345, India
                </p>
              </div>
            </div>

            {/* Social Media & Quick Links */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-3">
                Connect With Us
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 text-sm"
                >
                  <span className="text-lg">📘</span>
                  <span className="hidden sm:inline">Facebook</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-sky-500 hover:text-white transition-all duration-200 text-sm"
                >
                  <span className="text-lg">🐦</span>
                  <span className="hidden sm:inline">Twitter</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-pink-600 hover:text-white transition-all duration-200 text-sm"
                >
                  <span className="text-lg">📸</span>
                  <span className="hidden sm:inline">Instagram</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200 text-sm"
                >
                  <span className="text-lg">▶️</span>
                  <span className="hidden sm:inline">YouTube</span>
                </a>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-colors duration-200"
                >
                  View Full Contact Page
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-6">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Quick answers to common questions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 hover:shadow-lg transition-shadow">
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
                What are the school hours?
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                School hours are from 8:00 AM to 3:00 PM, Monday through Friday.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 hover:shadow-lg transition-shadow">
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
                How can I schedule a campus tour?
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Call our office at +91 12345 67890 or fill out the contact form.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 hover:shadow-lg transition-shadow">
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
                What is the admission process?
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Fill out an application, submit documents, and attend an interview.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 hover:shadow-lg transition-shadow">
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
                Do you offer transportation?
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Yes, we provide school bus service within a 10 km radius.
              </p>
            </div>
          </div>
          <div className="text-center mt-4 sm:mt-6">
            <Link
              to="/faq"
              className="inline-flex items-center text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-colors duration-200"
            >
              View All FAQs
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-5 sm:p-6 md:p-8 text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
            Visit Our Campus
          </h3>
          <p className="text-white/90 text-xs sm:text-sm md:text-base mb-4">
            Experience our vibrant learning environment firsthand
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 bg-white text-indigo-700 text-sm sm:text-base font-semibold rounded-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Contact Us
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-white/30 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;