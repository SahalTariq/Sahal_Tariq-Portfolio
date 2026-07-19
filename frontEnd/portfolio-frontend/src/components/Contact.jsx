import React, { useState } from 'react';
import axios from 'axios';
// import config from '../config';
import { FaUser, FaEnvelope, FaComment, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Get API URL from environment variable or use default
  const API_URL = import.meta.env?.REACT_APP_API_URL || 'http://localhost:5000/api';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post(
        `${API_URL}/contact`,
        formData
      );

      console.log('Message sent successfully:', response.data);

      setStatus({
        type: 'success',
        message: '✅ Your message has been sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        if (errorData.errors) {
          const errorMessages = errorData.errors.map(err => err.message).join(', ');
          setStatus({
            type: 'error',
            message: `❌ ${errorMessages}`
          });
        } else {
          setStatus({
            type: 'error',
            message: `❌ ${errorData.message || 'Failed to send message. Please try again.'}`
          });
        }
      } else if (error.request) {
        setStatus({
          type: 'error',
          message: '❌ Cannot connect to server. Please check if the backend is running.'
        });
      } else {
        setStatus({
          type: 'error',
          message: '❌ Network error. Please check your connection and try again.'
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h2 className="section-title">Let's Connect</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Open to new collaborations, product work, and ambitious ideas.
        </p>

        <div className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-4 text-gray-400">
                  <FaComment />
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                {formData.message.length}/5000 characters
              </p>
            </div>

            {status.message && (
              <div className={`p-4 rounded-lg flex items-start gap-3 ${
                status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}>
                {status.type === 'success' ? (
                  <FaCheckCircle className="text-xl mt-0.5 flex-shrink-0" />
                ) : (
                  <FaExclamationCircle className="text-xl mt-0.5 flex-shrink-0" />
                )}
                <p className="text-sm">{status.message}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-lg font-medium transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;