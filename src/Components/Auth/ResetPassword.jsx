import React from 'react'
import "./ResetPassword.css"
import Logo from "../../assets/logo.png"
import image from "../../assets/image.png"
import { IoArrowBackSharp } from "react-icons/io5";
const ResetPassword = () => {
  return (
    <div className='resetPasswordContainer'>
      <div className="resetPasswordWrapper">
        <div className="backIcon1">
         
          <p style={{fontSize:'14px',textAlign:'center',fontWeight:'600',display:'flex',justifyContent:'center',alignItems:'center',color:'black'}}> <IoArrowBackSharp className='icon'style={{width: '25px', height:'25px'}} />  Go Back</p>
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

                <p>Reset Password?</p>
              </div>
              <p>Weldone you are one step away from resetting <br />
                your password</p>
            </div>

            <div className="resetPasswordDown">
              <div className="NewPassword">
                <div className='one'>
                  <p>New Password</p>
                  <input type="text" />
                </div>
                <div className='two'>
                  <p>Confirm New Password</p>
                  <input type="text" />
                </div>
                <button>Done</button>
              </div>



             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword