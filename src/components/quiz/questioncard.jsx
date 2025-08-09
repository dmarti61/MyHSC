import React, { useState, useEffect } from 'react';

const QuestionCard = ({ question, onAnswer, progress, totalQuestions, questionKey }) => {
  const [localSelectedAnswer, setLocalSelectedAnswer] = useState(null);

  // CRITICAL FIX: Use questionKey as the dependency to force a state reset
  useEffect(() => {
    setLocalSelectedAnswer(null);
  }, [questionKey]); // This ensures the effect fires on every new question

  const handleButtonClick = (value, event) => {
    setLocalSelectedAnswer(value);
    
    if (event && event.target) {
      event.target.blur();
    }
    
    onAnswer(value);
  };

  return (
    <div className="question-card">
      <h3>
        Question {progress} of {totalQuestions}
      </h3>
      <p>{question.text}</p>
      <div className="options">
        {question.options.map((option) => {
          const isSelected = localSelectedAnswer === option.value;
          return (
            <button
              key={`${question.text}-${option.value}`}
              className={`option-btn ${isSelected ? 'selected' : ''}`}
              onClick={(e) => handleButtonClick(option.value, e)}
              disabled={!!localSelectedAnswer}
              aria-label={`Answer option: ${option.label}`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
