import React from "react";

// Import components
import ElectricBorder from "./components/ElectricBorder";
import LiquidEther from "./components/LiquidEther";

function App() {
  const description = `Aspiring Full Stack Developer seeking an entry-level position to apply my skills in 
  JavaScript, React, Node.js, and database management, while contributing to 
  innovative projects that drive business success.`;

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Portfolio V1</h1>

      {/* Description outside border */}
      <p>{description}</p>

      {/* ElectricBorder Component */}
      <ElectricBorder
        color="#7df9ff"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 16, padding: "1rem", marginTop: "2rem" }}
      >
        <div>
          <p>{description}</p>
        </div>
      </ElectricBorder>

      {/* Optional: LiquidEther Component */}
      {/* Uncomment after installing 'three' */}
      {/*
      <div style={{ marginTop: "2rem" }}>
        <LiquidEther
          style={{ width: "100%", height: 300 }}
          color="#ff00ff"
          intensity={0.7}
        />
      </div>
      */}
    </div>
  );
}

export default App;