import React from 'react';
import { FaArrowDown, FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding bg-gradient-to-br from-gray-50 to-white pt-20 md:pt-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in order-2 lg:order-1">
            <p className="text-primary-600 font-semibold text-base sm:text-lg">Software Developer</p>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Sahal Tariq
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">
              A software developer based in{' '}
              <span className="font-medium text-gray-800">Your City</span>
              , creating seamless digital experiences.
            </p>

            <p className="text-gray-500 max-w-lg text-sm sm:text-base">
              Building calm, modern products with strong UX, scalable architecture,
              and production-ready detail.
            </p>

            {/* Social and Action Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/sahal-tariq-react/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077B5] hover:bg-[#006399] text-white p-3 sm:p-3.5 rounded-lg transition-all hover:scale-105 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg sm:text-xl" />
              </a>

              {/* GitHub Button */}
              <a
                href="https://github.com/SahalTariq"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white p-3 sm:p-3.5 rounded-lg transition-all hover:scale-105 hover:shadow-lg"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg sm:text-xl" />
              </a>

              {/* Email Button */}
              <a
                href="mailto:sahaltariq45@gmail.com"
                className="bg-red-600 hover:bg-red-700 text-white p-3 sm:p-3.5 rounded-lg transition-all hover:scale-105 hover:shadow-lg"
                aria-label="Email"
              >
                <FaEnvelope className="text-lg sm:text-xl" />
              </a>

              {/* Resume Button */}
              <a
                href="/SAHALTARIQ_RESUME.pdf"
                download
                className="bg-primary-600 hover:bg-primary-700 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
              >
                <FaFileDownload className="text-sm sm:text-base" />
                <span className="text-sm sm:text-base">Resume</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a
                href="#contact"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-all hover:shadow-lg inline-flex items-center gap-2 text-sm sm:text-base"
              >
                Let's Connect
                <FaArrowDown className="text-xs sm:text-sm" />
              </a>
              <a
                href="#projects"
                className="border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-all inline-flex items-center text-sm sm:text-base"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              {/* Animated background rings */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-primary-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-primary-300 to-primary-500 rounded-full opacity-10 animate-pulse delay-100"></div>
              
              {/* Avatar circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold shadow-2xl">
                  {/* Your initial or avatar */}
                  <span>👨‍💻</span>
                  {/* <image src="/personal.jpeg" alt="Sahal Tariq"  /> */}
                </div>
              </div>

              {/* Optional: Add a floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full shadow-lg p-2 sm:p-3 animate-float">
                <span className="text-primary-600 font-bold text-xs sm:text-sm">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;