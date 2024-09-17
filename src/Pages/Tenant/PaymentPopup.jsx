
import React from 'react'
import "./PaymentPopUp.css"
const PaymentPopup = ({ closePopup }) => {
  return (
    <div className="PaymentPopupOverlay">
      <div className="PaymentFormWrapper">
      <div className="payFormHeader">
        <h3 className="CloseButton" onClick={closePopup}>X</h3>
        </div>
      <form action="">
                <div className='payInput'>
                  <p>First Name</p>
                  <input type="text"/>
                </div>
                <div className='payInput'>
                  <p>Last Name</p>
                  <input type="text"  />
                </div>

                <div className='payInput'>
                  <p>Property Name</p>
                  <input type="text"  />
                </div>
    
                <div className='payInput'>
                  <p>Payment Method</p>
                  <select name="select" id="">
                  <option value="">select</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="card">Card</option>
                  </select>

                </div>
              </form>
                <div className="payButton">
                    <button>pay</button>
                </div>
      </div>
    </div>
  )
}

export default PaymentPopup