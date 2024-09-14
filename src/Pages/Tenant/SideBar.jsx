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
            <IoHome className="menuIcon"/>
            <Link to="/TenantHome" style={{ textDecoration: "none" ,color:"black" ,display:"flex",alignItems:"center" }}>
              Home
            </Link>{" "}
          </nav>
          <nav>
            <CiWallet className="menuIcon" />
            <Link to="/TenantSub" style={{ textDecoration: "none",color:"black" ,display:"flex",alignItems:"center"  }}>
              Subcription
            </Link>
          </nav>
          <nav>
            {" "}
            <CiStar className="menuIcon" />{" "}
            <Link to="/TenantMain" style={{ textDecoration: "none",color:"black",display:"flex",alignItems:"center"  }}>
              Maintenance
            </Link>
          </nav>
          <nav>
            {" "}
            <CiWallet className="menuIcon" />{" "}
            <Link to="/TenantPayment" style={{ textDecoration: "none",color:"black",display:"flex",alignItems:"center"  }}>
              Payment
            </Link>
          </nav>
          <nav>
            <CiStar className="menuIcon" />{" "}
            <Link to="/TenantSettings" style={{ textDecoration: "none",color:"black",display:"flex",alignItems:"center" }} >
              {" "}
              Account Setting
            </Link>
          </nav>
        </div>
      </div>

      <div className="Logoutmenu">
        
        <nav style={{gap:"20px",display:"flex"}}>
            <AiOutlineLogout className="menuIcon"/>
            <Link to="/TenantSettings" style={{ textDecoration: "none",color:"black",fontSize:"20px",fontWeight:'500',display:"flex",alignItems:"center"  }} >
              {" "}
              Logout
            </Link>
          </nav>
      </div>
    </>
  );
};

export default SideBar;
