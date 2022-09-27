import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NextButton from '../../components/NextButton/NextButton';
import Option from '../../components/Option/Option'
import Question from '../../components/Question/Question';
import { jsonData } from '../../api/jsonData';
import Button from '../../components/Button/Button';

const PersonalityTest = () => {
    const [questions, setQuestions] = useState(jsonData);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [personalityType, setPersonalityType] = useState({introvert: 0, extrovert: 0});
    const [inputValue, setInputValue] = useState('');
    const [disableButton, setDisableButton] = useState('disable');
    const [selected, setSelected] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const questionsLength = Object.keys(questions).length;
    const navigate = useNavigate();

    useEffect(() => {
        setQuestions(jsonData)
        console.log(questions)
    }, [])

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
            <>
                <Question
                    currentQuestion={currentQuestion}
                    questions={questions}
                    questionsLength={questionsLength}
                />
                <Option
                    currentQuestion={currentQuestion}
                    questions={questions}
                    questionsLength={questionsLength}
                    handleOption={handleOption}
                    selected={selected}
                />
                <Button 
                    type="secondary" 
                    clickHandler={handleNext} 
                    buttonDisabled={disableButton} 
                    label="Next Question"
                />
            </>
        </div>
    )
}

export default PersonalityTest