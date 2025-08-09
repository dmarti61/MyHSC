import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

const Home = () => {
  const [hasResult, setHasResult] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
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

  const handleStartQuiz = () => navigate('/quiz');
  const handleViewResults = () => navigate('/results');
  const handleExploreCareers = () => navigate('/explore-careers');

  return (
    <main className="home" role="main">
      <h1 tabIndex="0" aria-label="Welcome to My High School Counselor">🎓 My HS Counselor</h1>

      <p>
  <strong>Not sure what comes after high school?</strong> You’re not alone—and you don’t have to figure it out by yourself. Whether you're heading to college, thinking about a trade, or just exploring your options, we’ll help you find a path that fits <em>you</em>.
</p>

<p>
<strong>Take our 24-question quiz</strong> to uncover your personality type and career preferences. Get matched with real options—so you can move forward with confidence.
</p>

<p>
  <strong>Start now. Your future's waiting.</strong>
</p>

      <div className="button-group">
        <button onClick={handleStartQuiz} className="primary-btn">🚀 Start Your Journey</button>

        {hasResult && (
          <button onClick={handleViewResults} className="secondary-btn">View My Results</button>
        )}

        <button onClick={handleExploreCareers} className="secondary-btn">Explore Careers</button>
      </div>
    </main>
  );
};

export default Home;
