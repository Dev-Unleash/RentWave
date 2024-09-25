import React, { useState, useRef, useEffect } from "react";
import "./InviteTenant.css";
import { LuUpload } from "react-icons/lu";
import { RiErrorWarningFill } from "react-icons/ri";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate  } from "react-router-dom";

const InviteTenant = ({ isOpen, onClose, onSubmit }) => { 
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([])
  const navigate = useNavigate();
  // const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    propertyId: "",
    leaseStart: "",
    leaseEnd: "",
    file: null,
    removeRenter: false,
    requireInsurance: false,
  });
   console.log(formData)
  const fileInputRef = useRef(null);

    // Fetch properties from localStorage when component mounts
    useEffect(() => {
      const storedProperties = JSON.parse(localStorage.getItem("propertyIds")) || [];
      setProperties(storedProperties);
    }, []); // Only run on mount

  const chooseFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({ ...formData, file });
      console.log("Selected file:", file.name);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const propertyIds = localStorage.getItem("propertyIds")

  // const handleSubmit = async (e) => {
  //   setLoading(true);
  //   e.preventDefault();

  //   const propertyIdNew = localStorage.getItem("propertyId");
  //   const token = localStorage.getItem("userToken");
  //   const url = "https://rentwave.onrender.com/api/v1/onboardtenant";
  //   console.log("Property ID:", formData.propertyId);
  //   const body = {
  //     firstName: formData.firstName,
  //     lastName: formData.lastName,
  //     email: formData.email,
  //     password: formData.password,
  //     phoneNumber: formData.phoneNumber,
  //     propertyId: formData.propertyId,
  //     leaseStart: formData.leaseStart,
  //     leaseEnd: formData.leaseEnd,
  //   };

  //   console.log("formData: ", body)

  

  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   try {
  //     const response = await axios.post(url, body, config);
  //     console.log(response);
  //     toast.success("Tenant onboarded successfully!", { autoClose: 3000 });
  //     onSubmit();
  //     onClose();
  //     // formData.firstName = "";
  //     // formData.lastName = "";
  //     // formData.email  = "";
  //     // formData.password = "";
  //     // formData.phoneNumber = "";
  //     // formData.propertyId = "";
  //     // formData.leaseStart = "";
  //     // formData.leaseEnd = "";
  //     formData.Reset();
  //     window.location.href = "/View-Tenant"
  //   } catch (error) {
  //     // alert(error.response?.data?.errors)
  //     toast.error(error.response?.data?.errors, {
  //       autoClose: 3000,
  //     });
  //     console.error("Error onboarding tenant:", error);
  //   } finally {
  //     setLoading(false); // Reset loading state
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const token = localStorage.getItem("userToken");
    const url = "https://rentwave.onrender.com/api/v1/onboardtenant";
  
    const body = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      phoneNumber: formData.phoneNumber,
      propertyId: formData.propertyId,
      leaseStart: formData.leaseStart,
      leaseEnd: formData.leaseEnd,
    };
  
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
  
    try {
      const response = await axios.post(url, body, config);
      console.log(response);
      toast.success("Tenant onboarded successfully!", { autoClose: 3000 });
      
      // Reset form data
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        propertyId: "",
        leaseStart: "",
        leaseEnd: "",
        file: null,
        removeRenter: false,
        requireInsurance: false,
      });
  
      onSubmit();
      onClose();
      
      // Redirect or reload the page
        window.location.reload("/View-Tenant");
      // After success
      // history.push("/view-tenant");
    } catch (error) {
      toast.error(error.response?.data?.errors, {
        autoClose: 3000,
      });
      console.error("Error onboarding tenant:", error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  

  if (!isOpen) return null;

  return (
    <div className="modal">
      <form className="modal-content" onSubmit={handleSubmit}>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Invitation</h2>
        <p>
          Invite your renter to pay rent safely and <br /> simply
        </p>

        <div className="nameinput">
          <div className="words">
            <p>First Name</p>
            <p>Last Name</p>
          </div>
          <div className="inputs">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="emailText">
          <p>Email Address</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="emailText">
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="emailText">
          <p>Phone Number</p>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>

        {/* Property Select Dropdown */}
        <div className="emailText">
          <p>Property</p>
          <select
            name="propertyId"
            value={formData.propertyId}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Property</option>
            {properties.map((property) => (
              <option key={property.propertyId} value={property.propertyId}>
                {property.propertyName}
              </option>
            ))}
          </select>
        </div>

        <div className="nameinput">
          <div className="words">
            <p>Lease start</p>
            <p>Lease end</p>
          </div>
          <div className="inputs">
            <input
              type="date"
              name="leaseStart"
              value={formData.leaseStart}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="leaseEnd"
              value={formData.leaseEnd}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="agree">
          <input
            type="checkbox"
            name="removeRenter"
            checked={formData.removeRenter}
            onChange={handleCheckboxChange}
          />
          <div className="p">
            Remove renter at end of lease.
            <RiErrorWarningFill className="icon" />
          </div>
        </div>

        <div className="agree">
          <input
            type="checkbox"
            name="requireInsurance"
            checked={formData.requireInsurance}
            onChange={handleCheckboxChange}
          />
          <div className="p">Require Renters Insurance</div>
        </div>

        <div className="Buttons">
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <button className="Button" onClick={chooseFile}>
            <LuUpload className="icon" /> Upload Lease
          </button>
          <button className="Button2" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Add"}
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default InviteTenant;
