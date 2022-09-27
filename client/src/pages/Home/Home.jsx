import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './home.css';

const Home = () => {
    const navigate = useNavigate();
    const showTest = () => {
        navigate("/personality-test");
    };
    return (
        <div className="homeWrapper">
            <h1>Welcome to PersonalityTest</h1>
            <p>Consist of 5 Questions</p>
            <h3>To get your true personality, answer honestly</h3>
            <Button 
                type="primary" 
                clickHandler={showTest} 
                label="Let's Go" 
            />
        </div>
    )
}

export default Home