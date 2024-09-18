import React from 'react'
import './Transaction.css'
import image from "../../../public/Group (1).png"

const Transaction = () => {
  return (
    <div className='Pages'>
      <div className="PropsContainers">
        <div className="up">
          <p>Transactions</p>
          <input type="search" placeholder='Search' />
        </div>
          <div className="btnes">
            <botton>Download statement</botton>
            <botton className="ds">Withdraw</botton>
          </div>
        <div className="table">
          <div className="head">
            <div className="headone"></div>
            <div className="headtwo"></div>
          </div>
          <img src={image} alt="" />
          <p>No properties yet but properties for this portfolio will be listed <br/> here.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Transaction
