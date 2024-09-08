import React from 'react'
import Header from '../../Components/Header/Header'
import Logo from "../../assets/logo-removebg-preview.png"
import "./Contact_us.css";
import About_us from '../../assets/About_Us.png'
const Contact_us = () => {
  return (
    <div className='ContactUsContainer'>
      <Header />
      <div className='aboutUs'>
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
      <div className="values">
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
                <div className="ImageContainer"></div>
              </div>
              <div className="box1">
                <div className="ImageContainer"></div>
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
                <div className="ImageContainer"></div>
              </div>
              <div className="box1">
                <div className="ImageContainer"></div>
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
      <div className="Contact">
        <div className="contactUsWrapper">
          <div className="contactText">
            <div className="TextImage">

            </div>
            <h1>Need Help?Contact Us <br /><p>Visit our <span style={{ color: " #4D86DB" }}>help center</span> to find answers to most questions</p></h1>
          </div>
          <div className="Contactbox">
            <div className="contactBox1">
              <div className="ChatBox1Wrapper">
                <div className="ContactBoxImage">
                  <p>By Chat</p>
                </div>
                <p>Did you notice the chat widget in the corner of this page?It's pretty handy.Try it!</p>
              </div>

            </div>
            <div className="contactBox1">
              <div className="ChatBox1Wrapper">
                <div className="ContactBoxImage">
                  <p>By Email</p>
                </div>
                <p>Send us an Email anytime day or night.We'll do our best to respond within 24 hours</p>
              </div>

            </div>
            <div className="contactBox1">
              <div className="ChatBox1Wrapper">
                <div className="ContactBoxImage">
                  <p>By Phone</p>
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
        <div className="FooterDown">
          <div className="FooterDownBox1">
            <div className="Logo">
              <img src={Logo} alt="" />
            </div>
            <h3>Avoid Late Fees</h3>
            <p> Eliminate the hassle of manually remembering to pay rent and avoid costly late fees</p>
          </div>
          <div className="FooterDownBox2">
            <h3>Resources</h3>
            <p>FAQ <br />Privacy Policy <br />Terms of service</p>
          </div>
          <div className="FooterDownBox3">
            <h3>Company</h3>
            <p>About Us <br /> Our Values <br /> Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact_us
