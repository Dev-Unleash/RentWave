import React, { useState } from "react";
import "./Login.css";
import Logo from "../../assets/logo.png";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
  const handleClose = () => {
    nav(-1); 
  }
  const [seePassWord, setSeePassWord] = useState(true);
  const lookPassWord = () => {
    setSeePassWord(false);
  };
const nav=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const userLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!email || !password) {
      toast.error("All fields are required");
    } else {
      setLoading(true);
      const ApiData = {
        email,
        password,
      };
      const url = "https://rentwave.onrender.com/api/v1/login";
      // await fetch(url, {
      //   method: "POST",
      //   body: JSON.stringify({
      //     firstName,
      //     lastName,
      //     email,
      //     phoneNumber,
      //     password,
      //     confirmPassword,
      //   }),
      //   headers: { "content-type": "application/json" },
      // }).then(() => {
      //   console.log("Done");
      // });
      axios
        .post(url, ApiData)
        .then((res) => {
          console.log(res);
          setLoading(false);
          toast.success("Login  successful");
          nav("/")
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
          toast.error("login failed. Please try again.");
        });
    }
  };
  return (
    <>
    <div className="LoginContainer">
      <div className="LoginWrapper">
        <p onClick={handleClose}
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
          <IoArrowBackSharp className="icon" style={{ width: "20px" }} /> Go
          Back
        </p>
        <div className="LoginLeft">
          <div className="LoginInputContainer">
            <div className="LoginInputUp">
              <div className="topLogo">
                <div className="Logo">
                  <Link
                    to="/"
                    className="Logo"
                    style={{ marginBottom: "100px" }}
                  >
                    <img src={Logo} alt="logo" />
                  </Link>
                </div>
                <h4
                  style={{
                    fontSize: "14px",
                    width: "100%",
                    marginBottom: "50px",
                  }}
                >
                  Sign up your business on Rent Wave
                </h4>
                <br />
                <br />
                <br />
                <br />
              </div>
              <form action="" onSubmit={userLogin}>
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
                      type={seePassWord ? "password" : "text"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    {seePassWord ? (
                      <FaRegEye className="icon" onClick={lookPassWord} />
                    ) : (
                      <FaRegEyeSlash
                        className="icon"
                        onClick={() => setSeePassWord(true)}
                      />
                    )}
                  </div>
                </div>

                <p>
                  <Link to="/ForgotPassWord"> Forgot Password?</Link>
                </p>
                </div>
                
                <div className="LoginInputDown">
            <button
                  style={{ fontWeight: "600" }}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Login"}
                </button>
              <div className="Down">
                <p>
                  Don't have an account?{" "}
                  <span>
                    <Link to="/signUp">Sign Up</Link>
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
    </div>
    <Toaster/>
    </>
  );
};

export default Login;
