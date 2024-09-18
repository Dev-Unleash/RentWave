import React, { useState } from 'react'
import "./Tenantsettings.css"
import { FaCamera } from "react-icons/fa6";
import { MdCircleNotifications } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import ola from "../../assets/ola.jpg";
import { useNavigate } from 'react-router-dom';
const TenantSettings = () => {
  const[showImg,setShowImg]=useState()
  const navigate=useNavigate()
    const posting= (e)=>{
        const file= e.target.files[0]
        const myImage = URL.createObjectURL(file)
        setShowImg(myImage)
    }
    const handleClose = () => {
      navigate(-1); 
    }
  return (
    <div className='AcctSettingCon' >
      <div className="AcctSettingsWrapper">
        <div className="AcctSettingsHeader">
        <h3  className="CloseButtonPro" onClick={handleClose}><IoArrowBack  style={{height:"45px",width:"50px"}}/>
        Back</h3>
          <h3 style={{width:"80%",display:"flex",justifyContent:"center"}}>Account Setting</h3>
        </div>
        <div className="AcctSettingsDown">
        <div className="AcctProfile">
        <div className="Pics">
        {showImg && <img src={showImg} alt="Uploaded" />}
        <div className="UploadIcon">
                <input type="file" id='i' hidden onChange={posting} />
                <label htmlFor="i" style={{width:"max-content"}}>
                <FaCamera style={{height:"20px",
        width:"30px",position:"absolute",bottom:"-5px",
          right:"0px",cursor:"pointer"}}/>
                </label>
                </div>
      
          
        </div>
       
      </div>
      <div className="AcctInputContainer">
      <form action="" style={{height:"100%",width:"100%"}}>
          <div className="AcctInput">
            <p>First Name</p>
          <input type="text" />
          </div>
          <div className="AcctInput">
            <p>Last Name</p>
          <input type="text" />
          </div>
          <div className="AcctInput">
            <p>Phone Number</p>
          <input type="text" />
          </div>
          <div className="AcctInputdown">
            <div className="AcctInputdown1">
            <p>Gender</p>
          <select name="Gender" id="">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
          </select>
          </div>
          <div className="AcctInputdown1">
            <p>Date of Birth</p>
          <input type="date" style={{width:"100%",height:"60%",borderRadius:"5px",border:
            '1px solid grey'
          }} />
          </div>
            </div>
         
      </form>
      </div>
      <button style={{height:"8%",width:"45%",borderRadius:"10px",
        backgroundColor:"#4D86DB",cursor:"pointer",border:"none",color:"white",fontSize:"18px"}}>Save Changes</button>
        </div>
      </div>
    </div>
  )
}

export default TenantSettings