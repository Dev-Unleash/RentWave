

import React, { useState } from "react";
import "./TenMain.css";
import SubImage from "../../assets/download 16.png"; 
import { useNavigate } from "react-router-dom";
import MainRequest from "./MainRequest";

const TenMain = () => {
  const [showPopup, setShowPopup] = useState(false); 
  const navigate = useNavigate();

  const handleRequestClick = () => {
    setShowPopup(true); 
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className={`TenantMainContainer ${showPopup ? "blur-background" : ""}`}>
        <div className="TenantMainContainerHeader">
          <div className="TenantMainContainerright">
            <h3>Maintenance Request</h3>
            <p>Keep track of maintenance requests on RentWave</p>
          </div>
        </div>

        <div className="TenantMainDown">
          {/* <div className="TenantMainDownHeader" >
           
          </div> */}
          <table>
            <thead style={{width:"100%"}}>
            <tr  className="TenantMainDownHeader" >
              <th style={{borderTopLeftRadius:"5px"}}>REASON</th>
              <th>DATE / TIME CREATED</th>
              <th style={{borderTopRightRadius:"5px"}}>STATUS</th>
            </tr>
            </thead>
           <tbody className="TenantMaindowncon">
           <tr style={{display:"flex",width:"100%",justifyContent:"center",
            }}>
          <td style={{display:"flex",justifyContent:"flex-start"}}>Alex</td>
        <td style={{display:"flex",gap:"10px",justifyContent:"center"}}>11/13/2005   <p  style={{display:"flex",fontSize:"17px",color:"black",
          fontWeight:"500",alignItems:"center",}}>12:30pm</p></td>
        <td style={{display:"flex",justifyContent:"flex-end"}}>sent</td>
    </tr>
    <tr style={{display:"flex",width:"100%",justifyContent:"center",
            }}>
          <td style={{display:"flex",justifyContent:"flex-start"}}>Alex</td>
        <td style={{display:"flex",gap:"10px",justifyContent:"center"}}>11/13/2005   <p  style={{display:"flex",fontSize:"17px",color:"black",
          fontWeight:"500",alignItems:"center",}}>12:30pm</p></td>
        <td style={{display:"flex",justifyContent:"flex-end"}}>sent</td>
    </tr>
    <tr style={{display:"flex",width:"100%",justifyContent:"center",
            }}>
          <td style={{display:"flex",justifyContent:"flex-start"}}>Alex</td>
        <td style={{display:"flex",gap:"10px",justifyContent:"center"}}>11/13/2005   <p  style={{display:"flex",fontSize:"17px",color:"black",
          fontWeight:"500",alignItems:"center",}}>12:30pm</p></td>
        <td style={{display:"flex",justifyContent:"flex-end"}}>sent</td>
    </tr>
    <tr style={{display:"flex",width:"100%",justifyContent:"center",
            }}>
          <td style={{display:"flex",justifyContent:"flex-start"}}>Alex</td>
        <td style={{display:"flex",gap:"10px",justifyContent:"center"}}>11/13/2005   <p  style={{display:"flex",fontSize:"17px",color:"black",
          fontWeight:"500",alignItems:"center",}}>12:30pm</p></td>
        <td style={{display:"flex",justifyContent:"flex-end"}}>sent</td>
    </tr>
    <tr style={{display:"flex",width:"100%",justifyContent:"center",
            }}>
          <td style={{display:"flex",justifyContent:"flex-start"}}>Alex</td>
        <td style={{display:"flex",gap:"10px",justifyContent:"center"}}>11/13/2005   <p  style={{display:"flex",fontSize:"17px",color:"black",
          fontWeight:"500",alignItems:"center",}}>12:30pm</p></td>
        <td style={{display:"flex",justifyContent:"flex-end"}}>sent</td>
    </tr>
    <tr style={{display:"flex",width:"100%",justifyContent:"center",
            }}>
          <td style={{display:"flex",justifyContent:"flex-start"}}>Alex</td>
        <td style={{display:"flex",gap:"10px",justifyContent:"center"}}>11/13/2005   <p  style={{display:"flex",fontSize:"17px",color:"black",
          fontWeight:"500",alignItems:"center",}}>12:30pm</p></td>
        <td style={{display:"flex",justifyContent:"flex-end"}}>sent</td>
    </tr>
    <tr style={{display:"flex",width:"100%",justifyContent:"center",
            }}>
          <td style={{display:"flex",justifyContent:"flex-start"}}>Alex</td>
        <td style={{display:"flex",gap:"10px",justifyContent:"center"}}>11/13/2005   <p  style={{display:"flex",fontSize:"17px",color:"black",
          fontWeight:"500",alignItems:"center",}}>12:30pm</p></td>
        <td style={{display:"flex",justifyContent:"flex-end"}}>sent</td>
    </tr>
    <tr style={{display:"flex",width:"100%",justifyContent:"center",
            }}>
          <td style={{display:"flex",justifyContent:"flex-start"}}>Alex</td>
        <td style={{display:"flex",gap:"10px",justifyContent:"center"}}>11/13/2005   <p  style={{display:"flex",fontSize:"17px",color:"black",
          fontWeight:"500",alignItems:"center",}}>12:30pm</p></td>
        <td style={{display:"flex",justifyContent:"flex-end"}}>sent</td>
    </tr>
    <tr style={{display:"flex",width:"100%",justifyContent:"center",
            }}>
          <td style={{display:"flex",justifyContent:"flex-start"}}>Alex</td>
        <td style={{display:"flex",gap:"10px",justifyContent:"center"}}>11/13/2005   <p  style={{display:"flex",fontSize:"17px",color:"black",
          fontWeight:"500",alignItems:"center",}}>12:30pm</p></td>
        <td style={{display:"flex",justifyContent:"flex-end"}}>sent</td>
    </tr>
    <tr style={{display:"flex",width:"100%",justifyContent:"center",
            }}>
          <td style={{display:"flex",justifyContent:"flex-start"}}>Alex</td>
        <td style={{display:"flex",gap:"10px",justifyContent:"center"}}>11/13/2005   <p  style={{display:"flex",fontSize:"17px",color:"black",
          fontWeight:"500",alignItems:"center",}}>12:30pm</p></td>
        <td style={{display:"flex",justifyContent:"flex-end"}}>sent</td>
    </tr>
        <tr style={{display:"flex",width:"100%",justifyContent:"center",
            }}>
          <td style={{display:"flex",justifyContent:"flex-start"}}>Alex</td>
        <td style={{display:"flex",gap:"10px",justifyContent:"center"}}>11/13/2005   <p  style={{display:"flex",fontSize:"17px",color:"black",
          fontWeight:"500",alignItems:"center",}}>12:30pm</p></td>
        <td style={{display:"flex",justifyContent:"flex-end"}}>sent</td>
    </tr>
    <tr style={{display:"flex",width:"100%",justifyContent:"center",
            }}>
          <td style={{display:"flex",justifyContent:"flex-start"}}>Alex</td>
        <td style={{display:"flex",gap:"10px",justifyContent:"center"}}>11/13/2005   <p  style={{display:"flex",fontSize:"17px",color:"black",
          fontWeight:"500",alignItems:"center",}}>12:30pm</p></td>
        <td style={{display:"flex",justifyContent:"flex-end"}}>sent</td>
    </tr>
    <tr style={{display:"flex",width:"100%",justifyContent:"center",
            }}>
          <td style={{display:"flex",justifyContent:"flex-start"}}>Alex</td>
        <td style={{display:"flex",gap:"10px",justifyContent:"center"}}>11/13/2005   <p  style={{display:"flex",fontSize:"17px",color:"black",
          fontWeight:"500",alignItems:"center",}}>12:30pm</p></td>
        <td style={{display:"flex",justifyContent:"flex-end"}}>sent</td>
    </tr>
    <tr style={{display:"flex",width:"100%",justifyContent:"center",
            }}>
          <td style={{display:"flex",justifyContent:"flex-start"}}>Alex</td>
        <td style={{display:"flex",gap:"10px",justifyContent:"center"}}>11/13/2005   <p  style={{display:"flex",fontSize:"17px",color:"black",
          fontWeight:"500",alignItems:"center",}}>12:30pm</p></td>
        <td style={{display:"flex",justifyContent:"flex-end"}}>sent</td>
    </tr>
    <tr style={{display:"flex",width:"100%",justifyContent:"center",
            }}>
          <td style={{display:"flex",justifyContent:"flex-start"}}>Alex</td>
        <td style={{display:"flex",gap:"10px",justifyContent:"center"}}>11/13/2005   <p  style={{display:"flex",fontSize:"17px",color:"black",
          fontWeight:"500",alignItems:"center",}}>12:30pm</p></td>
        <td style={{display:"flex",justifyContent:"flex-end"}}>sent</td>
    </tr>
    <tr style={{display:"flex",width:"100%",justifyContent:"center",
            }}>
          <td style={{display:"flex",justifyContent:"flex-start"}}>Alex</td>
        <td style={{display:"flex",gap:"10px",justifyContent:"center"}}>11/13/2005   <p  style={{display:"flex",fontSize:"17px",color:"black",
          fontWeight:"500",alignItems:"center",}}>12:30pm</p></td>
        <td style={{display:"flex",justifyContent:"flex-end"}}>sent</td>
    </tr>
    <tr style={{display:"flex",width:"100%",justifyContent:"center",
            }}>
          <td style={{display:"flex",justifyContent:"flex-start"}}>Alex</td>
        <td style={{display:"flex",gap:"10px",justifyContent:"center"}}>11/13/2005   <p  style={{display:"flex",fontSize:"17px",color:"black",
          fontWeight:"500",alignItems:"center",}}>12:30pm</p></td>
        <td style={{display:"flex",justifyContent:"flex-end"}}>sent</td>
    </tr>
   
    
           </tbody>
          </table>
          {/* <div className="TenantMaindowncon">
            <div className="TextMainInage">
              <h3>Oh Snap! there's nothing here</h3>
              <div className="SubImages">
                <img src={SubImage} alt="No maintenance requests" />
              </div>
              <h3 style={{ fontWeight: "400" }}>
                There are no maintenance requests yet on this account
              </h3>
              
            </div>
          </div> */}
          <div className="TextMainInage">
        <button onClick={handleRequestClick}>Create New Request</button>
        </div>
        </div>
        
      </div>

      {showPopup ? <MainRequest closePopup={closePopup} /> : null} 
    </>
  );
};

export default TenMain;
