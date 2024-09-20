import React, { useState } from "react";
import "./Login.css";
import Logo from "../../assets/logo.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
  const nav = useNavigate();
  const [seePassword, setSeePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  const handleClose = () => {
    nav(-1);
  };

  const togglePasswordVisibility = () => {
    setSeePassword(!seePassword);
  };

  const userLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const url = "https://rentwave.onrender.com/api/v1/login";

    if (!email || !password) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    setLoadingMessage("Preparing your dashboard, please wait...");

    const ApiData = { email, password };

    try {
      const res = await axios.post(url, ApiData);
      console.log(res)
      setLoading(false);
      toast.success("Login successful");

      const userData = res.data.data;
      const userToken = res.data.token;
      localStorage.setItem("userInfo", JSON.stringify(userData));
      localStorage.setItem("userToken", userToken);

      setTimeout(() => {
        if (userData.role === "Landlord") {
          nav("/Landlord");
        } else {
          nav("/TenantHome");
        }
      }, 1000); 
    } catch (error) {
      setLoading(false);
      setLoadingMessage(""); 
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : "Login failed. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <div className="LoginContainer">
        <div className="LoginWrapper">
          <p
            onClick={handleClose}
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
            <IoArrowBackSharp className="icon" style={{ width: "40px",height:'40px', paddingLeft:'20px' }} /> 
          </p>
          <div className="LoginLeft">
            <div className="LoginInputContainer">
              <div className="LoginInputUp">
                <div className="topLogo">
                  <div className="Logo">
                    <Link to="/" className="Logo" style={{ marginBottom: "100px" }}>
                      <img src={Logo} alt="logo" />
                    </Link>
                  </div>
                  <h4 style={{ fontSize: "14px", width: "100%", marginBottom: "50px", textAlign:"center", paddingBottom:'90px' }}>
                    Sign up your business on Rent Wave
                  </h4>
                </div>
                <form className="loginForm" onSubmit={userLogin}>
                  <div className="LoginInputForm">
                    <div className="input-div">
                      <p>Email</p>
                      <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="input-div">
                      <p>Password</p>
                      <div className="passwordholder">
                        <input
                          type={seePassword ? "password" : "text"}
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {seePassword ? (
                          <FaRegEye className="icon" onClick={togglePasswordVisibility} />
                        ) : (
                          <FaRegEyeSlash className="icon" onClick={togglePasswordVisibility} />
                        )}
                      </div>
                    </div>
                    <p>
                  <Link style={{color:'royalblue'}} to="/ForgotPassWord"> Forgot Password?</Link>
                </p>
                  </div>


                  <div className="LoginInputDown">
                    <button style={{ fontWeight: "600" }} type="submit" disabled={loading}>
                      {loading ? "Loading..." : "Login"}
                    </button>
                    <div className="Down">
                      <p>
                        Don't have an account?{" "}
                        <span>
                          <Link to="/signUp" style={{color:'royalblue'}}>Sign Up</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </form>
              
                </div>
                
                
            </div>
          </div>
          <div className="secondSide">
            <div className="Logo">
              <Link to="/" className="Logo">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <h4>Login your business on Rent Wave</h4>
            <p>Manage Rent Payment With Ease</p>
          </div>
        </div>

        {/* Loading Overlay */}
        {loading && (
          <div className="loading-overlay">
            <div className="loading-message">
              <h4>{loadingMessage}</h4>
              <p>Loading...</p>
            </div>
          </div>
        )}
      </div>
      <Toaster />
    </>
  );
};

export default Login;
