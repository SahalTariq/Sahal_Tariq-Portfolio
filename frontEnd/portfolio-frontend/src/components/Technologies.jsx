import React from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  // SiJava,
  SiSwift,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  // SiAmazonaws,
  SiStripe,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiHtml5,
  SiCss,
  SiRedux,
  SiReactrouter,
  SiJsonwebtokens,
  SiAppwrite,
  SiPostman,
  SiCloudinary,
  SiRailway,
  SiAxios
} from 'react-icons/si';
import { FaDatabase, FaTools, FaCloud, FaCode } from 'react-icons/fa';
import { FiUpload,FiLock } from 'react-icons/fi';
import { VscVscode } from "react-icons/vsc";
import { TbApi,TbTransferIn} from 'react-icons/tb';  

const Technologies = () => {
  const techData = {
    // languages: [
    //   { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    //   { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    //   { name: 'Python', icon: SiPython, color: '#3776AB' },
    //   // { name: 'Java', icon: SiJava, color: '#007396' },
    //   { name: 'Swift', icon: SiSwift, color: '#FA7343' },
    // ],
    frontend: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'React Router', icon: SiReactrouter, color: '#CA4245' },
      
    ],
    backend: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'JWT', icon: SiJsonwebtokens, color: '#F7DF1E' },
      { name: 'Multer', icon: FiUpload, color: '#4F46E5' },
      { name: 'AppWrite', icon: SiAppwrite, color: '#F938AA' },
      
    ],
    tools: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'Vercel', icon: SiVercel, color: '#000000' },
      { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
      { name: 'Cloudinary', icon: SiCloudinary, color: '#FF7A00' },
      { name: 'REST APIs', icon: TbApi, color: '#4A90E2' },
      { name: 'Railway', icon: SiRailway, color: '#4A4A4A' },
      { name: 'Bcrypt', icon: FiLock, color: '#E11D48' },
      { name: 'Axios', icon: SiAxios, color: '#5A29E4' },
      { name: 'Fetch API', icon: TbTransferIn, color: '#4A90E2' },

    ]
  };

  const categoryIcons = {
    languages: <FaCode className="text-2xl" />,
    frontend: <FaCode className="text-2xl" />,
    backend: <FaDatabase className="text-2xl" />,
    tools: <FaTools className="text-2xl" />,
  };

  const categoryLabels = {
    languages: 'Programming Languages',
    frontend: 'Front-End',
    backend: 'Back-End',
    tools: 'Tools and APIs',
  };

  return (
    <section id="technologies" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Technologies</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          A toolkit built for shipping complete products, not just mockups.
        </p>

        <div className="space-y-16">
          {Object.entries(techData).map(([category, items]) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary-600">
                  {categoryIcons[category]}
                </div>
                <h3 className="text-2xl font-semibold">{categoryLabels[category]}</h3>
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-sm text-gray-400">{items.length} technologies</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {items.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center gap-2"
                    >
                      <Icon 
                        className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110" 
                        style={{ color: tech.color }}
                      />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;