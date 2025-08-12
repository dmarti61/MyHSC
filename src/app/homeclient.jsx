'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [hasResult, setHasResult] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // This logic runs only on the client side
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      localStorage.setItem('hasVisited', 'true');
    }

    const stored = localStorage.getItem('mbti_result');
    if (stored) {
      const parsed = JSON.parse(stored);
      const now = new Date().getTime();
      // Ensure 'expires' property exists before comparing
      if (parsed.expires && parsed.expires > now) {
        setHasResult(true);
      } else {
        localStorage.removeItem('mbti_result');
      }
    }
  }, []);

  const handleStartQuiz = () => router.push('/quiz');
  const handleViewResults = () => router.push('/results');
  const handleExploreCareers = () => router.push('/explore');

  return (
     <div className="button-group">
        <button onClick={handleStartQuiz} className="primary-btn">🚀 Start Your Journey</button>

        {hasResult && (
          <button onClick={handleViewResults} className="secondary-btn">View My Results</button>
        )}

        <button onClick={handleExploreCareers} className="secondary-btn">Explore Careers</button>
      </div>
  );
};

export default Home;
