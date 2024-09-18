import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoArrowBackSharp, IoEye, IoEyeOff } from "react-icons/io5";
import ReactCountryFlag from "react-country-flag";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const Signup = () => {
  const [seePassWord, setSeePassWord] = useState(true);
  const [seePassWord2, setSeePassWord2] = useState(true);

  const lookPassWord = () => {
    setSeePassWord(false);
  };
  const lookPassWord2 = () => {
    setSeePassWord2(false);
  };
  const navigate = useNavigate();
  const handleClosebtn = () => {
      navigate(-1); 
    };
  // const register = async () => {
  //   console.log("clicked");
  //   const name = FormData.get("name");
  //   console.log(name);
  // };
  const [firstName,setFirstName]=useState("")
  console.log(firstName)
  const [lastName,setLastName]=useState("")
  console.log(lastName)
  const [email,setEmail]=useState("")
  console.log(email)
  const [phoneNumber,setPhoneNumber]=useState("")
  console.log(phoneNumber)
  const [password,setPassword]=useState("")
  console.log(password)
  const [confirmPassword,setConfirmPassword]=useState("")
  console.log(confirmPassword)


  // const register =()=>{
  //   if(!email || !password || !lastName || !phoneNumber || !firstName || !confirmPassword ){
  //     alert("All field required")
  //   }else{
  //       const ApiData={firstName:firstname}
  //   }
  // } 
  return (
    <div className="SignUpContainer">
      <p
         onClick={handleClosebtn}
        style={{
          fontSize: "14px",
          width: "20%",
          position: "absolute",
          top: "10px",
          left: "5px",
          textAlign: "center",
          display: "flex",
          justifyContent: "flexStart",
          alignItems: "center",
          color: "black",
          cursor: "pointer",
        }}
       
      >
        {" "}
        <IoArrowBackSharp  className="icon" style={{ width: "20px" }} /> Go Back
      </p>

      <div className="firstSide">
        <form className="SignUpCenter">
          <div className="topLogo">
            <div className="Logo-signup">
              <Link to="/" className="Logo-signup">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "70%", height: "100%", objectFit: "contain" }}
                />
              </Link>

            </div>

            <h4 className="userinfo">User Information</h4>
            <p>This information will be used to create your account.</p>

            <div className="nameContainer">
              <div className="Name">
                <h5>First Name</h5>
                <input
                  type="text"
                  name="firstName"
                  className="input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="Name">
                <h5>Last Name</h5>
                <input
                  type="text"
                  name="lastName"
                  className="input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="info">
              <h5>Email</h5>
              <input
                type="text"
                name="email"
                className="input1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
              />
            </div>

            <div className="info">
              <h5>Phone Number</h5>
              <div
                className="input1"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="flag"
                  style={{
                    width: "10%",
                    height: "100%",
                    paddingInline: "6px",
                    borderRight: "2px solid #e6e7e9",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ReactCountryFlag
                    countryCode="ng"
                    svg
                    style={{ width: "16px", height: "16px" }}
                  />
                </div>
                <input
                  style={{
                    width: "90%",
                    height: "100%",
                    borderLeft: "1px solid black",
                    border: "none",
                    fontSize: "12px",
                  }}
                  type="number"
                  name="phoneNumber"
                  placeholder="+234"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="info">
            <h5>Password</h5>
            <div className="passkey">
              <input
                type={seePassWord ? "password" : "text"}
                className="input2"
                onChange={(e)=>(setPassword((prev)=>prev + e.target.value))} />
              {seePassWord ? (
                <IoEye className="icon" onClick={lookPassWord} />
              ) : (
                <IoEyeOff
                  className="icon"
                  onClick={() => setSeePassWord(true)}
                />
              )}
            </div>
          </div>
          <div className="info">
            <h5>Confirm-Password</h5>
            <div className="passkey">
              <input
                type={seePassWord2 ? "password" : "text"}
                className="input2"
                onChange={(e)=>(setConfirmPassword((prev)=>prev + e.target.value))}/>
              {seePassWord2 ? (
                <IoEye className="icon" onClick={lookPassWord2} />
              ) : (
                <IoEyeOff
                  className="icon"
                  onClick={() => setSeePassWord2(true)}
                />
              )}
            </div>
          </div>
          <div className="terms">
            <input
              style={{
                width: "12px",
                height: "12px",
                border: "2px solid #e6e7e9",
              }}
              type="checkbox"
              name=""
              required
            />
            <span
              style={{
                fontFamily: "sans-serif",
                fontSize: "10px",
                textAlign: "center",
              }}
            >
              I agree with RentWave, and the collection and processing of my
              personal data in accordance with RentWave
            </span>
          </div>
          <button className="signupBtn" type="submit">
            Sign-Up
          </button>
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "10px",
              textAlign: "center",
            }}
          >
            Already have an account?{" "}
            <span
              style={{
                color: "royalblue",
                fontFamily: "sans-serif",
                fontSize: "10px",
                cursor: "pointer",
              }}
            >
              <Link to="/Login">Log in</Link>
            </span>
          </p>
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "10px",
              textAlign: "center",
            }}
          >
            By creating an account you automatically agree to RentWave
          </p>
          <span
            style={{
              color: "royalblue",
              fontFamily: "sans-serif",
              fontSize: "10px",
              cursor: "pointer",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Terms and Conditions
          </span>
        </form>
      </div>
      <div className="secondSide">
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
