import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Your Name
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Full Stack Developer
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-xl hover:scale-110 transform duration-200"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-xl hover:scale-110 transform duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-xl hover:scale-110 transform duration-200"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:your@email.com"
              className="text-gray-400 hover:text-white transition-colors text-xl hover:scale-110 transform duration-200"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end gap-1">
              Made with <FaHeart className="text-red-400 animate-pulse" /> by Your Name
            </p>
            <p className="text-gray-500 text-xs mt-1">
              &copy; {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;