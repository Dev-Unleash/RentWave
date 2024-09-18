import React from 'react';
import { IoNotificationsCircleSharp } from 'react-icons/io5';
import PaymentPopup from './PaymentPopup';
import './TenantPayment.css';

const TenantPayment = ({ showPopup, setShowPopup, closePopup }) => {
  const handleRequestClick = () => {
    setShowPopup(true);
  };

  const data = [
    { Date: '2023-09-01', Amount: '₦1000000', PaymentMethod: 'Verve card', status: 'Pending', time: '2:45pm' },
    { Date: '2023-09-01', Amount: '₦1000000', PaymentMethod: 'Verve card', status: 'Pending', time: '2:45pm' },
    { Date: '2023-09-01', Amount: '₦1000000', PaymentMethod: 'Verve card', status: 'Pending', time: '2:45pm' },
    { Date: '2023-09-01', Amount: '₦1000000', PaymentMethod: 'Verve card', status: 'Pending', time: '2:45pm' },
    { Date: '2023-09-01', Amount: '₦1000000', PaymentMethod: 'Verve card', status: 'Pending', time: '2:45pm' },
  ];

  return (
    <>
      <div className={`TenantPayContainer ${showPopup ? 'blur-background' : ''}`}>
        <div className="TenantPayContainerHeader">
          <div className="TenantPayContainerright">
            <h3>Payment</h3>
            <p>Manage payment on RentWave</p>
          </div>
          <div className="TenantPayContainerLeft">
            <IoNotificationsCircleSharp className="menuIcons" style={{ cursor: 'pointer' }} />
          </div>
        </div>

        <div className="paymentdownContainer">
          <div className="iniPayment">
            <button onClick={handleRequestClick}>Initiate Payment</button>
          </div>

          <div className="TenantPayDown">
            <div className="TenantPayDownHeader">
              <ul>
                <li>Payment History</li>
              </ul>
            </div>

            <div className="TenantPayHis">
              <table className="paymentTable">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.Date}</td>
                      <td>{item.Amount}</td>
                      <td>{item.PaymentMethod}</td>
                      <td>{item.time}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Popup */}
      {showPopup ? <PaymentPopup closePopup={closePopup} /> : null}
    </>
  );
};

export default TenantPayment;
