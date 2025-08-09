import React from 'react';
import { exportResultsAsPDF } from '../../../lib/exportpdf';
import '../../styles/sharecard.css';

// Changed 'type' to 'mbtiType' to match the prop name passed from ResultBadge
// Added 'quizResults' to destructure the user's preferences
const ShareCard = ({
  mbtiType,           // MBTI type string, e.g., "ESTJ"
  quizResults = {}    // Contains the preferences, e.g., { pathPreference: 'college' }
}) => {

  // Extract the specific preference needed for PDF export
  const preference = quizResults?.pathPreference;

  const handleDownload = () => {
     // --- Add these debug statements ---
    console.log("Attempting to download PDF...");
    console.log("MBTI Type to pass:", mbtiType);
    console.log("Preference to pass:", preference);
    // --- End debug statements ---
    
    
    // Pass 'mbtiType' and 'preference' to the export function
    exportResultsAsPDF({
      type: mbtiType, // 'exportResultsAsPDF' expects 'type', so we map 'mbtiType' to it
      preference: preference,
    });
  };

  return (
    <div className="share-card" role="region" aria-label="Share your quiz results">
      <h3>🚀 Your Personalized Career Packet Awaits!</h3>
      <p>Download your full results, strengths, and a custom guide to your next step.</p>
      <button onClick={handleDownload} className="share-card-button">
        Download My Career Packet
      </button>
      <p className="share-card-message">Be sure to download this, as your results will be deleted in 24 hours</p>
    </div>
  );
};

export default ShareCard;
