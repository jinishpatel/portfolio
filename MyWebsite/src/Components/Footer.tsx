import React from "react";
import "./footer.css";
import { FaHome, FaMobile, FaVoicemail } from "react-icons/fa";
import { RiHome3Line } from "react-icons/ri";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-container">
        <div className="left">
          <div className="location">
            <RiHome3Line
              size={20}
              style={{ color: "#FFF", marginRight: "2rem" }}
            />
            <div>
              <p> 1451 Pate Crt</p>
              <p>Mississauga, Canada</p>
            </div>
          </div>
          <div className="mobile">
            <FaMobile
              size={20}
              style={{ color: "#FFF", marginRight: "2rem" }}
            />
            <div>
              <h4>
                <a href="tel:+1416-505-9345">+1 416-505-9345</a>
              </h4>
            </div>
          </div>
          <div className="email">
            <FaVoicemail
              size={20}
              style={{ color: "#FFF", marginRight: "2rem" }}
            />
            <div>
              <p>
                <a href="mailto:jinish5597@gmail.com">jinish5597@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About My self</h4>
          <p>
            Self Motivated and eager to learn new technologies and apply that in
            live field...
          </p>
          <p>
            <FiFacebook size={20} style={{ marginRight: "2rem" }} />

            <SiInstagram size={20} style={{ marginRight: "2rem" }} />

            <FiGithub size={20} style={{ marginRight: "2rem" }} />

            <SlSocialLinkedin size={20} style={{ marginRight: "2rem" }} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
