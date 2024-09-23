import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./VerifyEmail.css";
import Logo from "../../../assets/logo.png";
import { MdMarkEmailUnread } from 'react-icons/md';

const VerifyEmail = () => {


  return (
    <div className='Verify'>
      <div className="Verifycon">
        <div className="VerifyWrap">
            <img src={Logo} alt="logo"/>
            <div className="carrymail">
                <div className="mail_icon">
                    <MdMarkEmailUnread size={80} />
                </div>
                <h2 className='hTag'>Email Verification</h2>
                <p className='pTag'>Please check your Email to verify</p>
                
            </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;


