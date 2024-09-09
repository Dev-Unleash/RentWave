import React from "react";
import "./Footer.css"
import { Link, NavLink } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import logo from "../../assets/logo.png"







const Footer = () => {
  return (
    <div className='FooterContainer'>
      <div className="footer-content">
        <div className="first">
          <Link to="/" className="Logo">
            <img src={logo} alt="logo" />
          </Link>
          <p>Eliminate the hassle of manually remembering to pay rent and avoid costly late fees.</p>
        </div>
        <div className="second">
          <h5>Resources</h5>
          <p>FAQ</p>
          <p>Privacy Policy</p>
          <p>Terms of service</p>

        </div>
        <div className="third">
          <h5>Company</h5>
          <Link>About Us</Link>
          <Link>Our Values</Link>
          <Link>Contact us</Link>
        </div>
        {/* <div className="socials-icon">
        <div className="socials"><FaFacebookF style={{ width: "18px", }} /></div>
        <div className="socials"><FaInstagram style={{ width: "18px", }} /></div>
        <div className="socials"><FaTwitter style={{ width: "18px", }} /></div>
        <div className="socials"><RiLinkedinFill style={{ width: "18px", }} /></div>
      </div> */}
      </div>
      <div className="bottom-footer">
        <div className="copyright">&copy; 2024 RentWave Inc.</div>
        <div className="bottom-right">
          <p>Acceptable Use Policy</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <div className="top-btn">^</div>
        </div>
       
      </div>
    </div>

  )
}

export default Footer
