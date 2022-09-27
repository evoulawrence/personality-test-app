import React from 'react';
import './button.css';

const Button = ({ type, clickHandler, buttonDisabled, label }) => {
    return (
        <>
            <button 
                disabled={buttonDisabled} 
                className={type} 
                onClick={() => clickHandler()}
                >
                {label}
            </button>
        </>
    )
}

export default Button