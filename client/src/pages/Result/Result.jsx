import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './result.css';

const Result = () => {
    const location = useLocation();
    const params = location.state.myPersonality;
    const navigate = useNavigate();

    const returnToHome = () => {
        navigate('/');
    }
    return (
        <div className="personalityWrapper">
            <h2 className="personalityType">
                {`${params.introvert > params.extrovert ? "You are an Introvert" : "Your are an Extrovert"}`}
            </h2>
            <Button 
                type="primary" 
                clickHandler={returnToHome} 
                label="Take Test Again" 
            />
        </div>
    )
}

export default Result
