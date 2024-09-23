import React from 'react';
import './confirm-modal.css'; // Create a CSS file for styling if needed

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Are you sure?</h2>
        <p>Do you really want to delete this ?</p>
        <div className="modal-buttons">
          <button onClick={onConfirm} className="confirm-button1">Yes</button>
          <button onClick={onClose} className="cancel-button">No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
