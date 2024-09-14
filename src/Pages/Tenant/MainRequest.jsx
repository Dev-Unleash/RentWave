
import React from "react";
import "./MainRequest.css";
import { useState } from "react";
import { IoImage } from "react-icons/io5";
const MainRequest = ({ closePopup }) => {
    const[showImg,setShowImg]=useState()
    const posting= (e)=>{
        const file= e.target.files[0]
        const myImage = URL.createObjectURL(file)
        setShowImg(myImage)
    }
  return (
    <div className="MainRequestPopupOverlay">
      <div className="MainRequestFormWrapper">
        <div className="MainRequestFormHeader">
        <h3 style={{width:"95%"}}>Maintenance Request Form </h3>
        {/* Form content goes here */}
        <h3 className="CloseButton" onClick={closePopup}>X</h3>
        </div>
        <div className="FormContainer">
            <div className="reqInput">
                <p>WHAT ARE YOU MAKING A REQUEST FOR?</p>
                <input type="text" />
            </div>
            <div className="MoreReq">
                <p>KINDLY GIVE MORE INFORMATION ON YOUR REQUEST</p>
                <textarea name="" id="" placeholder="Enter a short description of your unit here"></textarea>
            </div>
            <div className="DateReq">
                <p>KINDLY PROVIDE 3 DATES AND TIME YOU WOULD BE AVAILABLE FOR A VISIT</p>
                <div className="DateReqInput">
                    <div className="DateReqInputleft">
                        <input type="date" />
                        <input type="date" />
                        <input type="date" />
                    </div>
                    <div className="DateReqInputright">
                    <input type="time" />
                    <input type="time" />
                    <input type="time" />
                    </div>
                </div>
            </div>
            <div className="reqPhone">
                <p>Phone Number</p>
                <input type="text" />
            </div>
            <div className="imagereq">
                <p>Kindly provide pictures relevant to the situation, if available</p>
                <div className="imgbox">
                    <div className="uploadBox">
                    {showImg && <img src={showImg} alt="Uploaded" />}
                    </div>
            
                <div className="UploadIcon">
                <input type="file" id='i' hidden onChange={posting} />
                <label htmlFor="i">
                  <IoImage  style={{ cursor: "pointer", width:"30px",height:"30px"}} />
                </label>
                </div>
            </div>
                
            </div>
            <div className="buttons">
                    <button style={{border:"2px solid #0052AA",
                    borderRadius:"25px",width:"25%",
                        height:"100%",color:"#4D86DB",
                        backgroundColor:"white",fontSize:"15px",cursor:"pointer"}}>cancel</button>
                    <button  style={{
                    borderRadius:"25px",width:"25%",
                        height:"100%",color:"white",
                        backgroundColor:"#4D86DB",
                        border:"none",fontSize:"15px",cursor:"pointer"}}>submit</button>
                </div>
        </div>
      </div>
    </div>
  );
};

export default MainRequest;
