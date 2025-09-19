import React from "react";
import "../assets/styles/Header.css";
import profilePic from "../assets/images/200345305009.jpg";

function Header() {
  return (
    <header className="animate__animated animate__fadeInDown" style={{ textAlign: "center" }}>
      <img
        src={profilePic}
        alt="Subhadeep Ghosh"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "1rem",
          border: "4px solid #ff6b35"
        }}
      />
      <h1 style={{ fontSize: "3rem", margin: "0.5rem 0", color: "#ff6b35" }}>
        Subhadeep Ghosh
      </h1>
      <p style={{ fontSize: "1.3rem", color: "#dcdcdc" }}>
        Full Stack Developer | Proficient in React, Node.js, and Modern Web Technologies
      </p>
    </header>
  );
}

export default Header;