import React, { useState } from 'react';
import "./Signup.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Signup = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className='SignUpContainer'>
      <div className='firstSide'>
        <div className='SignUpCenter'>
          <h4 className='userinfo'>User Information</h4>
          <p>This information would be used to create your account.</p>
          <div className='nameContainer'>
            <div className='Name'>
              <h5>FirstName</h5>
              <input type="text" className='input' />
            </div>
            <div className='Name'>
              <h5>LastName</h5>
              <input type="text" className='input' />
            </div>
          </div>
          <div className='info'>
            <h5>Email</h5>
            <input type="text" className='input1' />
          </div>
          <div className='info'>
            <h5>PhoneNumber</h5>
     
            <input type="text" name='phoneNumber' className='input1'/>
          </div>
          <div className='info'>
          <PhoneInput
              country={'ng'}
              value={phone}
              onChange={setPhone}
              inputStyle={{
                height: "10px",
                width: "20%",
                border: "2px solid brown",
                // overflow: "scroll"
                paddingLeft: "50px"  //
              }}
              buttonStyle={{
                padding: "10px", 
              }}
            />
          </div>
          <div className='info'>
            <h5>Password</h5>
            <input type="password" className='input1' />
          </div>
          <div className='info'>
            <h5>Confirm-Password</h5>
            <input type="password" className='input1' />
          </div>
          <div className='terms'>
            <input style={{ width: "12px", height: "12px", border: "1px solid rgba(0, 0, 0, 0.469)" }} type="checkbox" name="" /><span style={{ fontFamily: "sans-serif", fontSize: "10px", textAlign: "center" }}>I agree with RentWave, and the collection and processing of my personal data in accordance with RentWave</span>
          </div>
          <button className='signupBtn'>Sign-Up</button>
          <p style={{ fontFamily: "sans-serif", fontSize: "10px", textAlign: "center" }}>
            Already have an account? <span style={{ color: "royalblue", fontFamily: "sans-serif", fontSize: "10px", cursor: "pointer" }}>Log in</span>
          </p>
          <p style={{ fontFamily: "sans-serif", fontSize: "10px", textAlign: "center" }}>By creating an account you automatically agree to RentWave</p>
          <span style={{ color: "royalblue", fontFamily: "sans-serif", fontSize: "10px", cursor: "pointer", textAlign: "center", fontWeight: "600" }}>Terms and Conditions</span>

        </div>
      </div>
      <div className='secondSide'>
        <div className="Logo">
          <Link to="/" className="Logo">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
