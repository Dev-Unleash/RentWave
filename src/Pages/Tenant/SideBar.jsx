import React from 'react'
import ola from "../../assets/ola.jpg"
import { CiStar } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo-removebg-preview.png"
import "./Tenant.css"
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
        <div className="MenuContainer" style={{fontSize:"20px"}}>
         {/* <p><IoHome size={20}/><span>Home </span></p>
         <p>Subcription</p>
         <p><CiStar size={20}/><span>Maintenance </span></p>
         <p> <CiWallet size={20}/><span>Payment</span></p>
         <p>Account Setting</p> */}
         {/* <ul>
            <li>Home </li>
            <li>Subcription</li>
            <li>Maintenance</li>
            <li>Payment</li>
            <li>Account Setting</li>
         </ul> */}
         <IoHome size={20}/><nav><Link to="/TenantHome">Home</Link> </nav>
         <nav>Subcription</nav>
         <CiStar size={20}/>  <nav>Maintenance</nav>
         <CiWallet size={20}/> <nav><Link to="/TenantPayment">Payment</Link></nav>
         <nav><Link to="/TenantSetting"> Account Setting</Link></nav>
        </div>
       <div className="Logoutmenu">

       <CiWallet size={20}/>
       {/* <AiOutlineLogout className='LogoutIcon'/> */}
       <p>Logout</p>
       </div>
    </>
  )
}

export default SideBar