import React from "react";
import "../assets/styles/Footer.css";

function Footer() {
  return (
    <footer>
      &copy; {new Date().getFullYear()} Subhadeep Ghosh | Built with React
    </footer>
  );
}

export default Footer;