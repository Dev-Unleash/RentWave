// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import './LandLordHome.css';
// // import { Link } from "react-router-dom";

// // const LandLordHome = () => {
// //   const [propertyCount, setPropertyCount] = useState(0);
// //   const [tenantCount, setTenantCount] = useState(0);
// //   const [totalEarnings, setTotalEarnings] = useState(0);
// //   const [totalPayments, setTotalPayments] = useState(0);
// //   const [recentActivities, setRecentActivities] = useState([]);

// //   const token = localStorage.getItem("userToken");

// //   const propertiesUrl = "https://rentwave.onrender.com/api/v1/landlord/properties";
// //   const tenantsUrl = "https://rentwave.onrender.com/api/v1/tenants"; 
// //   const paymentsUrl = "https://rentwave.onrender.com/api/v1/payments";
// //   const maintenanceUrl = "https://rentwave.onrender.com/api/v1/maintenance-requests"; 

// //   const config = {
// //     headers: {
// //       Authorization: `Bearer ${token}`,
// //       "Content-Type": "application/json",
// //     },
// //   };

// //   const fetchCounts = async () => {
// //     try {
// //       const propertiesResponse = await axios.get(propertiesUrl, config);
// //       const tenantsResponse = await axios.get(tenantsUrl, config);

// //       setPropertyCount(propertiesResponse.data.data.length);
// //       setTenantCount(tenantsResponse.data.data.length);
// //     } catch (error) {
// //       console.error("Error fetching counts:", error);
// //     }
// //   };

// //   const fetchTotalPayments = async () => {
// //     try {
// //       const paymentsResponse = await axios.get(paymentsUrl, config);
// //       const payments = paymentsResponse.data.data;
  
// //       // Calculate total after deducting 5% from each payment
// //       const total = payments.reduce((acc, payment) => {
// //         const deductedAmount = payment.amount - payment.amount * 0.05; // Deduct 5%
// //         return acc + deductedAmount;
// //       }, 0);
  
// //       setTotalPayments(total);      // Set total payments with 5% deduction
// //       setTotalEarnings(total);      // Update total earnings as well
// //     } catch (error) {
// //       console.error("Error fetching total payments:", error);
// //     }
// //   };
  

// //   const fetchRecentActivities = async () => {
// //     try {
// //       const maintenanceResponse = await axios.get(maintenanceUrl, config);
// //       const paymentsResponse = await axios.get(paymentsUrl, config);

// //       // Log responses for debugging
// //       console.log("Maintenance Response:", maintenanceResponse.data);
// //       console.log("Payments Response:", paymentsResponse.data);

// //       const activities = [
// //         ...maintenanceResponse.data.data.map(item => ({
// //           type: "Maintenance",
// //           reason: item.requestFor,
// //           date: new Date(item.createdAt).toLocaleString(),
// //           status: item.status,
// //         })),
// //         ...paymentsResponse.data.data.map(item => ({
// //           type: "Payment",
// //           reason: `Payment of ₦${item.amount}`,
// //           date: new Date(item.paymentDate).toLocaleString(),
// //           status: item.status,
// //         })),
// //       ];

// //       activities.sort((a, b) => new Date(b.date) - new Date(a.date));
// //       console.log("Recent Activities:", activities); // Log activities for debugging
// //       setRecentActivities(activities);
// //     } catch (error) {
// //       console.error("Error fetching recent activities:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchCounts();
// //     fetchTotalPayments();
// //     fetchRecentActivities();
// //   }, []);

// //   return (
// //     <div className="LandLordHome">
// //       <div>
// //         <h1>Overview</h1>
// //         <p>Here’s a quick Overview of what’s happening</p>
// //       </div>
// //       <div className="TenantDashBoardBox">
// //         <div className="OneBox2">
// //           <h1>Property Listed</h1>
// //           <div className="TenantText">
// //             <h3>{propertyCount}</h3>
// //             <Link to="/Propertics">See All</Link>
// //           </div>
// //         </div>
// //         <div className="OneBox2">
// //           <h1>Tenants</h1>
// //           <div className="TenantText">
// //             <h3>{tenantCount}</h3>
// //             <Link to="/View-Tenant">See All</Link>
// //           </div>
// //         </div>
// //         <div className="OneBox2">
// //           <h1>Total Payments</h1>
// //           <div className="TenantText">
// //             <h3 className="h3">₦{totalPayments.toFixed(2)}</h3>
// //             <Link to="/Transactions">See All</Link>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="TenantRecentActivity">
// //         <h1>Recent Activity</h1>
// //         <div className="TextImage">
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Type</th>
// //                 <th>Reason</th>
// //                 <th>Date</th>
// //                 <th>Status</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {recentActivities.map((activity, index) => (
// //                 <tr key={index}>
// //                   <td>{activity.type}</td>
// //                   <td>{activity.reason}</td>
// //                   <td>{activity.date}</td>
// //                   <td>{activity.status}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LandLordHome;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import './LandLordHome.css';
// import { Link } from "react-router-dom";
// import { toast, ToastContainer } from 'react-toastify'; // Import Toastify

