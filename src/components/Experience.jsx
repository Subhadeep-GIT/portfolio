import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Barodaweb, Vadodara',
      period: 'Mar 2025 - Jul 2025',
      type: 'Internship',
      responsibilities: [
        'Assisted in design and development of responsive React-based web applications',
        'Collaborated with senior developers, UI/UX designers, and backend team',
        'Worked with Git, RESTful APIs, and Figma-to-code translation'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Support Engineer',
      company: 'Apollo Tyres LTD, Limda Plant, Vadodara',
      period: 'Dec 2021 - Apr 2023',
      type: 'Full-time',
      responsibilities: [
        'Implemented and deployed MES solutions to enhance production efficiency and traceability',
        'Led a dedicated support team for plant-level software issues, ensuring swift resolution',
        'Monitored and managed system performance metrics to identify improvements'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r ${exp.color} text-white`}>
                        {exp.type}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-3">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <motion.div
                          key={respIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.2) + (respIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">{responsibility}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;