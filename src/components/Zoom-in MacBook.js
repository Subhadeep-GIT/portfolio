import { useState } from "react";
import { motion } from "framer-motion";
import "./MacbookZoom.css";

export default function MacbookZoom() {
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="zoom-container">
      <motion.div
        className="macbook-wrapper"
        animate={zoomed ? { scale: 2.5, y: -150 } : { scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onClick={() => setZoomed(true)}
      >
        <img
          src="/assets/images/macbook.png"
          alt="MacBook"
          className="macbook-img"
        />
        {zoomed && (
          <motion.div
            className="resume-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <iframe
              src="/assets/resume.pdf"
              title="My Resume"
              className="resume-frame"
            />
            <button
              className="close-btn"
              onClick={(e) => {
                e.stopPropagation();
                setZoomed(false);
              }}
            >
              ✕
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}