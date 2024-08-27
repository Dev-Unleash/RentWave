import React from "react";
import "./Footer.css"
import { Link, NavLink } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";







const Footer = () => {
  return (
    <div className='FooterContainer'>
      <div className="first">
        <div className="abt">
        <Link to="/" className="Logo">
          <h3 style={{textAlign: "left"}}>RentWave</h3>
        </Link>
        <p style={{fontSize: "8px", textAlign: "left"}}>RentWave reflect your personality and what you stand for, we help to amplify this beauty to/in your environment.</p>
        </div>
        <div className="ctu">
          <h6 style={{fontSize: "14px", textAlign: "left", color: "black"}}>CONTACT US</h6>
          <p style={{fontSize: "9px", textAlign: "left"}}>Add : 56, Billy crescent, IApapa, Lagos state</p>
          <p style={{fontSize: "9px", textAlign: "left"}}>Tell : +2349029523034</p>
          <p style={{fontSize: "9px", textAlign: "left"}}>Email : asemudaraglory@gmail.com</p>
        </div>
      </div>
      <div className="second">
        <ul className="list">
          <p>About us</p>
          <p>Contact us</p>
          <p>Services</p>
          <p>Categories</p>
        </ul>
        <ul className="list">
          <p>Support</p>
          <p>Knowledge base</p>
          <p>FAQs</p>
        </ul>
        <ul className="list">
          <p>jobs</p>
          <p>Our team</p>
          <p>Leadership</p>
          <p>Privacy policy</p>
        </ul>
      </div>
      <div className="third">
        <div className="news-letter">
       <p style={{display: "flex", justifyContent: "center", alignItems: "center"}}>< CiMail style={{width: "20px",height: "20px"}}/> Subscribe to Newsletter</p>
       <input type="text"  placeholder="Enter your email" style={{width: "150px", height: "auto",background: "none", outline: "none",border: "1px solid black",borderRadius: "3px",paddingInline: "5px", color: "black", overflow: "hidden" }}/>
       <button style={{width: "100px", backgroundColor: "black", borderRadius: "3px", color: "white",cursor: 'pointer', border: "none"}}>Submit</button>
        </div>
        <div className="socials-icon">
          <div className="socials"><FaFacebookF style={{width: "18px", }}/></div>
          <div className="socials"><FaInstagram style={{width: "18px", }}/></div>
          <div className="socials"><FaTwitter style={{width: "18px", }}/></div>
          <div className="socials"><RiLinkedinFill style={{width: "18px", }}/></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
