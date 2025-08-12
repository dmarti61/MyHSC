// This is a Server Component by default, which is great for SEO.
import React from 'react';
import HomeDynamic from './homedynamic';

// This is the metadata object. Next.js automatically turns this into <head> tags.
// This is the core of your on-page SEO.
export const metadata = {
  // The Title tag is the most important element for SEO.
  // Use your primary keywords and brand name.
  title: 'My HS Counselor: Find Your Career Path After High School',

  // The description is what shows up in Google search results. Make it compelling!
  description: 'Confused about your future? Our unique personality quiz helps high school students find the right path—college, trade school, or military—based on their strengths and interests. Get your personalized roadmap today.',
  
  // Open Graph (OG) tags are for social media sharing. They make your link look professional on platforms like Facebook and X (formerly Twitter).
  openGraph: {
    title: 'My HS Counselor: Find Your Career Path After High School',
    description: 'Get matched with a career path that fits your unique personality and interests. Our 24-question quiz provides actionable roadmaps for high school students.',
    url: 'https://www.myhscounselor.com', // Replace with your actual domain
    siteName: 'My HS Counselor',
    images: [
      {
        url: 'https://www.myhscounselor.com/public/D6C51617-B041-4F51-B3C8-6F1281FC80DD.png', // Create a good quality image for social media
        width: 1200,
        height: 630,
        alt: 'High school students looking confidently at a roadmap.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// This is the server-side part of your component. It contains all the static, un-interactive content.
export default function HomePage() {
  return (
    <>
      <main className="home" role="main">
        {/* Your primary heading with a clear, keyword-rich title */}
        <h1 tabIndex="0" aria-label="Welcome to My High School Counselor">🎓 My HS Counselor</h1>

        {/* The first paragraph should immediately capture attention and explain the problem you solve */}
        <p>
          <strong>Not sure what comes after high school?</strong> You’re not alone—and you don’t have to figure it out by yourself. Whether you're heading to college, thinking about a trade, or just exploring your options, we’ll help you find a path that fits <em>you</em>.
        </p>

        {/* The second paragraph should introduce your unique solution (the quiz) */}
        <p>
          <strong>Take our 24-question quiz</strong> to uncover your personality type and career preferences. Get matched with real options—so you can move forward with confidence.
        </p>

        {/* A strong call to action to entice users to begin their journey */}
        <p>
          <strong>Start now. Your future's waiting.</strong>
        </p>
      </main>

      {/* The client component with the interactive buttons is rendered here. */}
      {/* Search engines won't see this part on the first pass, but it loads for human visitors. */}
      <HomeDynamic />
    </>
  );
}

