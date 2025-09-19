import React from "react";
import "../assets/styles/Experience.css";

function Education() {
  return (
    <section className="animate__animated animate__fadeInUp">
      <i className="fa-solid fa-graduation-cap section-icon"></i>
      <h2>Education</h2>
      <ul>
        <li>
          <strong>Bachelor’s Degree in Computer Science and Engineering</strong><br />
          Parul University, Vadodara, Gujarat (Expected: 2026)
        </li>
        <li>
          <strong>Diploma in Computer Science and Engineering</strong><br />
          Parul University, Vadodara, Gujarat (Completed: 2023)
        </li>
        <li>
          <strong>Matriculation</strong><br />
          Ursuline Convent School, Muri
        </li>
      </ul>
    </section>
  );
}

export default Education;