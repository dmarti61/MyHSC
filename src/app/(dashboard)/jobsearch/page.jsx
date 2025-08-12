import React from 'react';
import Link from 'next/link';

// This is the metadata object for SEO.
export const metadata = {
  title: 'Job Search Guide for High School Graduates | MyHSCounselor.com',
  description: 'Your complete guide to finding a job after high school. Learn how to write a resume with no experience, ace your first interview, and find job opportunities in your area.',
  openGraph: {
    title: 'Job Search Essentials for High School Graduates',
    description: 'Get practical tips for crafting your first resume, preparing for interviews, and finding entry-level jobs right out of high school.',
    url: 'https://myhscounselor.com/jobsearch',
    siteName: 'MyHSCounselor.com',
    images: [
      {
        url: 'https://myhscounselor.com/og-image-job-search.jpg', // Create a specific image for this guide
        width: 1200,
        height: 630,
        alt: 'A graphic showing a resume and a graduation cap on a desk.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://myhscounselor.com/jobsearch',
  },
};

const JobSearch = () => (
  <div className="page-container">
    <h1 tabIndex="0">🚀 Job Search Essentials for High School Graduates</h1>
    <p>
      Whether you're heading straight into the workforce after graduation, looking for a summer job, or planning to work while pursuing further education, knowing how to find and land a job is a super valuable skill. Let's get you prepared!
    </p>

    <section>
      <h2>Crafting Your First Resume (No Experience? No Problem!)</h2>
      <p>
        Your resume is your personal advertisement. Even if you don't have a lot of formal work experience, you have valuable skills!
      </p>
      <ul>
        <li>
          <strong>Contact Information:</strong> Your name, phone, professional email address.
        </li>
        <li>
          <strong>Objective/Summary:</strong> A short, punchy sentence about what kind of job you're looking for and what you bring (e.g., "Hardworking high school graduate seeking an entry-level position where strong customer service skills can be utilized.").
        </li>
        <li>
          <strong>Education:</strong> Your high school name, graduation date (or expected), GPA (if good), and any honors or relevant coursework.
        </li>
        <li>
          <strong>Experience (Broader View):</strong>
          <ul>
            <li><strong>Volunteer Work:</strong> Any time you've helped out counts!</li>
            <li><strong>Extracurricular Activities:</strong> Sports, clubs, drama, school newspaper – highlight leadership roles or teamwork.</li>
            <li><strong>Babysitting/Pet Sitting/Yard Work:</strong> Informal jobs show responsibility.</li>
            <li><strong>Class Projects:</strong> Did you lead a team? Solve a problem?</li>
          </ul>
          <p className="emphasis">
            <strong>Mentor Advice:</strong> Focus on **action verbs** and **results**. Instead of "Was in band," try "Collaborated with 30 band members to perform at community events."
          </p>
        </li>
        <li>
          <strong>Skills:</strong> List practical skills (e.g., Microsoft Office, social media, basic coding, customer service, communication, teamwork, problem-solving).
        </li>
        <li>
          <strong>Keep it Concise:</strong> For your first jobs, aim for one page.
        </li>
      </ul>
      <p>
        There are many free online resume templates you can use to get started!
        <br />
        <a href="/ResumeGuide.pdf" target="_blank" rel="noopener noreferrer">
          <strong>Download our high school resume template and guide here!</strong>
        </a>
      </p>
    </section>

    <section>
      <h2>Ace Your Interview!</h2>
      <p>
        The interview is your chance to shine and show off your personality and potential.
      </p>
      <ul>
        <li>
          <strong>Research the Company/Job:</strong> Know what they do and what the job entails. This shows you're serious.
        </li>
        <li>
          <strong>Dress Appropriately:</strong> For most entry-level jobs, clean, neat, and slightly formal (like nice pants/skirt and a collared shirt or blouse) is a safe bet. When in doubt, overdress slightly.
        </li>
        <li>
          <strong>Practice Common Questions:</strong>
          <ul>
            <li>"Tell me about yourself." (Keep it concise, relevant to the job)</li>
            <li>"Why do you want to work here?"</li>
            <li>"What are your strengths/weaknesses?" (Be honest about weaknesses but explain how you're working on them)</li>
            <li>"Tell me about a time you worked as part of a team." (Even from school projects!)</li>
          </ul>
        </li>
        <li>
          <strong>Prepare Your Questions:</strong> Always have 1-2 questions to ask the interviewer (e.g., "What does a typical day look like in this role?" or "What are the opportunities for growth here?"). This shows engagement.
        </li>
        <li>
          <strong>Follow Up:</strong> Send a polite thank-you email within 24 hours.
        </li>
      </ul>
    </section>

    <section>
      <h2>Finding Opportunities: Where to Look</h2>
      <p>
        There are many places to discover job openings. Don't limit yourself!
      </p>
      <ul>
        <li>
          <strong>Online Job Boards:</strong> Indeed, LinkedIn, Glassdoor, ZipRecruiter are popular. Filter for "entry-level" or "no experience."
        </li>
        <li>
          <strong>Company Websites:</strong> Check the "Careers" section of companies you're interested in.
        </li>
        <li>
          <strong>Local Businesses:</strong> Many small businesses post "Help Wanted" signs or accept applications in person.
        </li>
        <li>
          <strong>Networking (Yes, Even Now!):</strong> Tell family, friends, teachers, and neighbors you're looking for a job. They might know of openings or someone who can help.
        </li>
        <li>
          <strong>High School Resources:</strong> Your school counselor might have a list of local employers hiring graduates.
        </li>
      </ul>
      <p>
        Getting your first job can take some effort, but every application and interview is practice. Keep learning, stay positive, and you'll find the right fit!
      </p>
    </section>
  </div>
);

export default JobSearch;
