import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-purple-500/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <span>© 2025 Subhadeep Ghosh | Built with React</span>
            <Heart size={16} className="text-red-400" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;