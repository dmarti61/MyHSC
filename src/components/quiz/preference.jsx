import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const questions = [
  {
    id: 'pathPreference',
    text: 'Which of these pathways are you considering after high school?',
    options: [
      { label: 'Four-year college or university', value: 'college' },
      { label: 'Two-year community college or associate program', value: 'community' },
      { label: 'Apprenticeship or trade school', value: 'trade' },
      { label: 'Direct entry into a job', value: 'job' }
    ]
  },
  {
    id: 'learningStyle',
    text: 'How do you typically learn new information or skills?',
    options: [
      { label: 'Structured classes and lectures', value: 'academic' },
      { label: 'Hands-on and practical experience', value: 'hands-on' },
      { label: 'Group projects and collaboration', value: 'collaborative' },
      { label: 'Working independently on your own pace', value: 'independent' }
    ]
  },
  {
    id: 'workEnvironment',
    text: 'Which of these work environments aligns best with your preferences?',
    options: [
      { label: 'Office or tech setting', value: 'office' },
      { label: 'Outdoors or moving around', value: 'active' },
      { label: 'Helping or caring for others', value: 'service' },
      { label: 'Building, fixing, or crafting things', value: 'manual' }
    ]
  }
];

const PreferenceQuiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mbtiType = location.state?.mbtiType;

  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    localStorage.setItem('user_preferences', JSON.stringify({
        data: answers,
        expires: expirationTime,
    }));
    navigate('/results', {
      state: {
        mbtiType,
        preferences: answers
      }
    });
  };

  return (
    <div className="preference-quiz">
      <h2>🎯 Your Preferences</h2>
      <p> Please answer any preferences you may have, only one selection per question.</p>
      <br></br>
      {questions.map((q) => (
        <div className="preference-question" key={q.id}>
          <p>{q.text}</p>
          <div className="options">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                className={`option-btn ${answers[q.id] === opt.value ? 'selected' : ''}`}
                onClick={() => handleAnswer(q.id, opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleNext}
        className="next-btn"
       >
        See Your Results →
      </button>
    </div>
  );
};

export default PreferenceQuiz;
