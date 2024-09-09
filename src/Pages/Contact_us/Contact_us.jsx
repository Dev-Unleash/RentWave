import React from 'react'
import Header from '../../Components/Header/Header'
import Logo from "../../assets/logo-removebg-preview.png"
import "./Contact_us.css";
import About_us from '../../assets/About_Us.png'
// import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import values4 from '../../assets/values4.png'
import values3 from '../../assets/values3.png'
import values2 from '../../assets/values2.png'
import values1 from '../../assets/values1.png'
import contactUs from '../../assets/contactUs.png'
import contactUs1 from '../../assets/contactUs1.png'
import contactUs2 from '../../assets/contactUs2.png'
import contactUs3 from '../../assets/contactUs3.png'
import { useRef } from 'react';




  const Contact_us = () => {
    const aboutRef = useRef(null);
    const valuesRef = useRef(null);
    const contactsRef = useRef(null);
  
    const scrollToSection = (section) => {
      if (section === 'about') {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 'values') {
        valuesRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 'contacts') {
        contactsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <div className='ContactUsContainer'>
       <Header scrollToSection={scrollToSection} />     
        <div className='aboutUs' ref={aboutRef}>
        <div className="aboutUsLeft">
          <h1>About Us</h1>
          <p>
            Rent Wave is poised to revolutionize the rental
            industry by providing
            a cutting-edge solution for rent payment tracking
            and property management.
            Our platform is designed to simplify the rental
            experience, reduce stress and anxiety,
            and improve communication between
            landlords and tenants. Join us in shaping the future of real estate management!</p>
        </div><div className="aboutUsRight">
          <img src={About_us} alt="abtc:\Users\AWEHOME\Downloads\About_Us.png" />
        </div>
      </div>
      <div className="values" ref={valuesRef}>
        <div className="OurValues">
          <div className="OurValueWrapper">
            <h1>Our Core Values</h1>
            <div className='boxContainer'>
              <div className="box1">
                <h3><hr />Kindness</h3>
                <p>This is our primary guiding
                  principle. Regardless of
                  circumstance, we choose to be
                  kind to those we serve, each
                  other, and the world at large.</p>
                <div className="ImageContainer"><img src={values4} alt="values" /></div>
              </div>
              <div className="box1">
                <div className="ImageContainer"><img src={values3} alt="values" /></div>
                <h3><hr />Customer Focus</h3>
                <p>Customers are the only reason
                  we are in business. We create
                  value by finding more and better
                  ways to be of service to them.</p>
              </div>
              <div className="box1">

                <h3><hr />Integrity</h3>
                <p>We always do our best to keep
                  the promises we make and act
                  with integrity even when no one
                  is watching.</p>
                <div className="ImageContainer"><img src={values2} alt="values" /></div>
              </div>
              <div className="box1">
                <div className="ImageContainer"><img src={values1} alt="values" /></div>
                <h3><hr />Curiosity</h3>
                <p>We embrace a beginner’s mind.
                  Everyone and everything has
                  something to teach us. We need
                  only to listen and seek to
                  understand.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Contact" ref={contactsRef}>
        <div className="contactUsWrapper">
          <div className="contactText">
            <div className="TextImage">
              <img src={contactUs} alt="contactUs" />
            </div>
            <h1>Need Help?Contact Us <br /><p>Visit our <span style={{ color: "#0052AA" }}>help center</span> to find answers to most questions</p></h1>
          </div>
          <div className="Contactbox">
            <div className="contactBox1">
              <div className="ChatBox1Wrapper">
                <div className="ContactBoxImage">
                  <img src={contactUs1} alt="contactUs" />                </div>
                <p>This feature will be added very soon. stay </p>
              </div>

            </div>
            <div className="contactBox1">
              <div className="ChatBox1Wrapper">
                <div className="ContactBoxImage">
                  <img src={contactUs2} alt="contactUs" />
                </div>
                <p><span style={{ color: "blue", cursor: 'pointer' }}>Send us an Email</span> anytime day or night.We'll do our best to respond within 24 hours</p>
              </div>

            </div>
            <div className="contactBox1">
              <div className="ChatBox1Wrapper">
                <div className="ContactBoxImage">
                  <img src={contactUs3} alt="contactUs" />
                </div>
                <p>Chat and email are your best options but if you are old school,call us at 09160754804</p>
              </div>

            </div>

          </div>
        </div>
      </div>
      <div className="Footer">
        <div className="FooterUp">
          <input type="text" placeholder='Email:' />
          <textarea name="" id="" placeholder='Type here'></textarea>
          <button>submit</button>
        </div>

        {/* <div className="FooterDown">
          <div className="FooterDownBox1">
            <div className="Logo">
              <img src={Logo} alt="" />
            </div>
            <h3>Avoid Late Fees</h3>
            <p> Eliminate the hassle of manually remembering to pay rent and avoid costly late fees</p>
          </div>
          <div className="FooterDownBox2">
          <h5>Resources</h5>
          <p>FAQ</p>
          <p>Privacy Policy</p>
          <p>Terms of service</p>
          </div>
          <div className="FooterDownBox3">
          <h5>Company</h5>
          <Link>About Us</Link>
          <Link>Our Values</Link>
          <Link>Contact us</Link>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  )
}

export default Contact_us
