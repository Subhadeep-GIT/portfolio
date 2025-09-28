import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor's Degree in Computer Science and Engineering",
      institution: 'Parul University, Vadodara',
      period: 'Expected 2026',
      status: 'In Progress',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      degree: 'Diploma in Computer Science and Engineering',
      institution: 'Parul University, Vadodara',
      period: 'Completed 2023',
      status: 'Completed',
      color: 'from-purple-500 to-pink-500'
    },
    {
      degree: 'Matriculation',
      institution: 'Ursuline Convent School, Ranchi, Jharkhand',
      period: 'Completed',
      status: 'Completed',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${edu.color} opacity-10 rounded-full -translate-y-16 translate-x-16`}></div>
              
              {/* Status Badge */}
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 bg-gradient-to-r ${edu.color} text-white`}>
                {edu.status}
              </div>

              {/* Icon */}
              <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${edu.color} mb-6`}>
                <GraduationCap size={24} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                {edu.degree}
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={16} />
                  <span className="text-sm">{edu.institution}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span className="text-sm">{edu.period}</span>
                </div>
              </div>

              {/* Decorative Element */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-4 right-4 w-8 h-8 border-2 border-purple-500/20 rounded-full"
              ></motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Educational Background */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 border border-purple-500/10">
            <h3 className="text-2xl font-bold text-white mb-4">Educational Journey</h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              My educational journey has been focused on building a strong foundation in Computer Science and Engineering. 
              Currently pursuing my Bachelor's degree at Parul University, I've gained comprehensive knowledge in 
              programming, software development, and modern web technologies through both theoretical learning and practical application.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;