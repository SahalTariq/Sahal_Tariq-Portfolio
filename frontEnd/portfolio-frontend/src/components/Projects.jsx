import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'VideoHub - Full Stack Video Streaming Application',
      description: 'Brief description of your project. What problem does it solve? What technologies did you use?',
      techStack: ['React.js','Redux' , 'React Router DOM' , 'Tailwind CSS' , 'Node.js' ,'Express.js','MongoDB',
'JWT' ,'Cloudinary' ,'Bcrypt' ,'Multer', 'middleware','RESTful API'],
      image: '/Videohub Thumbnail.JPG', // Add your image path
      github: 'https://github.com/SahalTariq/VideoHub-Full-Stack-Video-Streaming',
      live: 'https://videohubapplication.netlify.app/',
      featured: true
    },
    {
      id: 2,
      title: 'Ecommerce-Store',
      description: 'Brief description of your project. What problem does it solve? What technologies did you use?',
      techStack: ['React.js', 'Redux', 'React Router DOM', 'Tailwind CSS', 'EmailJS'],
      image: '/onlineShop.jpg', // Add your image path
      github: 'https://github.com/SahalTariq/Ecommerce-website',
      live: 'https://reacteccomerce.netlify.app/',
      featured: true
    },
    {
      id: 3,
      title: 'Text-to-Speech & Speech-to-Text Application',
      description: 'Brief description of your project. What problem does it solve? What technologies did you use?',
      techStack: ['HTML5', 'CSS', 'JavaScript', 'Web Speech API'],
      image: '/voiceRecognition.jpg', // Add your image path
      github: 'https://github.com/SahalTariq/text-to-speech---speech-to-text',
      live: 'https://speech-listening.netlify.app/',
      featured: true
    },
    {
      id: 4,
      title: 'Bubbling Game',
      description: 'Brief description of your project. What problem does it solve? What technologies did you use?',
      techStack: ['HTML5', 'CSS', 'JavaScript'],
      image: '/BublingGame.jpg', // Add your image path
      // github: 'https://github.com/SahalTariq/text-to-speech---speech-to-text',
      live: 'https://bubbling-game.netlify.app/',
      featured: true
    },
    {
      id: 5,
      title: 'Todolist-App',
      description: 'Brief description of your project. What problem does it solve? What technologies did you use?',
      techStack: ['HTML5', 'CSS', 'JavaScript'],
      image: '/Todolist.jpg', // Add your image path
      // github: 'https://github.com/SahalTariq/text-to-speech---speech-to-text',
      live: 'https://todolist-app-2025.netlify.app/',
      featured: true
    }
  ]);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Projects</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Selected work that combines product thinking, strong UI, and clean engineering.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <FaCode className="text-5xl text-primary-400" />
                )}
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 transition-colors flex items-center gap-1 text-sm"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 transition-colors flex items-center gap-1 text-sm"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;