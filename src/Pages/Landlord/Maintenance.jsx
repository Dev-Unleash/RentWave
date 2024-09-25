import React, { useEffect, useState } from "react";
import "./Landlord.css";
import "./Maintenance.css";
import axios from "axios";

const Maintenance = () => {
  const [maintenance, setMaintenance] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("userToken");
  const url = "https://rentwave.onrender.com/api/v1/maintenance-requests";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const getMaintenance = async () => {
    try {
      const response = await axios.get(url, config);
      setMaintenance(response.data.data);
    } catch (error) {
      console.error("Error fetching maintenance requests:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    getMaintenance();
    setLoading(false)
  }, []);

  console.log("Maintenance data:", maintenance);

  return (
    <div className="Pages">
      <div className="Maintainontainer">
        <div className="headup">
          <h4>Maintenance Request</h4>
          <p>Keep track of maintenance requests on RentWave</p>
        </div>
        <div className="thebox">
          <div className="inside">
            {loading ? (
              <p>Loading...</p>
            ) : maintenance.length === 0 ? (
              <div>
                <h4>No maintenance requests available</h4>
              </div>
            ) : (
              <table>
                <thead>
                  <tr className="TenantMainDownHeader">
                    <th
                      className="TenMaincolumn1"
                      style={{ borderTopLeftRadius: "5px", width: "30%" }}
                    >
                      REASON
                    </th>
                    <th className="TenMaincolumn">DATE/TIME</th>
                    <th
                      className="TenMaincolumn"
                      style={{ borderTopRightRadius: "5px" }}
                    >
                      STATUS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {maintenance.map((item) => (
                    <tr key={item._id}>
                      <td className="TenMaincolumn1" style={{ width: "30%" }}>
                        {item.requestFor}
                      </td>
                      <td className="TenMaincolumn" style={{ width: "40%" }}>
                        {new Date(item.createdAt).toLocaleString()}
                      </td>
                      <td className="TenMaincolumn">{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;




// import React, { useEffect, useState } from "react";
// import "./Landlord.css";
// import "./Maintenance.css";
// // import image from "../../assets/download16.png";
// import axios from "axios";

// const Maintenance = () => {
//   const [maintenance, setMaintenance] = useState([]);
//   const [error, setError] = useState(null); // To capture errors

//   const token = localStorage.getItem("userToken");
//   const url = "https://rentwave.onrender.com/api/v1/maintenance-requests";
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//   };

//   const getMaintenance = async () => {
//     try {
//       const response = await axios.get(url, config);
//       console.log(response);
//       setMaintenance(response.data.data);
//     } catch (error) {
//       console.error("Error fetching maintenance requests:", error.response?.data?.message || error.message);
//       setError(error.response?.data?.message || "Failed to fetch maintenance requests.");
//     }
//   };

//   useEffect(() => {
//     getMaintenance();
//   }, []);

//   return (
//     <div className="Pages">
//       <div className="Maintainontainer">
//         <div className="headup">
//           <h4>Maintenance Request</h4>
//           <p>Keep track of maintenance requests on RentWave</p>
//         </div>
//         <div className="thebox">
//           <div className="inside">
//             {/* Show a message if there's an error */}
//             {error && <p className="error-message">{error}</p>}
            
//             {/* Show a placeholder if there are no maintenance requests */}
//             {maintenance.length === 0 && !error ? (
//               <div className="empty-state">
//                 <h4>Oh snap! There’s nothing here</h4>
//                 {/* <img src={image} alt="No maintenance requests" /> */}
//                 <p>There are no maintenance requests yet on this account</p>
//               </div>
//             ) : (
//               <table>
//                 <thead>
//                   <tr className="TenantMainDownHeader">
//                     <th
//                       className="TenMaincolumn1"
//                       style={{ borderTopLeftRadius: "5px", width: "30%" }}
//                     >
//                       REASON
//                     </th>
//                     <th className="TenMaincolumn">DATE/TIME</th>
//                     <th
//                       className="TenMaincolumn"
//                       style={{ borderTopRightRadius: "5px" }}
//                     >
//                       STATUS
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {maintenance.map((item) => (
//                     <tr key={item._id}>
//                       <td className="TenMaincolumn1" style={{ width: "30%" }}>
//                         {item.requestFor}
//                       </td>
//                       <td className="TenMaincolumn" style={{ width: "40%" }}>
//                         {new Date(item.createdAt).toLocaleString()}
//                       </td>
//                       <td className="TenMaincolumn">{item.status || "Pending"}</td> 
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Maintenance;


// import React, { useEffect, useState } from "react";
// import "./Landlord.css";
// import "./Maintenance.css";
// import axios from "axios";

// const Maintenance = () => {
//   const [maintenance, setMaintenance] = useState([]);
//   const [error, setError] = useState(null); // To capture errors

//   const token = localStorage.getItem("userToken");
//   console.log("Token:", token); // Check if token exists

//   const url = "https://rentwave.onrender.com/api/v1/maintenance-requests";
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//   };

//   const getMaintenance = async () => {
//     try {
//       const response = await axios.get(url, config);
//       console.log("Response:", response); // Log the response
//       setMaintenance(response.data.data);
//     } catch (error) {
//       console.error("Error fetching maintenance requests:", error);
//       setError(error.response?.data?.message || "Failed to fetch maintenance requests.");
//     }
//   };

//   useEffect(() => {
//     getMaintenance();
//   }, []);

//   return (
//     <div className="Pages">
//       <div className="Maintainontainer">
//         <div className="headup">
//           <h4>Maintenance Request</h4>
//           <p>Keep track of maintenance requests on RentWave</p>
//         </div>
//         <div className="thebox">
//           <div className="inside">
//             {error && <p className="error-message">{error}</p>}
            
//             {maintenance.length === 0 && !error ? (
//               <div className="empty-state">
//                 <h4>Oh snap! There’s nothing here</h4>
//                 <p>There are no maintenance requests yet on this account</p>
//               </div>
//             ) : (
//               <table>
//                 <thead>
//                   <tr className="TenantMainDownHeader">
//                     <th
//                       className="TenMaincolumn1"
//                       style={{ borderTopLeftRadius: "5px", width: "30%" }}
//                     >
//                       REASON
//                     </th>
//                     <th className="TenMaincolumn">DATE/TIME</th>
//                     <th
//                       className="TenMaincolumn"
//                       style={{ borderTopRightRadius: "5px" }}
//                     >
//                       STATUS
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {maintenance.map((item) => (
//                     <tr key={item._id}>
//                       <td className="TenMaincolumn1" style={{ width: "30%" }}>
//                         {item.requestFor}
//                       </td>
//                       <td className="TenMaincolumn" style={{ width: "40%" }}>
//                         {new Date(item.createdAt).toLocaleString()}
//                       </td>
//                       <td className="TenMaincolumn">{item.status || "Sent"}</td> 
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Maintenance;
