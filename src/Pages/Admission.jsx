import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {

  useEffect(()=>{
      window.scrollTo(0,0);
    }, []);

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  // Admission steps data
  const steps = [
    {
      number: '01',
      icon: '📝',
      title: 'Online Application',
      description: 'Fill out our online application form with basic student and parent information.',
    },
    {
      number: '02',
      icon: '📋',
      title: 'Document Submission',
      description: 'Submit required documents including birth certificate, previous school records, and ID proofs.',
    },
    {
      number: '03',
      icon: '📞',
      title: 'Interview & Assessment',
      description: 'Schedule a personal interview and academic assessment with our admissions team.',
    },
    {
      number: '04',
      icon: '✅',
      title: 'Confirmation',
      description: 'Receive admission decision and complete the enrollment process.',
    },
  ];

  // Requirements data
  const requirements = [
    {
      category: 'Age Requirements',
      items: [
        'Pre-K: 3-4 years',
        'Kindergarten: 5 years',
        'Grade 1-5: 6-10 years',
        'Grade 6-10: 11-15 years',
      ],
    },
    {
      category: 'Required Documents',
      items: [
        'Birth Certificate (copy)',
        'Previous School Records',
        'Transfer Certificate',
        'Parent/Guardian ID Proof',
        'Passport Size Photos (4)',
        'Medical Records',
      ],
    },
  ];

  // Important dates
  const importantDates = [
    { event: 'Application Opens', date: 'January 15, 2026' },
    { event: 'Application Deadline', date: 'March 31, 2026' },
    { event: 'Interviews Begin', date: 'April 5, 2026' },
    { event: 'Results Announced', date: 'May 15, 2026' },
    { event: 'Enrollment Deadline', date: 'June 10, 2026' },
    { event: 'Academic Year Starts', date: 'August 1, 2026' },
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
            Admissions
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Join our community of learners and begin your journey to excellence
          </p>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-2xl md:text-3xl mb-2">🎯</div>
            <h3 className="text-sm md:text-base font-semibold text-gray-800">Rolling Admissions</h3>
            <p className="text-xs md:text-sm text-gray-600">Applications accepted year-round</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-2xl md:text-3xl mb-2">📊</div>
            <h3 className="text-sm md:text-base font-semibold text-gray-800">98% Success Rate</h3>
            <p className="text-xs md:text-sm text-gray-600">Students placed in top schools</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-2xl md:text-3xl mb-2">👨‍🏫</div>
            <h3 className="text-sm md:text-base font-semibold text-gray-800">1:15 Ratio</h3>
            <p className="text-xs md:text-sm text-gray-600">Teacher to student ratio</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-2xl md:text-3xl mb-2">🏆</div>
            <h3 className="text-sm md:text-base font-semibold text-gray-800">30+ Awards</h3>
            <p className="text-xs md:text-sm text-gray-600">For academic excellence</p>
          </div>
        </div>
      </div>

      {/* Admission Process */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Admission Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Four simple steps to join our school community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {step.number}
                </div>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Requirements & Important Dates */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Requirements */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Admission Requirements
              </h2>
              <div className="space-y-6">
                {requirements.map((req, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {req.category}
                    </h3>
                    <ul className="space-y-2">
                      {req.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="text-indigo-600 mr-2">•</span>
                          <span className="text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Dates */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Important Dates
              </h2>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 md:p-8">
                <div className="space-y-4">
                  {importantDates.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm md:text-base font-medium text-gray-800">
                        {item.event}
                      </span>
                      <span className="text-sm md:text-base text-indigo-700 font-semibold">
                        {item.date}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-700 flex items-start">
                    <span className="text-yellow-600 mr-2">⚠️</span>
                    Dates are subject to change. Please check back regularly for updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Apply Now
              </h2>
              <p className="text-gray-600">
                Fill in the form below to start your application process
              </p>
            </div>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Application Submitted Successfully!
                </h3>
                <p className="text-green-700">
                  We will contact you within 48 hours with the next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Student's Full Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter student name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter parent name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter email"
                    />
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
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Grade Applying For *
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select Grade</option>
                    <option value="pre-k">Pre-K (3-4 years)</option>
                    <option value="kindergarten">Kindergarten (5 years)</option>
                    <option value="grade1">Grade 1</option>
                    <option value="grade2">Grade 2</option>
                    <option value="grade3">Grade 3</option>
                    <option value="grade4">Grade 4</option>
                    <option value="grade5">Grade 5</option>
                    <option value="grade6">Grade 6</option>
                    <option value="grade7">Grade 7</option>
                    <option value="grade8">Grade 8</option>
                    <option value="grade9">Grade 9</option>
                    <option value="grade10">Grade 10</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="Any special requirements or questions?"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Submit Application
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
                  <button
                    type="reset"
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200"
                  >
                    Clear Form
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about admissions
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What is the admission age requirement?',
                a: 'For Pre-K, children should be 3-4 years old. For Kindergarten, 5 years old. For grades 1-10, age requirements vary by grade level. Please check the requirements section above for details.',
              },
              {
                q: 'Is there an admission test?',
                a: 'Yes, we conduct a simple assessment to understand the student\'s academic level and learning needs. This helps us ensure proper placement and support.',
              },
              {
                q: 'What documents are required?',
                a: 'Required documents include birth certificate, previous school records, transfer certificate, parent/guardian ID proof, passport size photos, and medical records.',
              },
              {
                q: 'Can I apply online?',
                a: 'Yes, you can fill out the online application form on this page. Our admissions team will contact you within 48 hours.',
              },
              {
                q: 'Is there a fee for admission?',
                a: 'An admission fee applies. Please contact our admissions office or check the fee structure on our website for detailed information.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
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

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Still Have Questions? Contact Us
              <svg
                className="w-5 h-5 ml-2"
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;