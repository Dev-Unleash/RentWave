import React, { useEffect, useState } from 'react';
import './Transaction.css';
import { RiSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify

const Transaction = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [withdrawalDetails, setWithdrawalDetails] = useState({ bankName: '', accountNumber: '', amount: '' });
  const token = localStorage.getItem("userToken");
  
  const url = "https://rentwave.onrender.com/api/v1/payments"; 

  const fetchPayments = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const paymentData = response.data.data;

      if (paymentData.length === 0) {
        toast.info("No payments found for this landlord."); // Inform the user
      }

      setPayments(paymentData);

      // Calculate the total amount
      const total = paymentData.reduce((acc, item) => acc + item.amount * 0.95, 0);
      setTotalAmount(total);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Error fetching payments:", message);
      toast.error(message); 
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  // Handle withdrawal form submission
  const handleWithdraw = () => {
    // Logic for withdrawal (implement as needed)
    setTotalAmount(0);
    setIsModalOpen(false);
  };

  // Handle input changes in the modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWithdrawalDetails({ ...withdrawalDetails, [name]: value });
  };

  return (
    <div className='Pages'>
      <div className="PropsContainers">
        <div className="up">
          <p>Transactions</p>
          <div className='input'>
            <RiSearchLine className='icon' />
            <input type="search" placeholder='Search' className='put' />
          </div>
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className='withdraw'>
          <button className='witdralBtn' onClick={() => setIsModalOpen(true)}>Withdraw</button>
        </div>

        <div className="TotalLndAmt">
          <p>Total Amount: ₦{totalAmount.toFixed(2)}</p>
        </div>

        <div className="table">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="tableData">
              <table>
                <thead>
                  <tr>
                    <th className='name-column'>Name</th>
                    <th className='name-column1'>Amount</th>
                    <th className='name-column1'>Date</th>
                    <th className='name-column1'>Status</th>
                    <th className='name-column2'>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(payments) && payments.map((item) => (
                    <tr key={item._id}>
                      <td className='name-column'>
                        <Link to='/TransactionView1' style={{ cursor: 'pointer', color: "black", fontWeight: 'normal' }}>
                          {item.firstName} {item.lastName}
                        </Link>
                      </td>
                      <td className='name-column1'>
                        ₦{(item.amount * 0.95).toFixed(2)}
                      </td>
                      <td className='name-column1'>
                        {item.paymentDate ? new Date(item.paymentDate).toLocaleDateString() : 'N/A'}
                      </td>
                      <td className='name-column1'>
                        {item.status}
                      </td>
                      <td className='name-column1'>
                        {item.paymentDate ? new Date(item.paymentDate).toLocaleTimeString() : 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Withdraw */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Withdraw Earnings</h2>
            <label>
              Bank Name:
              <input
                type="text"
                name="bankName"
                value={withdrawalDetails.bankName}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Account Number:
              <input
                type="text"
                name="accountNumber"
                value={withdrawalDetails.accountNumber}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Amount to Withdraw:
              <input
                type="text"
                name="amount"
                value={withdrawalDetails.amount}
                onChange={handleInputChange}
              />
            </label>
            <button className="withdraw-btn" onClick={handleWithdraw}>Withdraw</button>
            <div className="close-btn" onClick={() => setIsModalOpen(false)}>x</div>
          </div>
        </div>
      )}
      
      <ToastContainer /> {/* Add ToastContainer for notifications */}
    </div>
  );
};

export default Transaction;
