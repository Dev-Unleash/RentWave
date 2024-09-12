import React, { useState } from 'react'
import "./Login.css"
import Logo from "../../assets/logo.png"
import { FaRegEye } from 'react-icons/fa6'
import { FaRegEyeSlash } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Login = () => {
  const [seePassWord, setSeePassWord] = useState(true)
  const lookPassWord = () => {
    setSeePassWord(false)
  }
  
  return (
    <>
        <div className="LoginLeft">
          <div className="LoginInputContainer">
            <div className="LoginInputUp">
            <div className='topLogo'>
            <div className="Logo">
              <Link to="/" className="Logo" style={{marginBottom:"100px"}}>
                <img src={Logo} alt="logo" style={{ width: "70%", }} />
              </Link>

            </div>
            <h4 style={{ fontSize: "14px", width: '100%', marginBottom: "50px", }}>Sign up your business on Rent Wave</h4>
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

                <p>Forgot Password?</p>
              </form>
            </div>
            <div className="LoginInputDown">
              <button>Login</button>
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
    </>
  )
}

export default Login