import React from 'react';
import './option.css';

function Option({ questions, currentQuestion, questionsLength, handleOption, selected }) {
    return (
        <ul className='optionSection'>
        {
            questions && questionsLength > 0 && questions[currentQuestion].answers.map((ans) => (
                <li 
                    className="optionLabel" 
                    style={{backgroundColor: selected === ans.id ? "#59636E" : ""}} 
                    data-personality={ans.personality_type} 
                    key={ans.id}
                    onClick={(e) => {handleOption(e, ans.id)}}  
                >
                {ans.description}
                </li>
            ))
        }
        </ul>    
    )
}

export default Option