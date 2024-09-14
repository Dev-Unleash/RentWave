import React from "react";
import ola from "../../assets/ola.jpg";
import { CiStar } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-removebg-preview.png";
import "./Tenant.css";
const SideBar = () => {
  return (
    <>
      <div className="LogoContainer">
        <div className="Logo">
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className="Profile">
        <div className="Pics">
          <img src={ola} alt="" />
        </div>
        <p>Tolani</p>
        <h3>Welcome</h3>
      </div>
      <div className="MenuContainer" >
        <div className="MenuWrapper">
          <nav>
            {" "}
            <IoHome size={30} style={{fontSize:"20px"}}/>
            <Link to="/TenantHome" style={{ textDecoration: "none" ,color:"black" }}>
              Home
            </Link>{" "}
          </nav>
          <nav>
            <CiWallet size={30} />
            <Link to="/TenantSub" style={{ textDecoration: "none",color:"black"  }}>
              Subcription
            </Link>
          </nav>
          <nav>
            {" "}
            <CiStar size={30} />{" "}
            <Link to="/TenantMain" style={{ textDecoration: "none",color:"black" }}>
              Maintenance
            </Link>
          </nav>
          <nav>
            {" "}
            <CiWallet size={30} />{" "}
            <Link to="/TenantPayment" style={{ textDecoration: "none",color:"black" }}>
              Payment
            </Link>
          </nav>
          <nav>
            <CiStar size={30} />{" "}
            <Link to="/TenantSettings" style={{ textDecoration: "none",color:"black" }} >
              {" "}
              Account Setting
            </Link>
          </nav>
        </div>
      </div>

      <div className="Logoutmenu">
        
        <nav style={{gap:"20px",display:"flex"}}>
            <AiOutlineLogout size={30}/>
            <Link to="/TenantSettings" style={{ textDecoration: "none",color:"black",fontSize:"20px",fontWeight:'500' }} >
              {" "}
              Logout
            </Link>
          </nav>
      </div>
    </>
  );
};

export default SideBar;
