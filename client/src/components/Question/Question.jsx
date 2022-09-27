import React from 'react';
import './question.css';

const Question = ({ currentQuestion, questions, questionsLength }) => {

    return (
        <div className='questionSection'>
            {questions && questionsLength > 0 ? (
                <>
                    <div className='questionCount'>
                        <span>Question {(currentQuestion + 1) - 1}</span>/{questionsLength}
                    </div>
                    <div className='questionText'>{questions && questionsLength > 0 && questions[currentQuestion].description}</div>
                </>
            ) : (
                null
            )}
        </div>
    )
}

export default Question