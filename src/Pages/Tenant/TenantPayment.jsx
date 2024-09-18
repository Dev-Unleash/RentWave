import React, { useState } from 'react'
// import "./TenantPayHeo.css"
import TenPay from "../../assets/no-bank 1.png"
import TenantPayHero from './TenantPayHero'
import { IoNotificationsCircleSharp } from "react-icons/io5";
import "./TenantPayment.css"
import MainRequest from './MainRequest';
import PaymentPopup from './PaymentPopup';
const TenantPayment = () => {
  const [showPopup, setShowPopup] = useState(false); 
  // const navigate = useNavigate();

  const handleRequestClick = () => {
    setShowPopup(true); 
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
    <div className= {`TenantPayContainer ${showPopup ? "blur-background" : ""}`}>

      <div className="TenantPayContainerHeader">
        
        <div className="TenantPayContainerright">
        <h3>Payment </h3>
        <p>Manage payment on RentWave</p>
        </div>
        <div className="TenantPayContainerLeft">
        <IoNotificationsCircleSharp className="menuIcons" style={{cursor:"pointer"}}/>
        </div>
      
   </div>
   <div className='paymentdownContainer'>
   <div className="iniPayment">
    <button onClick={handleRequestClick}>Initiate Payment</button>
   </div>
     <div className="TenantPayDown">
           <div className="TenantPayDownHeader">
             <ul>
             <li>Payment History</li>
             
            </ul>
           
          </div>
           <div className="TextImagePayment">
      
       <div className="PayImagePayment">
           <img src={TenPay } alt="" />
       </div>
       <h3>No Payment History</h3>
       <h3 style={{fontWeight:"400",fontSize:"18px"}}>Looks like you haven’t any payment history yet</h3>
         </div>
           </div>
    
           </div>
         </div>
         {/* <PaymentPopup closePopup={closePopup}/> */}
         {showPopup ? <PaymentPopup closePopup={closePopup} /> : null} 
         </>
  )
}

export default TenantPayment