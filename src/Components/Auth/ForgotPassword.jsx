import React from 'react'
import "./ForgotPassword.css"
import Logo from "../../assets/logo.png"
import image from "../../assets/image.png"
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


const ForgotPassword = () => {

  return (
    <div className='resetPasswordContainer'>
      <div className="resetPasswordWrapper">
        <div className="backIcon">
        <IoArrowBackSharp className='icon'/>
          <p>Go Back</p>
        </div>
        <div className="ResetPasswordInputContainer">
          <div className="ResetPasswordInputWrapper">
              <div className="resetPasswordUp">
              
              <div className="logoContainer">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="keyImage">
            <div className="ImageBox">
            <img src={image} alt="" />
            </div>
           
            <p>Forgot Password?</p>
          </div>
          <p>Enter the email address you used to register. <br /> We will send
          you an email with instructions to <br /> reset your password.</p>
              </div>
             
              <div className="resetPasswordDown">
                <div className="NewPassword">
                <div className='one'>
                <p>Email Address</p>
                  <input type="email" />
                </div>
                </div>
              
                 

                <button><Link to='/ResetPassword'>Reset Password</Link></button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword