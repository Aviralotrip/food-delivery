import React from "react";
import "./Footer.css";
import { assets } from "../../food del assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            provident cupiditate esse corporis quaerat placeat temporibus
            laborum nisi eos error. Deleniti, placeat. Ipsam.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" /> 
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>+1-212-456-7890 </li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom"></div>
        <p>Copyright &copy; 2022. All rights reserved</p>
    </div>
  );
};

export default Footer;
