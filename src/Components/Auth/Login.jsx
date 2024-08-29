import React, { useState } from 'react'
import "./Login.css"
import Logo from "../../assets/logo.png"
import { FaRegEye } from 'react-icons/fa6'
import { FaRegEyeSlash } from 'react-icons/fa6'
const Login = () => {
  const [seePassWord,setSeePassWord]=useState(true)
  const lookPassWord=()=>{
      setSeePassWord(false)
  }
  return (
    <div className='LoginContainer'>
      <div className="LoginWrapper">
      <div className="LoginLeft">
        <div className="LoginInputContainer">
          <div className="LoginInputUp">
            <form action="">
              <p>Email</p>
              <input type="text" placeholder='Email'/>
              <p>Password</p>
              <div className="passwordholder">
              <input  type={seePassWord
                ?"password":"text"
            } placeholder='Password'/>
              {
                seePassWord?<FaRegEye className="icon"  onClick={lookPassWord}/>:
                <FaRegEyeSlash className="icon"  onClick={()=> setSeePassWord(true)}/>
            }
              </div>
          
              <p>Forgot Password?</p>
            </form>
          </div>
          <div className="LoginInputDown">
            <button>Login</button>
            <div className="Down">
                <p>Don't have an account? <span>Sign Up</span></p>
            </div>
            
          </div>
        </div>
      </div>
      <div className="LoginRight">
        <div className="LoginRightContainer">
          <div className="logoContainer">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
          </div>
          <h2>Login your <br /> account on Rent Wave</h2>
          <p>Manage payment with ease</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login