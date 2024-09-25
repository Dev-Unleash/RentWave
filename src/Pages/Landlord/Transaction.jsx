import React, { useEffect, useState } from 'react';
import './Transaction.css';
import { RiSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

const Transaction = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [withdrawalDetails, setWithdrawalDetails] = useState({ bankName: '', accountNumber: '', amount: '' });
  const token = localStorage.getItem("userToken");

  const url = "https://rentwave.onrender.com/api/v1/landlord/payments"; // Corrected API endpoint

  const fetchPayments = async () => {
    if (!token) {
      toast.error("Authentication token not found. Please log in.");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token for authentication
        },
      });

      const paymentData = response.data.payments;

      if (!paymentData || paymentData.length === 0) {
        toast.info("No payments found for this landlord."); // Inform the user if no data is found
      } else {
        setPayments(paymentData);
        // Calculate the total amount (assuming 5% fee deduction)
        const total = paymentData.reduce((acc, item) => acc + item.amount * 0.95, 0);
        setTotalAmount(total);
      }
    } catch (error) {
      console.error("Error fetching payments:", error);
      const message = error.response?.data?.message || "Error fetching payments";
      toast.error(message); // Display error message
      setErrorMessage(message);
    } finally {
      setLoading(false); // Ensure the loading state is updated
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  // Handle withdrawal form submission
  const handleWithdraw = async () => {
    const { bankName, accountNumber, amount } = withdrawalDetails;

    // Input validation
    if (!bankName || !accountNumber || !amount) {
      toast.error('Please fill in all fields for withdrawal.');
      return;
    }

    if (Number(amount) > totalAmount) {
      toast.error('Withdrawal amount exceeds available balance.');
      return;
    }

    try {
      const withdrawalUrl = 'https://rentwave.onrender.com/api/v1/landlord/withdraw';
      const response = await axios.post(
        withdrawalUrl,
        { bankName, accountNumber, amount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast.success('Withdrawal successful! Payment will be made within 24hrs of initiating withdrawal');
        setTotalAmount((prev) => prev - Number(amount)); // Deduct amount from total balance
        setIsModalOpen(false); // Close the modal after success
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Withdrawal failed. Try again later.';
      toast.error(message);
    }
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

        <div className='withdraw'>
          <button className='witdralBtn' onClick={() => setIsModalOpen(true)}>Withdraw</button>
        </div>

        <div className="TotalLndAmt">
          <p>Total Amount: ₦{totalAmount.toFixed(2)}</p> {/* Display the total amount */}
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
                      {console.log(payments)}
                      <td className='name-column'>
                        <Link to='/TransactionView1' style={{ cursor: 'pointer', color: "black", fontWeight: 'normal' }}>
                          {`${item.firstName} ${item.lastName}`.toUpperCase()}
                        </Link>
                      </td>
                      <td className='name-column1'>
                        ₦{(item.amount * 0.95).toFixed(2)} {/* Displaying amount with 5% fee deduction */}
                      </td>
                      <td className='name-column1'>
                        {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A'}
                      </td>
                      <td className='name-column1'>
                        {item.status}
                      </td>
                      <td className='name-column1'>
                        {item.createdAt ? new Date(item.createdAt).toLocaleTimeString() : 'N/A'}
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

      <ToastContainer /> {/* Toast container for notifications */}
    </div>
  );
};

export default Transaction;