// const LandLordHome = () => {
//   const [propertyCount, setPropertyCount] = useState(0);
//   const [tenantCount, setTenantCount] = useState(0);
//   const [totalEarnings, setTotalEarnings] = useState(0);
//   const [totalPayments, setTotalPayments] = useState(0);
//   const [recentActivities, setRecentActivities] = useState([]);

//   const token = localStorage.getItem("userToken");

//   const propertiesUrl = "https://rentwave.onrender.com/api/v1/landlord/properties";
//   const tenantsUrl = "https://rentwave.onrender.com/api/v1/tenants"; 
//   const paymentsUrl = "https://rentwave.onrender.com/api/v1/payments";
//   const maintenanceUrl = "https://rentwave.onrender.com/api/v1/maintenance-requests"; 

//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//   };

//   const fetchCounts = async () => {
//     try {
//       if (!token) {
//         toast.error("No token found"); // Use Toastify for error
//         return;
//       }

//       const propertiesResponse = await axios.get(propertiesUrl, config);
//       const tenantsResponse = await axios.get(tenantsUrl, config);

//       setPropertyCount(propertiesResponse.data.data.length);
//       setTenantCount(tenantsResponse.data.data.length);
//       toast.success("Counts fetched successfully!"); // Success message
//     } catch (error) {
//       const message = error.response?.data?.message || error.message;
//       console.error("Error fetching counts:", message);
//       toast.error(message || "Failed to fetch counts."); // Error message
//     }
//   };

//   const fetchTotalPayments = async () => {
//     try {
//       if (!token) {
//         toast.error("No token found"); // Use Toastify for error
//         return;
//       }

//       const paymentsResponse = await axios.get(paymentsUrl, config);
//       const payments = paymentsResponse.data.data;

//       // Calculate total after deducting 5% from each payment
//       const total = payments.reduce((acc, payment) => {
//         const deductedAmount = payment.amount - payment.amount * 0.05; // Deduct 5%
//         return acc + deductedAmount;
//       }, 0);

//       setTotalPayments(total);      // Set total payments with 5% deduction
//       setTotalEarnings(total);      // Update total earnings as well
//       toast.success("Total payments fetched successfully!"); // Success message
//     } catch (error) {
//       const message = error.response?.data?.message || error.message;
//       console.error("Error fetching total payments:", message);
//       toast.error(message || "Failed to fetch total payments."); // Error message
//     }
//   };

//   const fetchRecentActivities = async () => {
//     try {
//       if (!token) {
//         toast.error("No token found"); // Use Toastify for error
//         return;
//       }

//       const maintenanceResponse = await axios.get(maintenanceUrl, config);
//       const paymentsResponse = await axios.get(paymentsUrl, config);

//       const activities = [
//         ...maintenanceResponse.data.data.map(item => ({
//           type: "Maintenance",
//           reason: item.requestFor,
//           date: new Date(item.createdAt).toLocaleString(),
//           status: item.status,
//         })),
//         ...paymentsResponse.data.data.map(item => ({
//           type: "Payment",
//           reason: `Payment of ₦${item.amount}`,
//           date: new Date(item.paymentDate).toLocaleString(),
//           status: item.status,
//         })),
//       ];

//       activities.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort activities by date
//       setRecentActivities(activities);
//       toast.success("Recent activities fetched successfully!"); // Success message
//     } catch (error) {
//       const message = error.response?.data?.message || error.message;
//       console.error("Error fetching recent activities:", message);
//       toast.error(message || "Failed to fetch recent activities."); // Error message
//     }
//   };

//   useEffect(() => {
//     fetchCounts();
//     fetchTotalPayments();
//     fetchRecentActivities();
//   }, []);

//   return (
//     <div className="LandLordHome">
//       <div>
//         <h1>Overview</h1>
//         <p>Here’s a quick Overview of what’s happening</p>
//       </div>
//       <div className="TenantDashBoardBox">
//         <div className="OneBox2">
//           <h1>Property Listed</h1>
//           <div className="TenantText">
//             <h3>{propertyCount}</h3>
//             <Link to="/Propertics">See All</Link>
//           </div>
//         </div>
//         <div className="OneBox2">
//           <h1>Tenants</h1>
//           <div className="TenantText">
//             <h3>{tenantCount}</h3>
//             <Link to="/View-Tenant">See All</Link>
//           </div>
//         </div>
//         <div className="OneBox2">
//           <h1>Total Payments</h1>
//           <div className="TenantText">
//             <h3 className="h3">₦{totalPayments ? totalPayments.toFixed(2) : '0.00'}</h3> {/* Handle cases where totalPayments is null or undefined */}
//             <Link to="/Transactions">See All</Link>
//           </div>
//         </div>
//       </div>

