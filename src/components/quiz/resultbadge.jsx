'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
// Ensure correct paths to your data files (MBTI_MAP and CAREER_STATS)
// Import the new functions from mbtimap
import { MBTI_MAP, generateNextStepPhrase, getPathwayDisplay, generateNextStepLink } from './mbtimap'; 
import { CAREER_STATS } from '@/components/quiz/careerstats';
import { BLS_MAP } from '@/components/quiz/blsmap';
import Share_Card from '@/components/quiz/sharecard';
import '@/styles/resultbadge.css';

const ResultBadge = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [mbtiType, setMbtiType] = useState(null);
  const [quizResults, setQuizResults] = useState(null); // This state will hold the user's preferences
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Derive preferredPathway from quizResults state, which now correctly holds preferences
  const preferredPathway = quizResults?.pathPreference?.toLowerCase();

  // This useEffect is responsible for loading the initial mbtiType and preferences
  // either from URL query parameters or localStorage.
  useEffect(() => {
    let loadedMbti = null;
    let loadedPreferences = null;

    // 1. Attempt to load from URL query parameters (preferred for fresh quiz completion)
    const urlMbtiType = searchParams.get('mbtiType');
    const urlPreferences = searchParams.get('preferences');

    if (urlMbtiType && urlPreferences) {
      console.log('ResultBadge: Received mbtiType from URL:', urlMbtiType);
      try {
        loadedMbti = urlMbtiType;
        loadedPreferences = JSON.parse(urlPreferences);
        console.log('ResultBadge: Received preferences from URL:', loadedPreferences);
      } catch (e) {
        console.error('ResultBadge: Failed to parse preferences from URL query:', e);
      }
    } else {
      // 2. Fallback to localStorage if URL parameters are missing (e.g., page refresh, direct URL access)
      console.warn('ResultBadge: mbtiType or preferences not found in URL. Checking localStorage...');
      try {
        const storedMbti = localStorage.getItem('mbti_result');
        const storedPreferences = localStorage.getItem('user_preferences');

        if (storedMbti) {
          const parsedMbti = JSON.parse(storedMbti);
          if (parsedMbti.type && new Date().getTime() < parsedMbti.expires) {
            loadedMbti = parsedMbti.type;
            console.log('ResultBadge: Loaded mbtiType from localStorage:', parsedMbti.type);
          } else {
            console.warn('ResultBadge: Stored MBTI result expired or invalid. Clearing it.');
            localStorage.removeItem('mbti_result');
          }
        }

        if (storedPreferences) {
          const parsedPreferences = JSON.parse(storedPreferences);
          if (parsedPreferences.data && new Date().getTime() < parsedPreferences.expires) {
            loadedPreferences = parsedPreferences.data;
            console.log('ResultBadge: Loaded preferences from localStorage:', parsedPreferences.data);
          } else {
            console.warn('ResultBadge: Stored preferences expired or invalid. Clearing them.');
            localStorage.removeItem('user_preferences');
          }
        }
      } catch (e) {
        console.error('ResultBadge: Failed to parse data from localStorage:', e);
      }
    }

    setMbtiType(loadedMbti);
    setQuizResults(loadedPreferences);

    if (!loadedMbti || !loadedPreferences) {
      setLoading(true);
    }

  }, [searchParams]);

  // This useEffect is responsible for processing the loaded mbtiType and quizResults
  // and setting the 'data' state for display.
  useEffect(() => {
    if (!mbtiType || !quizResults) {
      setLoading(true);
      return;
    }

    console.log('Second useEffect triggered with mbtiType:', mbtiType);
    console.log('Second useEffect triggered with quizResults:', quizResults);

    const standardizedMbtiType = mbtiType.toUpperCase();
    console.log('DEBUG: quizResults object:', quizResults);
    console.log('DEBUG: quizResults.pathPreference:', quizResults?.pathPreference);
    console.log('DEBUG: currentPreferredPathway (lowercase):', preferredPathway);
    
    if (!MBTI_MAP[standardizedMbtiType]) {
      console.error(`MBTI_MAP does not contain key: ${standardizedMbtiType}`);
      setData(null);
      setLoading(false);
      return;
    }

    const mbtiData = MBTI_MAP[standardizedMbtiType];
    let careers = [...mbtiData.careers];

    const currentPreferredPathway = quizResults?.pathPreference?.toLowerCase();

    let matchingCareers = [];
    let nonMatchingCareers = [];

    careers.forEach(c => {
       console.log(`DEBUG: Career: ${c.title}, postSchoolPath: ${c.postSchoolPath?.toLowerCase()}, matches preferredPathway: ${c.postSchoolPath?.toLowerCase() === preferredPathway}`);
       if (c.postSchoolPath && typeof c.postSchoolPath === 'string' && c.postSchoolPath.toLowerCase() === currentPreferredPathway) {
        matchingCareers.push(c);
      } else {
        nonMatchingCareers.push(c);
      }
    });

    const sortedCareers = [...matchingCareers, ...nonMatchingCareers];
    const dynamicNextStepPhrase = generateNextStepPhrase(mbtiData, preferredPathway);
    const dynamicNextStepLink = generateNextStepLink(mbtiData, preferredPathway);

    setData({
      vibe: mbtiData.vibe,
      strengths: mbtiData.strengths,
      recommendedNextStep: dynamicNextStepPhrase, 
      recommendedNextStepLink: dynamicNextStepLink,
      relevantMajors: mbtiData.relevantMajors,
      sortedCareers: sortedCareers,
    });
    setLoading(false);
  }, [mbtiType, quizResults]);

  // Function to handle retaking the quiz
  const handleRetakeQuiz = () => {
    localStorage.removeItem('mbti_result');
    localStorage.removeItem('user_preferences');
    router.push('/');
  };

  if (loading) {
    return <div className="loading">Loading your results...</div>;
  }

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
        {data.recommendedNextStepLink ? (
        <p>
          <a href={data.recommendedNextStepLink} target="_blank" rel="noopener noreferrer">
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
