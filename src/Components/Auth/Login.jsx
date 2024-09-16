import React, { useState } from 'react'
import "./Login.css"
import Logo from "../../assets/logo.png"
import { FaRegEye } from 'react-icons/fa6'
import { FaRegEyeSlash } from 'react-icons/fa6'
import { IoArrowBackSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom'

const Login = () => {
  const [seePassWord, setSeePassWord] = useState(true)
  const lookPassWord = () => {
    setSeePassWord(false)
  }
  return (
    <div className='LoginContainer'>
      <div className="LoginWrapper">
      <p style={{fontSize:'14px', width:'20%', position: 'absolute', top:'10px', left:'5px', textAlign: 'center', display:'flex', justifyContent:'flexStart',alignItems:'center',color:'black',cursor:'pointer'}}> <IoArrowBackSharp className='icon' style={{width: "20px"}} />   Go Back</p>
        <div className="LoginLeft">
          <div className="LoginInputContainer">
            <div className="LoginInputUp">
            <div className='topLogo'>
            <div className="Logo">
              <Link to="/" className="Logo" style={{marginBottom:"100px"}}>
                <img src={Logo} alt="logo" />
              </Link>

            </div>
            <h4 style={{ fontSize: "14px", width: '100%', marginBottom: "50px", }}>Sign up your business on Rent Wave</h4>
            <br />
            <br />
            <br />
            <br />
          </div>
              <form action="">
                <div className='input-div'>
                  <p>Email</p>
                  <input type="text" placeholder='Email' />
                </div>
                <div className='input-div'>
                  <p>Password</p>
                  <div className="passwordholder">
                    <input type={seePassWord
                      ? "password" : "text"
                    } placeholder='Password' />
                    {
                      seePassWord ? <FaRegEye className="icon" onClick={lookPassWord} /> :
                        <FaRegEyeSlash className="icon" onClick={() => setSeePassWord(true)} />
                    }
                  </div>
                </div>

                <p><Link to='/ForgotPassWord'> Forgot Password?</Link></p>
              </form>
            </div>
            <div className="LoginInputDown">
              <button style={{fontWeight:"600"}}>Login</button>
              <div className="Down">
                <p>Don't have an account? <span><Link to="/signUp">Sign Up</Link></span></p>
              </div>

            </div>
          </div>
        </div>
        <div className='secondSide'>
        <div className="Logo">
          <Link to="/" className="Logo">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <h4>Login your business on Rent Wave</h4>
        <p>Manage Rent Payment With Ease</p>
      </div>
      </div>
    </div>
  )
}

export default Login