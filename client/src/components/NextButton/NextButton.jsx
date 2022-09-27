import React from 'react';
import './nextButton.css';

const NextButton = ({ handleNext, disableButton }) => {
    return (
        <>
            <button 
                disabled={disableButton} 
                className="nextButton" 
                onClick={() => handleNext()}
                >
                Next Question
            </button>
        </>
    )
}

export default NextButton