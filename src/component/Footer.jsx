import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import logo from "../images/logo.png";



export default function Footer() {
  return (
    <footer className="footer-section">

      {/* Contact Cards */}
      <div className="container contact-container">
        <div className="row g-4 justify-content-center">

          <div className="col-md-4">
            <div className="contact-card">
              <div className="icon-box"><FaPhoneAlt /></div>
              <div>
                <p className="label">Call us on</p>
                <h5>+1 (888) 807-5000</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card">
              <div className="icon-box"><FaEnvelope /></div>
              <div>
                <p className="label">Email Us</p>
                <h5>demo@gmail.com</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card">
              <div className="icon-box"><FaMapMarkedAlt /></div>
              <div>
                <p className="label">Location</p>
                <h5>addresss..</h5>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Logo & Links */}
      <div className="container footer-bottom">
        <div className="row align-items-center">

          <div className="col-md-5 footer-logo">
           <img src={logo} alt="Harmoniq Logo" style={{ 
    height:" 100%",
    width: "100%",
    objectFit: "contain",
}} />
                  
          </div>

          <div className="col-md-6 text-center nav-links">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">COURSES</a>
            <a href="#">GALLERY</a>
            <a href="#">CONTACT US</a>
          </div>
{/* 
          <div className="col-md-4 text-end social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaPinterestP />
            <FaLinkedinIn />
          </div> */}

        </div>
      </div>

      <div className="footer-copy">
        Copyright © 2024 Musicali | Powered by Onecontributor
      </div>

    </footer>
  );
}
