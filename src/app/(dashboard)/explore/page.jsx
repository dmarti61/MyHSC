import React from 'react';
import Link from 'next/link';
import '@/styles/explore.module.css';
import { MBTI_MAP } from '@/components/quiz/mbtimap';
import { CAREER_STATS } from '@/components/quiz/careerstats';
import { BLS_MAP } from '@/components/quiz/blsmap';

// SEO Metadata for the Explore Careers page
export const metadata = {
  title: 'Explore Careers by Educational Path: High School Graduates | MyHSCounselor.com',
  description: 'Explore careers based on educational paths like college, trade school, or direct entry jobs. Discover career pathways, median salaries, and job outlook for each field.',
  openGraph: {
    title: 'Explore Careers by Education',
    description: 'Find your career path. Browse a curated list of careers grouped by the required educational path, from college degrees to trade school certifications and direct entry jobs.',
    url: 'https://myhscounselor.com/explore',
    siteName: 'MyHSCounselor.com',
    images: [
      {
        url: 'https://myhscounselor.com/og-image-explore.jpg', // Create a specific image for this page
        width: 1200,
        height: 630,
        alt: 'A graphic showing different career paths and educational levels.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://myhscounselor.com/explore',
  },
};

// Data processing logic moved to the server component
const getUniqueCareers = () => {
  const allCareers = new Map();
  Object.values(MBTI_MAP).forEach(({ careers }) => {
    careers.forEach(career => {
      if (!allCareers.has(career.title)) {
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
    const educationLevel = career.postSchoolPath || 'Other';
    if (!acc[educationLevel]) {
      acc[educationLevel] = [];
    }
    acc[educationLevel].push(career);
    return acc;
  }, {});

  const customOrder = ["college", "community", "trade", "job", "other"];
  const sortedKeys = Object.keys(grouped).sort((a, b) => {
    const aIndex = customOrder.indexOf(a.toLowerCase());
    const bIndex = customOrder.indexOf(b.toLowerCase());
    return aIndex - bIndex;
  });

  const sortedGrouped = {};
  sortedKeys.forEach(key => {
    const displayKey = key.charAt(0).toUpperCase() + key.slice(1);
    sortedGrouped[displayKey] = grouped[key];
  });

  return sortedGrouped;
};

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
  // Data is processed directly here, in the Server Component.
  const uniqueCareers = getUniqueCareers();
  const groupedCareers = groupCareersByEducation(uniqueCareers);

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
