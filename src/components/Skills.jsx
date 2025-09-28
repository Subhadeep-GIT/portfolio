import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, GitBranch, MessageCircle } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: ['JavaScript', 'Node.js', 'Basic Java concepts OOPs'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frontend Frameworks',
      icon: <Globe size={24} />,
      skills: ['React'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Backend Frameworks',
      icon: <Database size={24} />,
      skills: ['Express'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone size={24} />,
      skills: ['Basics of React Native'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Version Control',
      icon: <GitBranch size={24} />,
      skills: ['Git & GitHub'],
      color: 'from-gray-500 to-slate-500'
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: ['MySQL', 'MongoDB'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const softSkills = [
    'English Speaking',
    'Strong analytical and problem solving skill',
    'Team collaboration and communication'
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="bg-slate-700/50 rounded-lg px-3 py-2 text-gray-300 text-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-white">
            <MessageCircle className="inline-block mr-3 text-purple-400" size={32} />
            Soft Skills
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-full px-6 py-3 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300"
              >
                <span className="text-white font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;