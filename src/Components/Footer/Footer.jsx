
import React from "react";
import "./Footer.css";
import image from "../../assets/pune logo.png";

const Footer = () => {
  return (
    <footer className="part">
      <div className="part1">
        <img src={image} alt="" />

        <div className="logo-content">
          <h3>भारतीय विज्ञान शिक्षा एवं अनुसंधान संस्थान ,पुणे</h3>
          <h3>INDIAN INSTITUTE OF SCIENCE EDUCATION AND RESEARCH ,PUNE</h3>
          <p>
            An Autonomous institution of the Ministry of Education, Govt of
            India
          </p>
        </div>
      </div>
      <div className="part2">
        <p>Hotha Srinivas</p>
        <p>
          Contact Professor <a href="tel:+91-20-25908015">+91-20-25908015</a>
        </p>
      </div>
      <div className="part3">
        <p>
          Questions? Call <a href="tel:+919581438324">+91-9581438324</a>
        </p>
        <p>
          Email-us at{" "}
          <a href="mailto:bhukya.sai@students.iiserpune.ac.in">
            bhukya.sai@students.iiserpune.ac.in
          </a>
        </p>
        <h4>IISER PUNE</h4>
      </div>
    </footer>
  );
};

export default Footer;
