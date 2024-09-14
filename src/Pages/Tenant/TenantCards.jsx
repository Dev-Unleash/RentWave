import React from 'react'
import "./TenantPayment.css"
import TenCards from "../../assets/payment 1.png"
const TenantCards = () => {
  return (
    

      <div className="TextPay">
    <div className="PayImages">
        <img src={TenCards} alt="" />
    </div>
    <h3>No cards added yet</h3>
    <h3 style={{fontWeight:"400",fontSize:"18px"}}>Looks like you haven’t added any cards here yet</h3>
    <button>Add a New Card</button>
      </div>
  
  )
}

export default TenantCards