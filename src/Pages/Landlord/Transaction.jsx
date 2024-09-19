import React from 'react'
import './Transaction.css'
import image from "../../assets/Clip path group.png"
import { RiDownload2Line, RiSearchLine } from 'react-icons/ri'

const Transaction = () => {
  return (
    <div className='Pages'>
      <div className="PropsContainers">
        <div className="up">
          <p>Transactions</p>
          <div className='input'>
            <RiSearchLine  className='icon'/>
            <input type="search" placeholder='Search' className='put'/>
          </div>
        </div>
          <div className="btnes">
            <botton className="dst"><RiDownload2Line className='icon'/>Download statement</botton>
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
