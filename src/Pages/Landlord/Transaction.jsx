import React, { useEffect, useState } from 'react';
import './Transaction.css';
import { RiSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Transaction = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [withdrawalDetails, setWithdrawalDetails] = useState({ bankName: '', accountNumber: '', amount: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const token = localStorage.getItem("userToken");
  const url = "https://rentwave.onrender.com/api/v1/landlord/payments";

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
          Authorization: `Bearer ${token}`,
        },
      });

      const paymentData = response.data.payments;

      if (!paymentData || paymentData.length === 0) {
        toast.info("No payments found for this landlord.");
      } else {
        setPayments(paymentData);
        const total = paymentData.reduce((acc, item) => acc + item.amount * 0.95, 0);
        setTotalAmount(total);
      }
    } catch (error) {
      console.error("Error fetching payments:", error);
      const message = error.response?.data?.message || "Error fetching payments";
      toast.error(message);
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const handleWithdraw = async () => {
    const { bankName, accountNumber, amount } = withdrawalDetails;

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
        setTotalAmount((prev) => prev - Number(amount));
        setIsModalOpen(false);
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Withdrawal failed. Try again later.';
      toast.error(message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWithdrawalDetails({ ...withdrawalDetails, [name]: value });
  };

  const filteredPayments = payments.filter(payment =>
    `${payment.firstName} ${payment.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='Pages'>
      <div className="PropsContainers">
        <div className="up">
          <p>Transactions</p>
          <div className='input'>
            <RiSearchLine className='icon' style={{width:"30px",height:"30px"}}/>
            <input 
              type="search" 
              placeholder='Search' 
              className='put' 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </div>
        </div>

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
                    <th className='name-column1'>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(filteredPayments) && filteredPayments.map((item) => (
                    <tr key={item._id}>
                      <td className='name-column'>
                        <Link to='/TransactionView1' style={{ cursor: 'pointer', color: "black", fontWeight: 'normal' }}>
                          {`${item.firstName} ${item.lastName}`.toUpperCase()}
                        </Link>
                      </td>
                      <td className='name-column1'>
                        ₦{(item.amount * 0.95).toFixed(2)}
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

      <ToastContainer />
    </div>
  );
};

export default Transaction;
