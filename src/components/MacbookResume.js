import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import macbookImg from "../assets/images/macbook.png";
import resumePDF from "../assets/pdf/resume.pdf";
import "../assets/styles/MacbookResume.css";

export default function MacbookResume() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="macbook-container">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.img
            key="macbook"
            src={macbookImg}
            alt="MacBook on table"
            className="macbook"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onClick={() => setIsOpen(true)}
          />
        ) : (
          <motion.div
            key="resume"
            className="resume-view"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <iframe
              src={resumePDF}
              title="My Resume"
              className="resume-frame"
            />
            <button
              className="close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close Resume"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}