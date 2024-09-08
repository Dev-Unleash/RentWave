
import React, { useState } from 'react';
import "./Signup.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import ReactCountryFlag from "react-country-flag"
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa6'


const Signup = () => {
  const [seePassWord, setSeePassWord] = useState(true)
  const lookPassWord = () => {
    setSeePassWord(false)
  }

  return (
    <div className='SignUpContainer'>
      <div className='firstSide'>
        <form className='SignUpCenter'>
          <div className='topLogo'>
            <div className="Logo">
              <Link to="/" className="Logo">
                <img src={logo} alt="logo" style={{ width: "70%", }} />
              </Link>
            </div>
            <h4 style={{ fontSize: "14px", width: '100%', marginBottom: "50px", }}>Sign up your business on Rent Wave</h4>
          </div>
          <h4 className='userinfo'>User Information</h4>
          <p>This information would be used to create your account.</p>
          <div className='nameContainer'>
            <div className='Name'>
              <h5>FirstName</h5>
              <input type="text" name='firstName' className='input' />
            </div>
            <div className='Name'>
              <h5>LastName</h5>
              <input type="text" name='lastName' className='input' />
            </div>
          </div>
          <div className='info'>
            <h5>Email</h5>
            <input type="text" name='email' className='input1' />
          </div>
          <div className='info'>
            <h5>PhoneNumber</h5>
            <div className='input1' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div className='flag' style={{ width: "10%", height: "100%", paddingInline: "6px", borderRight: "1px solid black", display: "flex", justifyContent: 'center', alignItems: 'center' }}><ReactCountryFlag countryCode="ng" svg style={{ width: '16px', height: '16px' }} /></div>
              <input style={{ width: "90%", height: "100%", borderLeft: "1px solid black", border: "none", fontSize: "12px" }} type="number" name='phoneNumber' placeholder='+234' />
            </div>
          </div>
          <div className='info'>
            <h5>Password</h5>
            <div className='passkey'>
              <input type={seePassWord ? "password" : "text"} className='input2' />
              {
                seePassWord ? <IoEye className="icon" onClick={lookPassWord} /> :
                  <IoEyeOff className="icon" onClick={() => setSeePassWord(true)} />
              }</div>
          </div>
          <div className='info'>
            <h5>Confirm-Password</h5>
            <div className='passkey'>
              <input type={seePassWord ? "password" : "text"} className='input2' />
              {
                seePassWord ? <IoEye className="icon" onClick={lookPassWord} /> :
                  <IoEyeOff className="icon" onClick={() => setSeePassWord(true)} />
              }</div>
          </div>
          <div className='terms'>
            <input style={{ width: "12px", height: "12px", border: "1px solid rgba(0, 0, 0, 0.469)" }} type="checkbox" name="" /><span style={{ fontFamily: "sans-serif", fontSize: "10px", textAlign: "center" }}>I agree with RentWave, and the collection and processing of my personal data in accordance with RentWave</span>
          </div>
          <button className='signupBtn'>Sign-Up</button>
          <p style={{ fontFamily: "sans-serif", fontSize: "10px", textAlign: "center" }}>
            Already have an account? <span style={{ color: "royalblue", fontFamily: "sans-serif", fontSize: "10px", cursor: "pointer" }}><Link to="/Login">Log in</Link></span>
          </p>
          <p style={{ fontFamily: "sans-serif", fontSize: "10px", textAlign: "center" }}>By creating an account you automatically agree to RentWave</p>
          <span style={{ color: "royalblue", fontFamily: "sans-serif", fontSize: "10px", cursor: "pointer", textAlign: "center", fontWeight: "600" }}>Terms and Conditions</span>

        </form>
      </div>
      <div className='secondSide'>
        <div className="Logo">
          <Link to="/" className="Logo">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <h4>Sign up your business on Rent Wave</h4>
        <p>Manage Rent Payment With Ease</p>
      </div>
    </div>
  );
};

export default Signup;