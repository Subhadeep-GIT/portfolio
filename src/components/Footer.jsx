import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const buildDate = process.env.NEXT_PUBLIC_BUILD_DATE || new Date().toISOString().split('T')[0];
  const lastCommit = process.env.NEXT_PUBLIC_LAST_COMMIT || buildDate;

  return (
    <footer className="py-6 px-4 border-t border-purple-500/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6"
        >
          <p className="text-gray-400 text-sm sm:text-base flex items-center gap-1">
            © {currentYear} Subhadeep Ghosh | Built with React
            <motion.span whileHover={{ scale: 1.3 }} className="inline-block">
              <Heart size={16} className="text-red-400" />
            </motion.span>
          </p>

          <p className="text-gray-400 text-xs sm:text-sm">
            Last build: {buildDate} | Last commit: {lastCommit}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;