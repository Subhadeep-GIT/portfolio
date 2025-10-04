import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'contact@subhadeep.space',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 9102335613',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Vadodara, Gujarat',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "✅ Message Sent",
          description: "Thank you! Your message has been delivered."
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      toast({
        title: "❌ Error",
        description: "Something went wrong. Please try again later."
      });
    }
  };

  const handleSocialClick = (platform) => {
    let url = '';

    switch (platform) {
      case 'github':
        url = 'https://github.com/Subhadeep-GIT';
        break;
      case 'linkedin':
        url = 'https://www.linkedin.com/in/subhadeep-ghosh-atl/';
        break;
      case 'instagram':
        url = 'https://www.instagram.com/__niikamma__2.0/';
        break;
      case 'facebook':
        url = 'https://www.facebook.com/share/1BUufEuFtY/?mibextid=wwXIfr';
        break;
      default:
        toast({
          title: "🚧 Social Link",
          description: "This feature isn't implemented yet—but don't worry! 🚀"
        });
        return;
    }

    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${info.color}`}>
                      <div className="text-white">{info.icon}</div>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

{/* Social Links */}
<div className="pt-8">
  <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
  <div className="flex gap-4">
    <motion.button
      onClick={() => handleSocialClick('instagram')}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-3 bg-slate-800/50 rounded-full hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/20"
    >
      <Instagram size={24} className="text-white" />
    </motion.button>

    <motion.button
      onClick={() => handleSocialClick('facebook')}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-3 bg-slate-800/50 rounded-full hover:bg-purple-500/20 transition-all duration-300 border border-purple-500/20"
    >
      <Facebook size={24} className="text-white" />
    </motion.button>
  </div>
</div>
</motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-3xl font-bold text-white mb-8">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {['name', 'email'].map((field) => (
                    <div key={field}>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        placeholder={field === 'name' ? 'Your Name' : 'your.email@example.com'}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 transition-colors duration-200"
                        required
                      />
                    </div>
                  ))}
                </div>

                {['subject', 'message'].map((field) => (
                  <div key={field}>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    {field === 'subject' ? (
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                        className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 transition-colors duration-200"
                        required
                      />
                    ) : (
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        placeholder="Your message..."
                        className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 transition-colors duration-200 resize-none"
                        required
                      />
                    )}
                  </div>
                ))}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;