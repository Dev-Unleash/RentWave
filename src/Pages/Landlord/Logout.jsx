import React, { useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai'; // Make sure to install react-icons
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const nav =useNavigate()

    const [showLogoutPopup, setShowLogoutPopup] = useState(false);

    const handleLogoutClick = () => {
        setShowLogoutPopup(true); // Show the confirmation popup
    };

    const handleLogoutConfirm = () => {
        nav("/");
        setShowLogoutPopup(false);
    };

    const handleLogoutCancel = () => {
        setShowLogoutPopup(false); // Close the popup without logging out
    };

    return (
        <div className="Logoutmenu1">
            <nav style={{ gap: "20px", display: "flex", cursor: "pointer" }} onClick={handleLogoutClick}>
                <AiOutlineLogout className="menuIcon" />
                <p style={{ fontSize: "25px", color: "black", display: "flex", alignItems: "center" }}>
                    Logout
                </p>
            </nav>

            {showLogoutPopup && (
                <div className="popup">
                    <p style={{ color: "white", width: "100%", display: "flex", justifyContent: "center" }}>
                        Are you sure?
                    </p>
                    <div className="popup-text">
                        <p onClick={handleLogoutConfirm} style={{ cursor: "pointer", color: "green" }}>Yes</p>
                        <p onClick={handleLogoutCancel} style={{ cursor: "pointer", color: "red" }}>No</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Logout;
