import React from 'react';

export const Modal = ({ onClick }) => {
    return (
        <div className='modal-container'>
            <div className="modal-sub-container">
                <h1>Form Successfully Submitted!</h1>
                <p>Your form has been successfully submitted. Thank you for your information.</p>
                <button onClick={onClick}>Close</button>
            </div>
        </div>
    );
}

export default Modal;
