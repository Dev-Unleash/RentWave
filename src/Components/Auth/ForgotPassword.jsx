import React from 'react'
import "./ForgotPassword.css"
import Logo from "../../assets/logo.png"
import image from "../../assets/image.png"
import { Link } from 'react-router-dom'
import { IoArrowBackSharp } from "react-icons/io5";


const ForgotPassword = () => {
  return (
    <div className="DeContainer">
      {/* <div className="navack"></div> */}
      <div className="DeCarrier">
        <div className="DeLogo">
          <img src={Logo} alt="" />
        </div>
        <div className="DeContent">
          <div className="key">
          <img src={image} alt="" />
          </div>
          <h5>Forgot Password?</h5>
          <p>Enter the email address you used to register. We will send
          you an email with instructions to reset your password.</p>
          <h6>Email Address</h6>
          <input type="email" name="" id="" required={true}/>
          <button><Link to='/ResetPassword'>Reset Password</Link></button>
        </div>
      </div>
      <div className="backIcon">
        <IoArrowBackSharp className='icon'/>
          <p>Go Back</p>
        </div>
    </div>
  )
}

export default ForgotPassword