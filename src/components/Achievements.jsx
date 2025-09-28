import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Badge as Certificate } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    'Developed strong communication and leadership skills',
    'Improved team coordination and task management',
    'Gained insights into project workflows and hierarchies',
    'Built self-confidence and enhanced public speaking skills'
  ];

  const certifications = [
    {
      name: 'Cisco Networking Certificate',
      icon: <Certificate size={24} />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Networking Certification (NPTEL, IIT Kharagpur)',
      icon: <Award size={24} />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: "Master's in Embedded System Design & IoT (Pantech Solutions)",
      icon: <Trophy size={24} />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: '5-day Workshop on 8085 Architecture (Pantech Solutions)',
      icon: <Star size={24} />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Trophy className="text-yellow-400" size={32} />
              Key Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">{achievement}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Certificate className="text-blue-400" size={32} />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cert.color} opacity-10 rounded-full -translate-y-12 translate-x-12`}></div>
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${cert.color} flex-shrink-0`}>
                      <div className="text-white">
                        {cert.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold leading-tight">{cert.name}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '4+', label: 'Certifications' },
              { number: '2+', label: 'Years Experience' },
              { number: '10+', label: 'Projects Completed' },
              { number: '100%', label: 'Dedication' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-purple-500/10"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;