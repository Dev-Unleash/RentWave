import React, { useState, useEffect } from 'react';
import './Hero.css';
import dashboard from "../../assets/dashboard.png";
import logo from '../../assets/logo.png';
import devBen from '../../assets/devBen.png';
import { IoHome } from "react-icons/io5";

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
      <div className='hero-dashboard'>
        {/* <img src={dashboard} alt="" /> */}
        <div className='heroDashLeft'>
          <div className="heroLogo">
            <Link to="/" className="heroLogo">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className='herodashProfile'>
            <Link style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} to='/profile'><img src={devBen} alt="" /></Link>
            <h5>Mr Johnson <br />
              <span style={{fontWeight:'600'}}>Welcome</span></h5>
          </div>
          <div className='heroProfileIcon'> <IoHome style={{ width: '30px', height: '30px' }} className="menuIcon" />   <span><Link style={{ color: 'black', paddingLeft: '10px', fontSize: '18px' }} to='/Landlord'>Home</Link></span></div>
        </div>
        <div className='heroDashRight'>
          <h4>Overview</h4>
          <p>Here’s a quick overview of what’s happing</p>
          <div className='heroDashCard'>
            <div className='heroCard'>
              <p>Space Booked</p>
              <h5>0</h5>
              <Link to='/Landlord' style={{color:'blue'}}>See All</Link>
            </div>
            <div className='heroCard'>
            <p>Maintainace Request</p>
              <h5>0</h5>
              <Link to='/Landlord' style={{color:'blue'}}>See All</Link>
            </div>
            <div className='heroCard'>
            <p>Active Subscription</p>
              <h5>0</h5>
              <Link to='/Landlord' style={{color:'blue'}}>See All</Link>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Hero;
