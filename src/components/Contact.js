import React from "react";

function Contact() {
  return (
    <section className="animate__animated animate__fadeInUp">
      <i className="fa-solid fa-address-card section-icon"></i>
      <h2>Contact Information</h2>
      <p>
        <i className="fa-solid fa-envelope"></i>{" "}
        <a href="mailto:subhadeep051@icloud.com">subhadeep051@icloud.com</a>
      </p>
      <p>
        <i className="fa-solid fa-phone"></i> 9102335613
      </p>
      <p>
        <i className="fa-brands fa-linkedin"></i>{" "}
        <a
          href="https://www.linkedin.com/in/subhadeep-ghosh-atl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </a>
      </p>
      <p>
        <i className="fa-solid fa-location-dot"></i> Vadodara, Gujarat
      </p>
      <p>
        <i className="fa-solid fa-house"></i> Native Place: Kolkata, West Bengal
      </p>
      <p>
        <i className="fa-solid fa-child"></i> Born and brought up in: Ranchi, Jharkhand
      </p>
    </section>
  );
}

export default Contact;