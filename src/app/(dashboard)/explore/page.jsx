import React, { useMemo } from 'react';
import styles from '../../../styles/explore.module.css';
import { MBTI_MAP } from '../../../components/quiz/mbtimap';
import { CAREER_STATS } from '../../../components/quiz/careerstats';
import { BLS_MAP } from '../../../components/quiz/blsmap';

const getUniqueCareers = () => {
  const allCareers = new Map();
  Object.values(MBTI_MAP).forEach(({ careers }) => {
    careers.forEach(career => {
      // Use the career title as a unique key
      if (!allCareers.has(career.title)) {
        // Look up the career stats and merge them with the career object
        const careerWithStats = {
          ...career,
          ...CAREER_STATS[career.title],
        };
        allCareers.set(career.title, careerWithStats);
      }
    });
  });
  return Array.from(allCareers.values());
};

const groupCareersByEducation = (careers) => {
  const grouped = careers.reduce((acc, career) => {
    // Check for `postSchoolPath` as the education level
    const educationLevel = career.postSchoolPath || 'Other';
    if (!acc[educationLevel]) {
      acc[educationLevel] = [];
    }
    acc[educationLevel].push(career);
    return acc;
  }, {});

  // Sort the keys (education levels) for consistent display order
  const customOrder = ["college", "community", "trade", "job", "other"];
  const sortedKeys = Object.keys(grouped).sort((a, b) => {
    return customOrder.indexOf(a.toLowerCase()) - customOrder.indexOf(b.toLowerCase());
  });

  // Create a new object with sorted keys
  const sortedGrouped = {};
  sortedKeys.forEach(key => {
    const displayKey = key.charAt(0).toUpperCase() + key.slice(1);
    sortedGrouped[displayKey] = grouped[key];
  });

  return sortedGrouped;
};

// UPDATED CareerCard to display all relevant stats
const CareerCard = ({ title, pathway, description, soc_code, salary, outlook, education, skills }) => (
  <div className={styles.card}>
    <h4>{title}</h4>
    <p><strong>Career Pathway:</strong> {pathway}</p>
    <p>{description}</p>
    <p><strong>Median Salary:</strong> {salary}</p>
    <p><strong>Typical Education:</strong> {education}</p>
    <p><strong>Job Outlook:</strong> {outlook}</p>
    {skills && skills.length > 0 && (
      <p><strong>Common Skills:</strong> {skills.join(', ')}</p>
    )}
    {soc_code && BLS_MAP[soc_code] && (
      <p className="bls-link">
        <a href={`https://www.bls.gov/ooh/${BLS_MAP[soc_code]}.htm`} target="_blank" rel="noopener noreferrer">
          Learn more from BLS ({soc_code})
        </a>
      </p>
    )}
  </div>
);

const ExploreCareers = () => {
  const uniqueCareers = useMemo(() => getUniqueCareers(), []);
  const groupedCareers = useMemo(() => groupCareersByEducation(uniqueCareers), [uniqueCareers]);

  return (
    <div className={styles.container}>
      <h1>Explore Careers by Educational Path</h1>
      <p className={styles.intro}>
        Not ready for the quiz? Start by exploring careers that share similar skills and interests. Careers are grouped by the most common educational path.
      </p>
      {Object.entries(groupedCareers).map(([educationLevel, careers]) => (
        <section key={educationLevel} className={styles.section}>
          <h2 className={styles.pathway}>{educationLevel}</h2>
          <div className={styles.cardGrid}>
            {careers.map(career => (
              <CareerCard key={career.title} {...career} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ExploreCareers;
