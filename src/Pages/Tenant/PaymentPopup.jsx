import React, { useState } from "react";
import "./PaymentPopUp.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const PaymentPopup = ({ closePopup }) => {
  const [payData, setPayData] = useState({
    firstName: "",
    lastName: "",
    amount: 0,
    paymentMethod: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  // Handles input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const userToken = localStorage.getItem("userToken");
  const userInfo = localStorage.getItem("userInfo");
  const userData = JSON.parse(userInfo);
  const UserEmail = userData?.email;

  const paymentKey = import.meta.env.VITE_Public_Key;

  // Function to handle payment submission
  const payKorapay = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if all required fields are filled
    if (!payData.firstName || !payData.lastName || !payData.amount || !payData.paymentMethod) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);

    // Send input data to backend
    const apiData = {
      firstName: payData.firstName,
      lastName: payData.lastName,
      amount: payData.amount,
      paymentMethod: payData.paymentMethod,
      notes: payData.notes,
    };

    try {
      const url = "https://rentwave.onrender.com/api/v1/payment/payRent";
      console.log("Sending request to:", url);
      const response = await axios.post(url, apiData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log("Response:", response.data);

      // Initialize Korapay after the backend processes the data
      window.Korapay.initialize({
        key: paymentKey,
        reference: `Omotolani_${Date.now()}`,
        amount: payData.amount * 100, // amount in kobo
        currency: "NGN",
        customer: {
          name: `${payData.firstName} ${payData.lastName}`,
          email: UserEmail,
        },
        onSuccess: function (response) {
          console.log(response);
          toast.success("Payment successful. Check email for receipt.");

          // Close the popup after the payment is successful
          closePopup();
        },
        onError: function (error) {
          console.error(error);
          toast.error("Payment failed. Please try again.");
        },
      });

      setLoading(false);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      toast.error("Error sending data to backend. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="PaymentPopupOverlay">
        <div className="PaymentFormWrapper">
          <div className="payFormHeader">
            <h3 className="CloseButton" onClick={closePopup}>
              X
            </h3>
          </div>
          <form onSubmit={payKorapay}>
            <div className="InputPayForm">
              <div className="payInput">
                <p>First Name</p>
                <input
                  type="text"
                  name="firstName"
                  value={payData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="payInput">
                <p>Last Name</p>
                <input
                  type="text"
                  name="lastName"
                  value={payData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="payInput">
                <p>Amount</p>
                <input
                  type="number"
                  name="amount"
                  value={payData.amount}
                  onChange={handleChange}
                />
              </div>
              <div className="payInput">
                <p>Payment Method</p>
                <select
                  name="paymentMethod"
                  value={payData.paymentMethod}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Card">Card</option>
                </select>
              </div>
              <div className="payInput">
                <p>Notes <span>(optional)</span></p>
                <input
                  type="text"
                  name="notes"
                  value={payData.notes}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="payButton">
              <button type="submit" disabled={loading}>
                {loading ? "Processing..." : "Pay"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default PaymentPopup;
