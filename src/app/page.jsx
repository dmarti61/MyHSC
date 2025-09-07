// This is a Server Component by default, which is great for SEO.
import React from 'react';
import HomeDynamic from './homedynamic';

// This is the metadata object. Next.js automatically turns this into <head> tags.
// This is the core of your on-page SEO.
export const metadata = {
  // The Title tag is the most important element for SEO.
  // Use your primary keywords and brand name.
  title: 'My HS Counselor: Career Path & Personality Quiz for High School Students',

  // The description is what shows up in Google search results. Make it compelling!
  description: 'Find your career path after high school with our free personality quiz. Discover options for college, trade school, or the military based on your strengths and interests. Get a personalized career roadmap today.',
  
  // Open Graph (OG) tags are for social media sharing. They make your link look professional on platforms like Facebook and X (formerly Twitter).
  openGraph: {
    title: 'Find Your Future: Free Career Quiz for High Schoolers | My HS Counselor',
    description: 'Our 24-question quiz helps high school students discover their ideal career path. Get a custom roadmap for college, trade school, or the military. Start your journey today!',
    url: 'https://www.myhscounselor.com', // Replace with your actual domain
    siteName: 'My HS Counselor',
    images: [
      {
        url: 'https://www.myhscounselor.com/public/og-image.png', // Suggestion for a new image name
        width: 1200,
        height: 630,
        alt: 'High school student confidently choosing a career path.',
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

