import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-sure-page">
      <h1>✨ Poof! Page Vanished!</h1>
      <p>
        Well, that's unexpected! This page seems to have pulled a disappearing act faster than a teenager on chores day.
      </p>
      <p>
        No magic spells needed to fix this, though. Just click below to get back to solid ground.
      </p>
      <button onClick={() => navigate('/')}>
        🏠 Return to Home Base
      </button>
    </div>
  );
};

export default NotFound;