//       <div className="TenantRecentActivity">
//         <h1>Recent Activity</h1>
//         <div className="TextImage">
//           <table>
//             <thead>
//               <tr>
//                 <th>Type</th>
//                 <th>Reason</th>
//                 <th>Date</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {recentActivities.map((activity) => (
//                 <tr key={activity.date + activity.type}> {/* Assuming date and type are unique together */}
//                   <td>{activity.type}</td>
//                   <td>{activity.reason}</td>
//                   <td>{activity.date}</td>
//                   <td>{activity.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <ToastContainer /> {/* Add ToastContainer for notifications */}
//     </div>
//   );
// };

// export default LandLordHome;




import React, { useEffect, useState } from "react";
import axios from "axios";
import './LandLordHome.css';
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify

const LandLordHome = () => {
  const [propertyCount, setPropertyCount] = useState(0);
  const [tenantCount, setTenantCount] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [totalPayments, setTotalPayments] = useState(0);
  const [recentActivities, setRecentActivities] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  const token = localStorage.getItem("userToken");

  const propertiesUrl = "https://rentwave.onrender.com/api/v1/landlord/properties";
  const tenantsUrl = "https://rentwave.onrender.com/api/v1/tenants"; 
  const paymentsUrl = "https://rentwave.onrender.com/api/v1/payments";
  const maintenanceUrl = "https://rentwave.onrender.com/api/v1/maintenance-requests"; 

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const fetchCounts = async () => {
    try {
      if (!token) throw new Error("No token found");

      const propertiesResponse = await axios.get(propertiesUrl, config);
      const tenantsResponse = await axios.get(tenantsUrl, config);

      setPropertyCount(propertiesResponse.data.data.length);
      setTenantCount(tenantsResponse.data.data.length);
      toast.success("Counts fetched successfully!");
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Error fetching counts:", message);
      toast.error(message || "Failed to fetch counts.");
    }
  };

  const fetchTotalPayments = async () => {
    try {
      if (!token) throw new Error("No token found");

      const paymentsResponse = await axios.get(paymentsUrl, config);
      const payments = paymentsResponse.data.data;

      const total = payments.reduce((acc, payment) => {
        const deductedAmount = payment.amount - payment.amount * 0.05;
        return acc + deductedAmount;
      }, 0);

      setTotalPayments(total);
      setTotalEarnings(total);
      toast.success("Total payments fetched successfully!");
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Error fetching total payments:", message);
      toast.error(message || "Failed to fetch total payments.");
    }
  };

  const fetchRecentActivities = async () => {
    try {
      if (!token) throw new Error("No token found");

      const maintenanceResponse = await axios.get(maintenanceUrl, config);
      const paymentsResponse = await axios.get(paymentsUrl, config);

      const activities = [
        ...maintenanceResponse.data.data.map(item => ({
          type: "Maintenance",
          reason: item.requestFor,
          date: new Date(item.createdAt).toLocaleString(),
          status: item.status,
        })),
        ...paymentsResponse.data.data.map(item => ({
          type: "Payment",
          reason: `Payment of ₦${item.amount}`,
          date: new Date(item.paymentDate).toLocaleString(),
          status: item.status,
        })),
      ];

      activities.sort((a, b) => new Date(b.date) - new Date(a.date));
      setRecentActivities(activities);
      toast.success("Recent activities fetched successfully!");
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Error fetching recent activities:", message);
      toast.error(message || "Failed to fetch recent activities.");
    }
  };

  useEffect(() => {
    setLoading(true); // Set loading to true before fetching
    fetchCounts();
    fetchTotalPayments();
    fetchRecentActivities();
    setLoading(false); // Set loading to false after fetching
  }, []);

  return (
    <div className="LandLordHome">
      <div>
        <h1>Overview</h1>
        <p>Here’s a quick Overview of what’s happening</p>
      </div>
      <div className="TenantDashBoardBox">
        <div className="OneBox2">
          <h1>Property Listed</h1>
          <div className="TenantText">
            <h3>{propertyCount}</h3>
            <Link to="/Propertics">See All</Link>
          </div>
        </div>
        <div className="OneBox2">
          <h1>Tenants</h1>
          <div className="TenantText">
            <h3>{tenantCount}</h3>
            <Link to="/View-Tenant">See All</Link>
          </div>
        </div>
        <div className="OneBox2">
          <h1>Total Payments</h1>
          <div className="TenantText">
            <h3 className="h3">₦{totalPayments ? totalPayments.toFixed(2) : '0.00'}</h3>
            <Link to="/Transactions">See All</Link>
          </div>
        </div>
      </div>

      <div className="TenantRecentActivity">
        <h1>Recent Activity</h1>
        <div className="TextImage">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Reason</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentActivities.map((activity) => (
                <tr key={activity.date + activity.type}>
                  <td>{activity.type}</td>
                  <td>{activity.reason}</td>
                  <td>{activity.date}</td>
                  <td>{activity.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default LandLordHome;
