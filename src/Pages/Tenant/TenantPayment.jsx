import React from 'react'
import "./TenantPayHeo.css"
import TenPay from "../../assets/no-bank 1.png"
const TenantPayment = () => {
  return (
    <div className="TextImagePayment">
      
    <div className="PayImagePayment">
        <img src={TenPay } alt="" />
    </div>
    <h3>No Payment History</h3>
    <h3 style={{fontWeight:"400",fontSize:"18px"}}>Looks like you haven’t any payment history yet</h3>
      </div>
  )
}

export default TenantPayment