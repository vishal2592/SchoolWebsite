import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
      }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 5000);
  };

  // Contact information
  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: ['123 School Street', 'Education City, EC 12345', 'India'],
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['+91 12345 67890', '+91 98765 43210'],
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['info@schoolname.edu', 'admissions@schoolname.edu'],
    },
    {
      icon: '🕐',
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed'],
    },
  ];

  // Social media links
  const socialMedia = [
    { name: 'Facebook', icon: '📘', url: '#', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: '🐦', url: '#', color: 'hover:bg-sky-500' },
    { name: 'Instagram', icon: '📸', url: '#', color: 'hover:bg-pink-600' },
    { name: 'YouTube', icon: '▶️', url: '#', color: 'hover:bg-red-600' },
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'hover:bg-blue-700' },
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
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with us for any queries or feedback
          </p>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl mb-2">{info.icon}</div>
              <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-2">
                {info.title}
              </h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-xs md:text-sm text-gray-600">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Fill in the form below and we'll get back to you as soon as possible
                </p>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700 text-sm md:text-base">
                    Thank you for contacting us. We will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${
                        errors.subject ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter subject"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Write your message here..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                    <svg
                      className="w-5 h-5 inline ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Map & Social Media */}
            <div className="space-y-6">
              {/* Google Maps */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-64 md:h-80 bg-gray-200 relative">
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
                <div className="p-4 bg-gray-50">
                  <p className="text-sm text-gray-600 text-center">
                    📍 123 School Street, Education City, EC 12345, India
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                  Connect With Us
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Follow us on social media for updates and news
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:text-white transition-all duration-200 ${social.color}`}
                    >
                      <span className="text-xl">{social.icon}</span>
                      <span className="text-sm font-medium hidden sm:inline">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🕐</span>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">
                    Working Hours
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-gray-800">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-800">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-red-600">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Find quick answers to common questions
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'What are the school hours?',
                a: 'School hours are from 8:00 AM to 3:00 PM, Monday through Friday. The office remains open until 5:00 PM for administrative work.',
              },
              {
                q: 'How can I schedule a campus tour?',
                a: 'You can schedule a campus tour by calling our office at +91 12345 67890 or by filling out the contact form above. We typically conduct tours on weekdays.',
              },
              {
                q: 'What is the admission process?',
                a: 'The admission process includes filling out an application form, submitting required documents, and an interview/assessment. Please visit our Admissions page for detailed information.',
              },
              {
                q: 'Do you offer transportation services?',
                a: 'Yes, we provide school bus transportation for students living within a 10 km radius of the school. Routes are planned based on student locations.',
              },
              {
                q: 'How can I get involved as a parent?',
                a: 'We welcome parent involvement through our Parent-Teacher Association (PTA), volunteering opportunities, and school events. Contact our office for more information.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 flex items-start">
                  <span className="text-indigo-600 mr-2">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm md:text-base pl-6">
                  <span className="font-medium text-indigo-600">A:</span> {faq.a}
                </p>
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
            Experience the learning environment firsthand. Schedule a campus tour today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+911234567890"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              📞 Call Us
            </a>
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

export default Contact;