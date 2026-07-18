import React from 'react';
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      name: 'UCF Coding Bootcamp',
      issuer: 'University of Central Florida',
      date: 'June 2022',
      link: '#'
    },
    {
      name: 'PCAP - Certified Associate Python Programmer',
      issuer: 'Python Institute',
      date: 'January 2021',
      link: '#'
    },
    {
      name: 'PCEP - Certified Entry-Level Python Programmer',
      issuer: 'Python Institute',
      date: 'October 2020',
      link: '#'
    },
    {
      name: 'The Complete Python Developer',
      issuer: 'Udemy',
      date: 'February 2020',
      link: '#'
    },
    {
      name: 'Master Spring Boot 3 and Spring Framework 6 with Java',
      issuer: 'Udemy',
      date: 'August 2023',
      link: '#'
    },
    {
      name: 'The WordPress and SEO Masterclass with Generative AI 2025',
      issuer: 'Udemy',
      date: 'March 2024',
      link: '#'
    }
  ];

  return (
    <section id="certificates" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">Certificates</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Professional growth backed by hands-on learning and shipping real work.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-gray-50 hover:bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 card-hover border border-gray-100 hover:border-primary-200"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 text-primary-600 p-3 rounded-lg group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <FaAward className="text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-800 group-hover:text-primary-600 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{cert.issuer}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm text-gray-400">{cert.date}</span>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      View Certificate <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;