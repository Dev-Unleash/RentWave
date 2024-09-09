import React from 'react'
import "./ForgotPassword.css"
import Logo from "../../assets/logo.png"
import image from "../../assets/image.png"
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


const ForgotPassword = () => {

  return (
    <div className='resetPasswordContainer1'>
      <div className="resetPasswordWrapper1">
        <div className="backIcon1">
       
        <p className='icon' style={{fontSize:'14px',textAlign:'center',fontWeight:'600',display:'flex',justifyContent:'center',alignItems:'center',color:'black'}}> <IoArrowBackSharp style={{width: '25px', height:'25px'}} />  Go Back</p>
        </div>
        <div className="ResetPasswordInputContainer1">
          <div className="ResetPasswordInputWrapper1">
              <div className="resetPasswordUp1">
              
              <div className="logoContainer1">
            <div className="logo1">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="keyImage1">
            <div className="ImageBox1">
            <img src={image} alt="" />
            </div>
           
            <p>Forgot Password?</p>
          </div>
          <p>Enter the email address you used to register. <br /> We will send
          you an email with instructions to <br /> reset your password.</p>
              </div>
             
              <div className="resetPasswordDown1">
                <div className="NewPassword1">
                <div className='one1'>
                <p>Email Address</p>
                  <input type="email1" />
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