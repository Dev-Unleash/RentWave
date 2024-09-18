import React, { useState, useEffect } from 'react';
import './Hero.css';
import dashboard from "../../assets/dashboard.png"
import { Link } from 'react-router-dom';
// import HeroImage from './Hero.svg'

const Hero = () => {

  return (
    <div className="carousel">
     {/* <div className='circle'></div>
     <div className='circle1'></div>
     <div className='circle2'></div> */}
     <div className='content-center'>
     <h3>Simplify Rent Payment 
     and Collection</h3>
     <h6>Streamline your rent payment process and keep track of every transaction</h6>
     <button className='btnHero'><Link to="/Signup">Get Started</Link></button>
     </div>
     <div className='hero-dashboard'><img src={dashboard} alt="" />
     </div>


      
    </div>
  );
};

export default Hero;
