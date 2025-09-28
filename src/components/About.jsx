import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart, Home } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: <MapPin size={20} />, label: 'Current Location', value: 'Vadodara, Gujarat' },
    { icon: <Heart size={20} />, label: 'Native Place', value: 'Kolkata, West Bengal' },
    { icon: <Home size={20} />, label: 'Born & Brought up', value: 'Ranchi, Jharkhand' }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 z-10"></div>
              <img 
                className="w-full h-96 object-cover rounded-2xl"
                alt="Subhadeep working on development projects"
               src="https://images.unsplash.com/photo-1665667332739-d33305807f07" />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full shadow-lg"
            >
              <span className="text-white font-bold text-lg">💻</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with hands-on experience in modern web technologies. 
                My journey began with a strong foundation in Computer Science Engineering, and I've been 
                continuously expanding my skills through practical projects and professional experience.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                From working as a Support Engineer at Apollo Tyres to interning as a Web Developer at Barodaweb, 
                I've gained valuable insights into both technical problem-solving and collaborative development processes.
              </p>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 bg-slate-800/30 rounded-lg p-4 border border-purple-500/10"
                >
                  <div className="text-purple-400">
                    {info.icon}
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">{info.label}</span>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;