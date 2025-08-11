// src/components/Quiz/ProgressBar.js
import React from 'react';
import '@/styles/progressbar.css'; // style as you like

const ProgressBar = ({ currentStep, totalSteps }) => {
  const percent = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percent}%` }}>
        <span className="progress-label">{percent}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
