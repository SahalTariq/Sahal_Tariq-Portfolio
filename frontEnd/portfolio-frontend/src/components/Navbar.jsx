import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'About Me', id: 'about' },
    { label: 'Technologies', id: 'technologies' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Projects', id: 'projects' },
    { label: "Let's Connect", id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl md:text-2xl font-bold text-gray-800 hover:text-primary-600 transition-colors"
          >
            SAHALTARIQWEBDEV
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors text-sm lg:text-base"
              >
                {item.label}
              </button>
            ))}

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-1 text-gray-600 hover:text-primary-600 font-medium transition-colors text-sm lg:text-base"
              >
                English
                <FaChevronDown
                  className={`text-xs transition-transform duration-200 ${
                    languageOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {languageOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                    English
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                    Español
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                    Français
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-primary-600 transition-colors text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-3 pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors text-sm py-2 px-4 hover:bg-primary-50 rounded-lg"
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Dropdown in Mobile */}
            <div className="px-4 py-2">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-1 text-gray-600 hover:text-primary-600 font-medium transition-colors text-sm"
              >
                English
                <FaChevronDown
                  className={`text-xs transition-transform duration-200 ${
                    languageOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {languageOpen && (
                <div className="mt-2 space-y-1 pl-4">
                  <button className="block text-sm text-gray-600 hover:text-primary-600 transition-colors py-1">
                    English
                  </button>
                  <button className="block text-sm text-gray-600 hover:text-primary-600 transition-colors py-1">
                    Español
                  </button>
                  <button className="block text-sm text-gray-600 hover:text-primary-600 transition-colors py-1">
                    Français
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;