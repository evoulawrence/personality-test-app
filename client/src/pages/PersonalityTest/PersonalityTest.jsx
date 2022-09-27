import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Option from '../../components/Option/Option'
import Question from '../../components/Question/Question';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner'; 
import { BASE_URL } from '../../api/api';

const PersonalityTest = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [personalityType, setPersonalityType] = useState({introvert: 0, extrovert: 0});
    const [inputValue, setInputValue] = useState('');
    const [disableButton, setDisableButton] = useState('disable');
    const [selected, setSelected] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const questionsLength = Object.keys(questions).length;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuestions = async () => {
            const resp = await axios.get(BASE_URL);
            setQuestions(resp.data);
            setIsLoading(false);
        }
        fetchQuestions();
    }, []);

    const handleOption = (e, id) => {
        setInputValue(e.currentTarget.getAttribute('data-personality'));
        setDisableButton('');
        setSelected(id);
    } 

    const handleNext = () => {
        const option = inputValue.toLowerCase();
        personalityType[option] ? personalityType[option] += 1 : personalityType[option] = 1;
        
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questionsLength + 1) {
          setCurrentQuestion(nextQuestion);
        } else {
            navigate('/result', {
                state: {
                    myPersonality: personalityType
                }
            });
        }

        setPersonalityType(personalityType);
        setDisableButton('disable');
        setInputValue('');
        setSelected('');
    }
    
    return (
        <div className="quizWrapper">
            {isLoading && <Spinner />}
            <>
                <Question
                    currentQuestion={currentQuestion}
                    questions={questions}
                    questionsLength={questionsLength}
                    isLoading={isLoading}
                />
                <Option
                    currentQuestion={currentQuestion}
                    questions={questions}
                    questionsLength={questionsLength}
                    handleOption={handleOption}
                    selected={selected}
                />
                {!isLoading && <Button 
                    type="secondary" 
                    clickHandler={handleNext} 
                    buttonDisabled={disableButton} 
                    label="Next Question"
                />}
            </>
        </div>
    )
}

export default PersonalityTest