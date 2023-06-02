import React from "react";
import "./footer.css";
import { FaHome, FaMobile, FaVoicemail } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-container">
        <div className="left">
          <div className="location">
            <FaHome />
          </div>
          <div className="mobile">
            <FaMobile />
          </div>
          <div className="email">
            <FaVoicemail />
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Footer;
