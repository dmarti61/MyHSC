import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// Ensure correct paths to your data files (MBTI_MAP and CAREER_STATS)
// Import the new functions from mbtimap
import { MBTI_MAP, generateNextStepPhrase, getPathwayDisplay, generateNextStepLink } from './mbtimap'; 
import { CAREER_STATS } from './careerstats';
import { BLS_MAP } from './blsmap';
import Share_Card from './sharecard';
import '../../styles/resultbadge.css';

const ResultBadge = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [mbtiType, setMbtiType] = useState(null);
  const [quizResults, setQuizResults] = useState(null); // This state will hold the user's preferences
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Derive preferredPathway from quizResults state, which now correctly holds preferences
  const preferredPathway = quizResults?.pathPreference?.toLowerCase();

  // This useEffect is responsible for loading the initial mbtiType and preferences
  // either from location.state or localStorage.
  useEffect(() => {
    let loadedMbti = null;
    let loadedPreferences = null;

    // 1. Attempt to load from location.state (preferred for fresh quiz completion)
    if (location.state && location.state.mbtiType && location.state.preferences) {
      console.log('ResultBadge: Received mbtiType from location.state:', location.state.mbtiType);
      console.log('ResultBadge: Received preferences from location.state:', location.state.preferences);
      loadedMbti = location.state.mbtiType;
      loadedPreferences = location.state.preferences;
    } else {
      // 2. Fallback to localStorage if location.state is empty (e.g., page refresh, direct URL access)
      console.warn('ResultBadge: mbtiType or preferences not found in location.state. Checking localStorage...');
      try {
        const storedMbti = localStorage.getItem('mbti_result');
        const storedPreferences = localStorage.getItem('user_preferences'); // *** NEW: Get stored preferences ***

        // Load MBTI type from localStorage
        if (storedMbti) {
          const parsedMbti = JSON.parse(storedMbti);
          if (parsedMbti.type && new Date().getTime() < parsedMbti.expires) {
            loadedMbti = parsedMbti.type;
            console.log('ResultBadge: Loaded mbtiType from localStorage:', parsedMbti.type);
          } else {
            console.warn('ResultBadge: Stored MBTI result expired or invalid. Clearing it.');
            localStorage.removeItem('mbti_result'); // Clear expired data
          }
        }

        // *** NEW: Load preferences from localStorage ***
        if (storedPreferences) {
          const parsedPreferences = JSON.parse(storedPreferences);
          if (parsedPreferences.data && new Date().getTime() < parsedPreferences.expires) {
            loadedPreferences = parsedPreferences.data; // Assign the 'data' part of your stored object
            console.log('ResultBadge: Loaded preferences from localStorage:', parsedPreferences.data);
          } else {
            console.warn('ResultBadge: Stored preferences expired or invalid. Clearing them.');
            localStorage.removeItem('user_preferences'); // Clear expired data
          }
        }
      } catch (e) {
        console.error('ResultBadge: Failed to parse data from localStorage:', e);
      }
    }

    // Update state variables. The second useEffect will trigger once these are set.
    setMbtiType(loadedMbti);
    setQuizResults(loadedPreferences);

    // Initial loading state check: If we have both, we can theoretically set loading to false immediately,
    // but the second useEffect is designed to handle the data processing, so keeping loading true
    // until it finishes is safer.
    if (!loadedMbti || !loadedPreferences) {
      setLoading(true); // Ensure loading is true if data is missing, until second useEffect resolves
    }

  }, [location.state]); // Only re-run if location.state changes (initial load or navigation)

  // This useEffect is responsible for processing the loaded mbtiType and quizResults
  // and setting the 'data' state for display.
  useEffect(() => {
    // Only proceed if both mbtiType and quizResults are available
    if (!mbtiType || !quizResults) {
      setLoading(true); // Keep loading if data is incomplete
      return; // Exit early if dependencies are not met
    }

    console.log('Second useEffect triggered with mbtiType:', mbtiType);
    console.log('Second useEffect triggered with quizResults:', quizResults);

    const standardizedMbtiType = mbtiType.toUpperCase();

    // --- ADD THESE NEW CONSOLE.LOGS HERE ---
    console.log('DEBUG: quizResults object:', quizResults);
    console.log('DEBUG: quizResults.pathPreference:', quizResults?.pathPreference);
    console.log('DEBUG: currentPreferredPathway (lowercase):', preferredPathway); // preferredPathway is already derived from quizResults?.pathPreference?.toLowerCase()
    // --- END NEW CONSOLE.LOGS ---
    
    if (!MBTI_MAP[standardizedMbtiType]) {
      console.error(`MBTI_MAP does not contain key: ${standardizedMbtiType}`);
      setData(null); // Clear data if MBTI type is invalid
      setLoading(false); // Stop loading, but indicate an error state
      return; // Exit early
    }

    const mbtiData = MBTI_MAP[standardizedMbtiType];
    let careers = [...mbtiData.careers];

    // Ensure preferredPathway is derived from the *state* `quizResults` that was set
    const currentPreferredPathway = quizResults?.pathPreference?.toLowerCase();

    let matchingCareers = [];
    let nonMatchingCareers = [];

    careers.forEach(c => {
      console.log(`DEBUG: Career: ${c.title}, postSchoolPath: ${c.postSchoolPath?.toLowerCase()}, matches preferredPathway: ${c.postSchoolPath?.toLowerCase() === preferredPathway}`); // NEW DEBUG
       if (c.postSchoolPath && typeof c.postSchoolPath === 'string' && c.postSchoolPath.toLowerCase() === currentPreferredPathway) {
        matchingCareers.push(c);
      } else {
        nonMatchingCareers.push(c);
      }
    });

    const sortedCareers = [...matchingCareers, ...nonMatchingCareers];

    // --- UPDATED: Generate dynamic next step phrase and link with user preference ---
    const dynamicNextStepPhrase = generateNextStepPhrase(mbtiData, preferredPathway);
    const dynamicNextStepLink = generateNextStepLink(mbtiData, preferredPathway);
    // --- END UPDATED ---

    setData({
      vibe: mbtiData.vibe,
      strengths: mbtiData.strengths,
      // Use the dynamically generated values
      recommendedNextStep: dynamicNextStepPhrase, 
      recommendedNextStepLink: dynamicNextStepLink,
      relevantMajors: mbtiData.relevantMajors,
      sortedCareers: sortedCareers,
    });
    setLoading(false); // Data processed successfully, set loading to false
  }, [mbtiType, quizResults]); // Re-run when mbtiType or quizResults states change

  // Function to handle retaking the quiz
  const handleRetakeQuiz = () => {
    // Remove both MBTI result and user preferences from localStorage
    localStorage.removeItem('mbti_result');
    localStorage.removeItem('user_preferences'); // *** NEW: Clear preferences on retake ***
    navigate('/'); // Redirect to the homepage/quiz start
  };

  if (loading) {
    return <div className="loading">Loading your results...</div>;
  }

  // If loading is false but data is null, it means there was an error loading or processing MBTI data
  if (!data) {
    return <div className="error-message">Could not load MBTI data. Please try again.</div>;
  }

  return (
    <div className="result-badge-container">
      <h2 className="mbti-type">{mbtiType}</h2>
      <p className="vibe">{data.vibe}</p>

      <div className="section-block">
        <h3>Your Strengths:</h3>
        <ul className="strengths-list">
          {data.strengths.map((strength, index) => (
            <li key={index}>{strength}</li>
          ))}
        </ul>
      </div>

      <div className="section-block">
      <h3>Recommended Next Step:</h3>
        {data.recommendedNextStepLink ? ( // Conditionally render as a link
        <p>
          <a href={data.recommendedNextStepLink} target="_blank" rel="noopener noreferrer">
        {/* Use dangerouslySetInnerHTML to render bold text from getPathwayDisplay */}
        <span dangerouslySetInnerHTML={{ __html: data.recommendedNextStep }} />
          </a>
        </p>
    ) : (
    <p><span dangerouslySetInnerHTML={{ __html: data.recommendedNextStep }} /></p>
  )}
</div>

      {data.relevantMajors && data.relevantMajors.length > 0 && (
        <div className="section-block">
          <h3>Relevant College Majors:</h3>
          <ul className="majors-list">
            {data.relevantMajors.map((major, index) => (
              <li key={index}>{major}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="section-block">
        <h3>Suggested Careers:</h3>
        {data.sortedCareers.length > 0 ? (
          <ul className="career-list">
            {data.sortedCareers.map((c, idx) => {
              const detailedStats = CAREER_STATS[c.title];

              return (
                <li key={c.title || idx} className="career-item">
                  <span className={`career-name ${c.postSchoolPath?.toLowerCase() === preferredPathway ? 'highlighted-career' : ''}`}>
                    {c.postSchoolPath?.toLowerCase() === preferredPathway ? '🌟 ' : ''}
                    {c.title}
                  </span>
                  {c.pathway && <span className="pathway"> ({c.pathway})</span>}
                  {c.description && (
                    <p className="career-description">{c.description}</p>
                  )}

                  {detailedStats ? (
                    <div className="career-details">
                      <p><strong>Education:</strong> {detailedStats.education}</p>
                      <p><strong>Median Salary:</strong> {detailedStats.salary}</p>
                      <p><strong>Job Outlook (2022-2032):</strong> {detailedStats.outlook}</p>
                      {detailedStats.skills && detailedStats.skills.length > 0 && (
                        <p><strong>Key Skills:</strong> {detailedStats.skills.join(', ')}</p>
                      )}
                      {detailedStats.certifications && detailedStats.certifications.length > 0 && (
                        <p><strong>Certifications:</strong> {detailedStats.certifications.join(', ')}</p>
                      )}
                      {detailedStats.environment && (
                        <p><strong>Work Environment:</strong> {detailedStats.environment}</p>
                      )}
                     {detailedStats.soc_code && BLS_MAP[detailedStats.soc_code] && (
                        <p className="bls-link">
                        <a href={`https://www.bls.gov/ooh/${BLS_MAP[detailedStats.soc_code]}.htm`} target="_blank" rel="noopener noreferrer">
                        Learn more from BLS ({detailedStats.soc_code})
                        </a>
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className="no-detailed-stats">Detailed stats not available for this career.</p>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No specific career suggestions found for your type.</p>
        )}
      </div>

      <div className="share-section">
        <h3>Share Your Results!</h3>
        <Share_Card mbtiType={mbtiType} quizResults={quizResults} />
      </div>
      <div className="retake-quiz">
        <button onClick={handleRetakeQuiz} className="retake-btn">
          Retake Quiz
        </button>
      </div>
    </div>
  );
};

export default ResultBadge;
