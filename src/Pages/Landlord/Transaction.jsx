import React from 'react'
import './Transaction.css'
import image from "../../assets/Clip path group.png"

const Transaction = () => {
  return (
    <div className='Pages'>
      <div className="PropsContainers">
        <div className="up">
          <p>Transactions</p>
          <input type="search" placeholder='Search' />
        </div>
          <div className="btnes">
            <botton className="ds">Download statement</botton>
            <botton className="ds">Withdraw</botton>
          </div>
        <div className="table">
          <div className="head">
            <div className="headone">
              <p>Date</p>
              <p>Portfolio</p>
              <p>Tenant</p>
            </div>
            <div className="headtwo">
              <p>Amount</p>
              <p>Status</p>
            </div>
          </div>
          <div className="imagepack">
            <img src={image} alt="" />
            <p>No transactions yet but all payments, credits and charges for <br/>  
            your account will appear here.</p>            
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Transaction
