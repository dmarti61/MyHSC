'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation'; // Import the Next.js router
import questions from '@/lib/questions'; // Updated import path
import QuestionCard from '@/components/quiz/questioncard';
import ProgressBar from '@/components/quiz/progressbar';

const mbtiDimensions = ['EI', 'SN', 'TF', 'JP'];

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [counts, setCounts] = useState({
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0,
  });
  const [questionKey, setQuestionKey] = useState(0);
  const timerRef = useRef(null);

  const router = useRouter(); // Use the Next.js router

  // The handleAnswer function now receives the letter directly from QuestionCard
  const handleAnswer = (letter) => {
    // Clear any pending transitions to prevent a race condition
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    // Update the counts immediately
    setCounts(prev => ({ ...prev, [letter]: prev[letter] + 1 }));
    
    // Use the timer ONLY for the visual transition to the next question
    timerRef.current = setTimeout(() => {
      if (step + 1 === questions.length) {
        const result = buildType();
        localStorage.setItem('mbti_result', JSON.stringify({
          type: result,
          expires: new Date().getTime() + 24 * 60 * 60 * 1000,
        }));
        
        // Use router.push to navigate and pass the mbtiType as a query parameter
        router.push(`/preferences?mbtiType=${result}`);
      } else {
        setStep(prev => prev + 1);
        setQuestionKey(prev => prev + 1);
      }
      timerRef.current = null;
    }, 250);
  };

  const buildType = () => {
    return mbtiDimensions
      .map(dim => {
        const [first, second] = dim.split('');
        return counts[first] >= counts[second] ? first : second;
      })
      .join('');
  };

  const current = questions[step];

  return (
    <div>
      <ProgressBar currentStep={step + 1} totalSteps={questions.length} />
      <QuestionCard
        key={questionKey}
        question={current}
        progress={step + 1}
        totalQuestions={questions.length}
        // onAnswer now only needs to pass the letter
        onAnswer={handleAnswer}
        questionKey={questionKey}
      />
    </div>
  );
};

export default Quiz;
