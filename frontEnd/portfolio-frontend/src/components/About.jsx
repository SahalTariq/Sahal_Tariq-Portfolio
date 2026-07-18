import React from 'react';

const About = () => {
  const aboutCards = [
    {
      id: 1,
      title: 'Full Stack Development',
      content: 'I am a full-stack developer with over 5 years of experience creating modern, scalable web applications and SaaS platforms. My expertise includes building intuitive front-end interfaces with React, Next.js, Tailwind CSS, and SwiftUI, as well as developing robust back-end systems with Node.js, Express, and MongoDB.',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      id: 2,
      title: 'Technology Integration',
      content: 'I specialize in integrating powerful technologies to create seamless user experiences. With a strong focus on efficiency and scalability, I leverage tools such as Git, Docker, and AWS to streamline workflows and deployments.',
      gradient: 'from-purple-600 to-purple-800'
    },
    {
      id: 3,
      title: 'Driven by Curiosity',
      content: 'Driven by curiosity and a commitment to excellence, I am passionate about delivering impactful digital solutions and continuously improving my skills.',
      gradient: 'from-green-600 to-green-800'
    }
  ];

  return (
    <section 
      id="about" 
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: '#0b1526c7' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Heading (Reduced Space) */}
          <div className="lg:sticky lg:top-24 space-y-4 lg:pr-4 xl:pr-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              About Me
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 font-medium leading-tight">
              Building thoughtful digital products across web and mobile.
            </p>
            
            {/* Decorative line */}
            <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mt-4"></div>
            
            {/* Optional: Small description */}
            <p className="text-white/60 text-sm sm:text-base mt-4 hidden lg:block">
              Passionate about creating impactful digital experiences through clean code and thoughtful design.
            </p>
          </div>

          {/* Right Side - Cards in Column (More Space) */}
          <div className="space-y-4 sm:space-y-6 lg:pl-4 xl:pl-8">
            {aboutCards.map((card) => (
              <div
                key={card.id}
                className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 card-hover border border-white/10 relative overflow-hidden`}
              >
                {/* Card shine effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                
                <div className="space-y-3 relative">
                  {/* Card Title */}
                  <h3 className="text-white text-lg sm:text-xl font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-white/80 rounded-full inline-block"></span>
                    {card.title}
                  </h3>
                  
                  {/* Card Content */}
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                    {card.content}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="flex justify-end mt-2">
                    <div className="w-8 h-0.5 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;